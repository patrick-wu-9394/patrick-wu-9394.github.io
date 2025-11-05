<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
</script>

<template>
  <div class="flex min-h-full w-full items-center justify-center px-4">
    <div>
      <Carousel v-slot="{ canScrollNext }" class="relative w-full max-w-xs">
        <CarouselContent>
          <CarouselItem v-for="(_, index) in 5" :key="index">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext v-if="canScrollNext" />
      </Carousel>
    </div>
  </div>
</template>

<style scoped></style>
