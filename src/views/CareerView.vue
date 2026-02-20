<script setup lang="ts">
import { watchOnce } from '@vueuse/core'

import { ref } from 'vue'

import { Card, CardContent } from '@/components/ui/card'
import type { CarouselApi } from '@/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import { careerList } from '@/data/careers'

const api = ref<CarouselApi>()
const totalCount = ref(0)
const current = ref(0)
function setApi(val: CarouselApi) {
  api.value = val
}
watchOnce(api, api => {
  if (!api) return
  totalCount.value = api.scrollSnapList().length
  current.value = api.selectedScrollSnap() + 1
  api.on('select', () => {
    current.value = api.selectedScrollSnap() + 1
  })
})
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
    <Carousel
      class="relative w-full max-w-lg sm:max-w-md"
      v-slot="{ canScrollNext }"
      @init-api="setApi"
      :opts="{ loop: true }"
    >
      <CarouselContent>
        <CarouselItem v-for="(career, index) in careerList" :key="career.id || index">
          <div class="p-1">
            <Card class="border-2">
              <CardContent class="flex aspect-square items-center justify-center p-4 sm:p-6">
                <div class="text-center">
                  <div class="text-xl font-bold text-emerald-600 sm:text-2xl dark:text-emerald-400">
                    {{ career.company }}
                  </div>
                  <div class="text-muted-foreground mt-2 text-base font-medium sm:text-lg">
                    {{ career.title }} — {{ career.years }} {{ career.years === 1 ? 'yr' : 'yrs' }}
                  </div>
                  <!-- <p class="mt-2 text-sm" v-if="career.description">{{ career.description }}</p> -->
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext v-if="canScrollNext" />
    </Carousel>
    <div class="text-muted-foreground mt-4 py-2 text-center text-sm font-medium sm:text-base">
      Career {{ current }} of {{ totalCount }}
    </div>
  </div>
</template>

<style scoped></style>
