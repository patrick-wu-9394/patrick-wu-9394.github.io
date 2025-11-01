<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'

const colorMode = useColorMode({ disableTransition: false })
</script>

<template>
  <ButtonGroup orientation="horizontal">
    <Button variant="outline" size="icon" @click="colorMode = 'light'" aria-label="Light mode">
      <Sun class="h-4 w-4" />
    </Button>
    <ButtonGroupSeparator />
    <Button variant="outline" size="icon" @click="colorMode = 'dark'" aria-label="Dark mode">
      <Moon class="h-4 w-4" />
    </Button>
  </ButtonGroup>
</template>
