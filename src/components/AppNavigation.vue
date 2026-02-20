<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { BookUser, Briefcase, Home, Info, Menu, Moon, Sun, ToolCase, X } from 'lucide-vue-next'
import { ref } from 'vue'

import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

const colorMode = useColorMode({ disableTransition: false })
const mobileMenuOpen = ref(false)

const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Career',
    url: '/career',
    icon: Briefcase
  },
  {
    title: 'Skills',
    url: '#',
    icon: ToolCase
  },
  {
    title: 'References',
    url: '#',
    icon: BookUser
  },
  {
    title: 'Help',
    url: '#',
    icon: Info
  }
]
</script>

<template>
  <nav class="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="flex h-14 max-w-screen-2xl items-center justify-center gap-4 px-4">
      <!-- Desktop Navigation Menu -->
      <NavigationMenu class="hidden md:flex">
        <NavigationMenuList>
          <a
            v-for="item in items"
            :key="item.title"
            :href="item.url"
            :class="navigationMenuTriggerStyle()"
            class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            <component :is="item.icon" class="mr-2 h-4 w-4" />
            <span>{{ item.title }}</span>
          </a>
        </NavigationMenuList>
      </NavigationMenu>

      <!-- Mobile Menu Button & Theme Toggle -->
      <div class="absolute right-4 flex items-center gap-2">
        <!-- Mobile Menu Button -->
        <Button
          variant="ghost"
          size="icon"
          class="md:hidden"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
        >
          <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </Button>

        <!-- Theme Toggle -->
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          @click="toggleColorMode"
        >
          <Sun v-if="colorMode === 'light'" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
        </Button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="mobileMenuOpen" class="border-t border-border/40 md:hidden">
      <div class="flex flex-col items-center gap-1 px-4 py-2">
        <a
          v-for="item in items"
          :key="item.title"
          :href="item.url"
          class="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          @click="mobileMenuOpen = false"
        >
          <component :is="item.icon" class="mr-2 h-4 w-4" />
          <span>{{ item.title }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>
