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
      class="relative w-full max-w-2xl sm:max-w-3xl"
      v-slot="{ canScrollNext }"
      @init-api="setApi"
      :opts="{ loop: true }"
    >
      <CarouselContent>
        <CarouselItem v-for="(career, index) in careerList" :key="career.id || index">
          <div class="p-1">
            <Card class="border-2">
              <CardContent class="p-4 sm:p-6">
                <!-- Company and Title -->
                <div class="text-center">
                  <div class="text-xl font-bold text-emerald-600 sm:text-2xl dark:text-emerald-400">
                    {{ career.company }}
                  </div>
                  <div class="text-muted-foreground mt-2 text-base font-medium sm:text-lg">
                    {{ career.title }} — {{ career.years }} {{ career.years === 1 ? 'yr' : 'yrs' }}
                  </div>
                </div>

                <!-- Description -->
                <p v-if="career.description" class="text-foreground/80 mt-4 text-sm sm:text-base">
                  {{ career.description }}
                </p>

                <!-- Achievements -->
                <div
                  v-if="career.achievements && career.achievements.length > 0"
                  class="mt-6 space-y-3"
                >
                  <h3 class="text-foreground text-sm font-semibold">Key Achievements:</h3>
                  <ul class="space-y-2">
                    <li
                      v-for="(achievement, idx) in career.achievements"
                      :key="idx"
                      class="text-foreground/75 text-xs sm:text-sm"
                    >
                      <div class="font-medium text-emerald-600 dark:text-emerald-400">
                        • {{ achievement.title }}
                      </div>
                      <div class="ml-4 text-xs sm:text-sm">{{ achievement.description }}</div>
                    </li>
                  </ul>
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
