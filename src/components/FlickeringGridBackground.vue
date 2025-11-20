<script setup lang="ts">
import FlickeringGrid from '@/components/ui/flickering-grid/FlickeringGrid.vue'
</script>

<template>
  <!-- 1. The main parent container (relative positioning, defined size) -->
  <div class="relative w-full h-full overflow-hidden">

    <!-- 2. The FlickeringGrid component (absolute positioned background) -->
    <FlickeringGrid
      class="absolute inset-0 z-0 pointer-events-none"
      :square-size="8"
      :grid-gap="8"
      color="#50C878"
      :max-opacity="0.125"
      :flicker-chance=".1"
    />

    <!-- 3. Your foreground content wrapper (relative positioning, appears above the grid) -->
    <div class="relative z-10 flex h-full items-center justify-center p-8">
      <slot />
    </div>

  </div>
</template>
