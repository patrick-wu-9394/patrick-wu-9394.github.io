<script setup lang="ts">
import { useMobileDetection } from 'vue3-mobile-detection'
import { toast } from 'vue-sonner'

import { onMounted } from 'vue'

const { isMobile } = useMobileDetection()

onMounted(() => {
  try {
    if (isMobile()) {
      toast.warning(
        'Mobile support is not fully integrated. Please view this app on desktop or tablet.'
      )
    }
  } catch {
    // silently ignore sessionStorage errors
  }
})
</script>

<template>
  <!-- component does not render UI; it triggers the Sonner toast on mount -->
  <div aria-hidden="true"></div>
</template>
