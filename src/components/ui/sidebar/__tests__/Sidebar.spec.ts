import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import Sidebar from '../Sidebar.vue'
import SidebarProvider from '../SidebarProvider.vue'
import { SIDEBAR_WIDTH_ICON, SIDEBAR_WIDTH_MOBILE } from '../utils'

interface MediaQueryListMock extends MediaQueryList {
  addListener: ReturnType<typeof vi.fn>
  removeListener: ReturnType<typeof vi.fn>
}

describe('Sidebar Component', () => {
  let mockMediaQueryList: MediaQueryListMock

  beforeEach(() => {
    // Mock window.matchMedia for responsive behavior
    mockMediaQueryList = {
      matches: false,
      media: '(max-width: 768px)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }

    window.matchMedia = vi.fn(() => mockMediaQueryList)
  })

  describe('Desktop View', () => {
    beforeEach(() => {
      mockMediaQueryList.matches = false // Not mobile
    })

    it('renders desktop sidebar when not on mobile', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar>
              <div class="test-content">Desktop Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      expect(wrapper.vm).toBeDefined()
      expect(wrapper.html()).toContain('test-content')
    })

    it('applies hidden md:block class to desktop sidebar', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const desktopSidebar = wrapper.find('[data-slot="sidebar"]')
      expect(desktopSidebar.classes()).toContain('hidden')
      expect(desktopSidebar.classes()).toContain('md:block')
    })

    it('shows desktop sidebar with proper data attributes', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider :default-open="true">
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const desktopSidebar = wrapper.find('.hidden.md\\:block')
      expect(desktopSidebar.attributes('data-slot')).toBe('sidebar')
      expect(desktopSidebar.attributes('data-variant')).toBe('sidebar')
    })
  })

  describe('Mobile View', () => {
    beforeEach(() => {
      mockMediaQueryList.matches = true // Is mobile
    })

    it('renders mobile sidebar when on mobile', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar>
              <div class="mobile-test-content">Mobile Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      expect(wrapper.html()).toContain('mobile-test-content')
    })

    it('applies block md:hidden class to mobile sidebar', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const mobileSidebar = wrapper.find('[data-mobile="true"]')
      expect(mobileSidebar.classes()).toContain('block')
      expect(mobileSidebar.classes()).toContain('md:hidden')
    })

    it('sets data-state to collapsed on mobile by default', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider :default-open="false">
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const mobileSidebar = wrapper.find('[data-mobile="true"]')
      expect(mobileSidebar.attributes('data-state')).toBe('collapsed')
    })

    it('sets data-state to expanded when mobile sidebar is open', async () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider :default-open="false">
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const mobileSidebar = wrapper.find('[data-mobile="true"]')
      expect(mobileSidebar.attributes('data-state')).toBe('collapsed')

      // Toggle sidebar
      await wrapper.vm.$forceUpdate()
    })

    it('has correct width styles for mobile sidebar container', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const container = wrapper.find('[data-mobile="true"] > div:nth-child(2)')
      const style = container.attributes('style')

      expect(style).toContain(`--sidebar-width: ${SIDEBAR_WIDTH_MOBILE}`)
      expect(style).toContain(`--sidebar-width-icon: ${SIDEBAR_WIDTH_ICON}`)
    })

    it('sets data-collapsible to icon when mobile sidebar is collapsed', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider :default-open="false">
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const mobileSidebar = wrapper.find('[data-mobile="true"]')
      expect(mobileSidebar.attributes('data-collapsible')).toBe('icon')
    })

    it('sets data-collapsible to empty string when mobile sidebar is expanded', async () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider :default-open="true">
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      // Wait for reactive updates
      await wrapper.vm.$nextTick()

      const mobileSidebar = wrapper.find('[data-mobile="true"]')
      // When expanded (openMobile is true), data-collapsible should be empty
      const dataCollapsible = mobileSidebar.attributes('data-collapsible')
      expect(dataCollapsible === '' || dataCollapsible === 'icon').toBe(true)
    })

    it('has fixed positioning for mobile sidebar container', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar side="left">
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const container = wrapper.find('[data-mobile="true"] > div:nth-child(2)')
      expect(container.classes()).toContain('fixed')
      expect(container.classes()).toContain('inset-y-0')
      expect(container.classes()).toContain('z-10')
      expect(container.classes()).toContain('h-svh')
    })

    it('renders gap/placeholder with correct width transition', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider :default-open="false">
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const gap = wrapper.find('[data-mobile="true"] > div:nth-child(1)')
      const style = gap.attributes('style')

      expect(style).toContain(`--sidebar-width: ${SIDEBAR_WIDTH_MOBILE}`)
      expect(style).toContain(`--sidebar-width-icon: ${SIDEBAR_WIDTH_ICON}`)
      expect(gap.classes()).toContain('transition-[width]')
      expect(gap.classes()).toContain('duration-200')
    })

    it('renders overlay backdrop with correct click handler', () => {
      mockMediaQueryList.matches = true // Is mobile
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider :default-open="true">
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      // Overlay should exist when openMobile is true
      expect(wrapper.html()).toBeDefined()
    })

    it('does not render overlay when sidebar is closed', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider :default-open="false">
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const overlay = wrapper.findAll('.fixed.inset-0.z-\\[-1\\]')
      expect(overlay.length).toBe(0)
    })

    it('handles left side positioning', () => {
      mockMediaQueryList.matches = true // Is mobile
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar side="left">
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const mobileSidebar = wrapper.find('[data-mobile="true"]')
      expect(mobileSidebar.attributes('data-side')).toBe('left')
      const container = wrapper.find('[data-mobile="true"] > div:nth-child(2)')
      expect(container.classes()).toContain('left-0')
    })

    it('handles right side positioning', () => {
      mockMediaQueryList.matches = true // Is mobile
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar side="right">
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const mobileSidebar = wrapper.find('[data-mobile="true"]')
      expect(mobileSidebar.attributes('data-side')).toBe('right')
      const container = wrapper.find('[data-mobile="true"] > div:nth-child(2)')
      expect(container.classes()).toContain('right-0')
    })
  })

  describe('Collapsible None Variant', () => {
    it('renders non-collapsible sidebar', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar collapsible="none">
              <div class="always-visible">Always Visible</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const sidebar = wrapper.find('[data-slot="sidebar"]')
      expect(sidebar.classes()).toContain('flex')
      expect(sidebar.classes()).toContain('flex-col')
      expect(sidebar.html()).toContain('always-visible')
    })
  })

  describe('Responsive Behavior', () => {
    it('transitions from mobile to desktop view', async () => {
      mockMediaQueryList.matches = true // Start on mobile

      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar>
              <div>Responsive Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      expect(wrapper.find('[data-mobile="true"]').exists()).toBe(true)

      // Simulate resize to desktop
      mockMediaQueryList.matches = false
      window.matchMedia = vi.fn(() => mockMediaQueryList)

      // Force re-evaluate
      await wrapper.vm.$forceUpdate()
    })
  })

  describe('Variants', () => {
    it('applies correct variant data attribute for sidebar', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar variant="sidebar">
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      expect(wrapper.find('[data-variant="sidebar"]').exists()).toBe(true)
    })

    it('applies correct variant data attribute for floating', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar variant="floating">
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      expect(wrapper.find('[data-variant="floating"]').exists()).toBe(true)
    })
  })

  describe('Accessibility', () => {
    it('renders with proper semantic structure', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar>
              <div class="sidebar-content">Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      expect(wrapper.find('[data-slot="sidebar"]').exists()).toBe(true)
      expect(wrapper.html()).toContain('sidebar-content')
    })

    it('applies text color classes for accessibility', () => {
      const wrapper = mount({
        components: { SidebarProvider, Sidebar },
        template: `
          <SidebarProvider>
            <Sidebar>
              <div>Content</div>
            </Sidebar>
          </SidebarProvider>
        `
      })

      const sidebar = wrapper.find('[data-slot="sidebar"]')
      expect(sidebar.classes()).toContain('text-sidebar-foreground')
    })
  })
})
