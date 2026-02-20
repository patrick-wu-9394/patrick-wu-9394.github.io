<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { BookUser, Briefcase, Home, Info, Menu, Moon, Sun, ToolCase, X } from 'lucide-vue-next'

import { ref } from 'vue'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

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
  <nav
    class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur"
  >
    <div class="flex h-14 max-w-screen-2xl items-center justify-center gap-2 px-4 sm:gap-4">
      <!-- Desktop Navigation Menu -->
      <NavigationMenu class="hidden md:flex">
        <NavigationMenuList>
          <a
            v-for="item in items"
            :key="item.title"
            :href="item.url"
            :class="navigationMenuTriggerStyle()"
            class="group bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <component :is="item.icon" class="mr-2 h-4 w-4" />
            <span>{{ item.title }}</span>
          </a>
        </NavigationMenuList>
      </NavigationMenu>

      <!-- Mobile Menu Button & Theme Toggle -->
      <div class="absolute right-4 flex items-center gap-1 sm:gap-2">
        <!-- Mobile Menu Button -->
        <Button
          variant="ghost"
          size="icon"
          class="md:hidden"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle navigation menu"
          aria-expanded="mobileMenuOpen"
        >
          <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </Button>

        <!-- Theme Toggle -->
        <Button variant="ghost" size="icon" aria-label="Toggle dark mode" @click="toggleColorMode">
          <Sun v-if="colorMode === 'light'" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
          <span class="sr-only">{{
            colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
          }}</span>
        </Button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="mobileMenuOpen" class="border-border/40 bg-background/50 border-t md:hidden">
      <div class="flex flex-col items-center gap-1 px-4 py-3 sm:px-6">
        <a
          v-for="item in items"
          :key="item.title"
          :href="item.url"
          class="hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring flex w-full items-center justify-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
          @click="mobileMenuOpen = false"
        >
          <component :is="item.icon" class="mr-2 h-4 w-4" />
          <span>{{ item.title }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>
