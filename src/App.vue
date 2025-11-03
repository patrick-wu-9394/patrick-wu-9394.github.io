<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarProvider } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <!-- Make the whole viewport a flex container -->
    <div class="flex min-h-screen w-screen overflow-hidden">
      <!-- Sidebar takes its natural width -->
      <AppSidebar />

      <!-- Main content flexes to fill remaining space -->
      <main class="flex-1 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </SidebarProvider>
</template>
