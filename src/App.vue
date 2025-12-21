<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import FlickeringGridBackground from '@/components/FlickeringGridBackground.vue'
import { SidebarProvider } from '@/components/ui/sidebar'
import MobileDisclaimerSonner from './components/MobileDisclaimerSonner.vue';
import Sonner from './components/ui/sonner/Sonner.vue';
</script>

<template>
  <SidebarProvider>
    <!-- Make the whole viewport a positioned container so sidebar can overlay -->
    <div class="relative min-h-screen w-screen overflow-hidden">
      <!-- Sidebar is positioned absolutely so it overlays (does NOT push content) -->
      <div class="absolute top-0 left-0 z-50 h-full">
        <AppSidebar />
      </div>

      <!-- Main content stays full width and is drawn beneath the overlaying sidebar -->
      <main class="relative z-0 flex-1 overflow-y-auto">
        <FlickeringGridBackground>
          <RouterView />
        </FlickeringGridBackground>
      </main>
    </div>
  </SidebarProvider>
  <MobileDisclaimerSonner />
  <Sonner />
</template>
