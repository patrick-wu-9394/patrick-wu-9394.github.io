<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { toast } from 'vue-sonner'

import { onMounted } from 'vue'

const isMobile = useMediaQuery('(max-width: 768px)')

onMounted(() => {
  try {
    if (isMobile.value) {
      toast.warning(
        'Mobile support is not fully integrated. Please view this app on desktop or tablet.'
      )
    }
  } catch {
    // silently ignore errors
  }
})
</script>

<template>
  <!-- component does not render UI; it triggers the Sonner toast on mount -->
  <div aria-hidden="true"></div>
</template>
