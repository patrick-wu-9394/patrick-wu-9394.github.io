import { createRouter, createWebHistory } from 'vue-router'

import CareerView from '@/views/CareerView.vue'
import HomeView from '@/views/HomeView.vue'
import SkillsView from '@/views/SkillsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { label: 'Home' }
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
      meta: { label: 'Skills' }
    },
    {
      path: '/career',
      name: 'career',
      component: CareerView,
      meta: { label: 'Career' }
    }
  ]
})

// Update document title based on route
router.afterEach(to => {
  const baseTitle = 'patrick-wu-9394.github.io'
  const routeLabel = to.meta.label as string | undefined
  document.title = routeLabel ? `${baseTitle} | ${routeLabel}` : baseTitle
})

export default router
