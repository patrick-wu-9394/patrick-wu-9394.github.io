<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useColorMode } from '@vueuse/core'
import {
  ButtonGroup,
  ButtonGroupSeparator
} from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'

const colorMode = useColorMode({disableTransition: false})
</script>

<template>
  <ButtonGroup orientation="horizontal">
    <Button
      variant="outline"
      size="icon"
      @click="colorMode = 'light'"
      aria-label="Light mode"
    >
      <Sun class="h-4 w-4" />
    </Button>
    <ButtonGroupSeparator />
    <Button
      variant="outline"
      size="icon"
      @click="colorMode = 'dark'"
      aria-label="Dark mode"
    >
      <Moon class="h-4 w-4" />
    </Button>
  </ButtonGroup>
</template>
