<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

import { computed } from 'vue'

import FlickeringGrid from '@/components/ui/flickering-grid/FlickeringGrid.vue'

const colorMode = useColorMode()

const gridColor = computed(() => {
  // emerald green for dark mode, forest green for light mode
  return colorMode.value === 'light' ? '#0B6623' : '#50C878'
})
</script>

<template>
  <!-- 1. The main parent container (relative positioning, full height when h-full is passed) -->
  <div class="relative w-full overflow-hidden" :class="$attrs.class">
    <!-- 2. The FlickeringGrid component (absolute positioned background) -->
    <FlickeringGrid
      class="pointer-events-none absolute inset-0 z-0"
      :square-size="8"
      :grid-gap="8"
      :color="gridColor"
      :max-opacity="0.125"
      :flicker-chance="0.15"
    />

    <!-- 3. Your foreground content wrapper (relative positioning, appears above the grid) -->
    <div class="relative z-10 flex h-full w-full items-center justify-center p-8">
      <slot />
    </div>
  </div>
</template>
