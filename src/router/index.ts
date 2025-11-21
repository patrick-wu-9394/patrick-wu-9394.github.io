import { createRouter, createWebHistory } from 'vue-router'

import CareerView from '@/views/CareerView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/career',
      name: 'career',
      component: CareerView
    }
  ]
})

export default router
