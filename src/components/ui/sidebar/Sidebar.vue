<script setup lang="ts">
import { cn } from '@/lib/utils'

import type { SidebarProps } from '.'
import { SIDEBAR_WIDTH_ICON, SIDEBAR_WIDTH_MOBILE, useSidebar } from './utils'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<SidebarProps>(), {
  side: 'left',
  variant: 'sidebar',
  collapsible: 'offcanvas'
})

const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
</script>

<template>
  <div
    v-if="collapsible === 'none'"
    data-slot="sidebar"
    :class="
      cn('bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col', props.class)
    "
    v-bind="$attrs"
  >
    <slot />
  </div>

  <!-- Mobile sidebar (always visible, can be toggled closed) -->
  <div
    v-if="isMobile"
    class="group peer text-sidebar-foreground block md:hidden"
    data-slot="sidebar"
    data-mobile="true"
    :data-state="openMobile ? 'expanded' : 'collapsed'"
    :data-collapsible="openMobile ? '' : 'icon'"
    :data-variant="variant"
    :data-side="side"
  >
    <!-- Mobile sidebar gap/placeholder -->
    <div
      :class="
        cn(
          'relative bg-transparent transition-[width] duration-200 ease-linear',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)'
        )
      "
      :style="{
        '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
        '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
        width: openMobile ? SIDEBAR_WIDTH_MOBILE : SIDEBAR_WIDTH_ICON
      }"
    />
    <!-- Mobile sidebar container -->
    <div
      :class="
        cn(
          'fixed inset-y-0 z-10 h-svh transition-[width] duration-200 ease-linear flex',
          side === 'left' ? 'left-0' : 'right-0',
          props.class
        )
      "
      :style="{
        '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
        '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
        width: openMobile ? SIDEBAR_WIDTH_MOBILE : SIDEBAR_WIDTH_ICON
      }"
      v-bind="$attrs"
    >
      <div
        data-sidebar="sidebar"
        class="bg-sidebar text-sidebar-foreground flex h-full w-full flex-col"
      >
        <slot />
      </div>
      <!-- Mobile overlay backdrop when sidebar is open -->
      <div
        v-if="openMobile"
        class="fixed inset-0 z-[-1] bg-black/50"
        @click="setOpenMobile(false)"
      />
    </div>
  </div>

  <!-- Desktop sidebar -->
  <div
    v-else
    class="group peer text-sidebar-foreground hidden md:block"
    data-slot="sidebar"
    :data-state="state"
    :data-collapsible="state === 'collapsed' ? collapsible : ''"
    :data-variant="variant"
    :data-side="side"
  >
    <!-- This is what handles the sidebar gap on desktop  -->
    <div
      :class="
        cn(
          'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)'
        )
      "
    />
    <div
      :class="
        cn(
          'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
          props.class
        )
      "
      v-bind="$attrs"
    >
      <div
        data-sidebar="sidebar"
        class="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
