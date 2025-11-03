<script setup lang="ts">
import { BookUser, Briefcase, Home, Info, ToolCase } from 'lucide-vue-next'

import DarkModeToggle from '@/components/SidebarDarkModeToggle.vue'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from '@/components/ui/sidebar'

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home
  },
  {
    title: 'Experience',
    url: '#',
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
  <Sidebar variant="sidebar" collapsible="icon">
    <SidebarContent>
      <SidebarHeader>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroupLabel>Settings</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
              <DarkModeToggle />
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
