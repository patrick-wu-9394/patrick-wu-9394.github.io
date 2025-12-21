<script setup lang="ts">
import { useMobileDetection } from 'vue3-mobile-detection'
import { toast } from 'vue-sonner'

import { onMounted } from 'vue'

const { isMobile } = useMobileDetection()

// Show once per session to avoid repeated popups
onMounted(() => {
  try {
    if (isMobile?.value && !sessionStorage.getItem('mobileDisclaimerShown')) {
      toast.warning(
        'Mobile support is not fully integrated. Please view this app on desktop or tablet.'
      )
      sessionStorage.setItem('mobileDisclaimerShown', '1')
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
