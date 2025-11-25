import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import ResumeView from '@/views/ResumeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { left: 0, top: 0 }
  },
})

export default router
