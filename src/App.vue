<script setup lang="ts">
import AppNavigation from '@/components/AppNavigation.vue'
import FlickeringGridBackground from '@/components/FlickeringGridBackground.vue'
import { Toaster } from '@/components/ui/sonner'

import MobileDisclaimerSonner from './components/MobileDisclaimerSonner.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <!-- Navigation Header -->
    <AppNavigation />

    <!-- Main content (accounts for nav height, no scrolling) -->
    <main class="flex-1 overflow-hidden">
      <FlickeringGridBackground class="h-full">
        <RouterView />
      </FlickeringGridBackground>
    </main>

    <MobileDisclaimerSonner />
  </div>

  <Toaster />
</template>
