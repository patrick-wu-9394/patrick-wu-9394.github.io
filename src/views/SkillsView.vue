<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { skillCategories } from '@/data/skills'
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
    <div class="w-full max-w-4xl space-y-8">
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-foreground text-3xl font-bold sm:text-4xl">Skills & Expertise</h1>
        <p class="text-foreground/70 mt-2 text-sm sm:text-base">
          Software Engineering, DevOps, and Platform Engineering
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        <div v-for="category in skillCategories" :key="category.id" class="space-y-3">
          <Card class="h-full border-2">
            <CardHeader class="pb-3">
              <CardTitle class="text-emerald-600 dark:text-emerald-400">
                {{ category.name }}
              </CardTitle>
              <CardDescription v-if="category.description" class="text-xs">
                {{ category.description }}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge
                  v-for="skill in category.skills"
                  :key="skill.id"
                  class="bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300"
                >
                  {{ skill.name }}
                  <span v-if="skill.proficiency" class="ml-1 opacity-70" :title="skill.proficiency">
                    •
                  </span>
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
