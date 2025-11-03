<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'
import { SidebarMenuButton } from '@/components/ui/sidebar'

const colorMode = useColorMode({ disableTransition: false })

const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <SidebarMenuButton
    variant="default"
    class="cursor-pointer"
    aria-label="Toggle theme"
    @click="toggleColorMode"
  >
    <Sun
      v-if="colorMode === 'light'"
      class="h-4 w-4"
    />
    <Moon
      v-else
      class="h-4 w-4"
    />
    <span>Theme</span>
  </SidebarMenuButton>
</template>
