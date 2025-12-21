import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('MobileDisclaimerSonner', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.restoreAllMocks()
  })

  it('shows warning on mobile', async () => {
    const warningMock = vi.fn()
    vi.doMock('vue3-mobile-detection', () => ({
      useMobileDetection: () => ({ isMobile: () => true })
    }))
    vi.doMock('vue-sonner', () => ({ toast: { warning: warningMock } }))
    const { default: MobileDisclaimerSonner } = await import('../MobileDisclaimerSonner.vue')
    mount(MobileDisclaimerSonner)
    expect(warningMock).toHaveBeenCalledWith(
      'Mobile support is not fully integrated. Please view this app on desktop or tablet.'
    )
  })

  it('does not show warning on desktop or tablet', async () => {
    const warningMock = vi.fn()
    vi.doMock('vue3-mobile-detection', () => ({
      useMobileDetection: () => ({ isMobile: () => false })
    }))
    vi.doMock('vue-sonner', () => ({ toast: { warning: warningMock } }))
    const { default: MobileDisclaimerSonner } = await import('../MobileDisclaimerSonner.vue')
    mount(MobileDisclaimerSonner)
    expect(warningMock).not.toHaveBeenCalled()
  })
})
