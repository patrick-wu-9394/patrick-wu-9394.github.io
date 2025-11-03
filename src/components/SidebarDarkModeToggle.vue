<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar'

const colorMode = useColorMode({ disableTransition: false })
const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <SidebarMenu>
  <SidebarMenuButton>
    <!-- Use variant link to match hover effect from other SidebarMenuButtons -->
    <!-- Use has-[>svg]:px-2! to match padding for <a> ref -->
    <Button
      variant="link"
      class="w-full cursor-pointer justify-start font-normal has-[>svg]:px-2!"
      aria-label="Toggle theme"
      @click="toggleColorMode"
    >
      <Sun v-if="colorMode === 'light'" class="h-4 w-4" />
      <Moon v-else class="h-4 w-4" />
      <span>Theme</span>
    </Button>
  </SidebarMenuButton>
  </SidebarMenu>
</template>
