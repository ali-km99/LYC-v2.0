import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/GoldenHistory',
      name: 'GoldenHistory',

      component: () => import('../views/GoldenHistory.vue'),
    },
    {
      path: '/aboutUs',
      name: 'about',

      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/PhotoGallery',
      name: 'PhotoGallery',

      component: () => import('../views/PhotoGallery.vue'),
    },
  ],
})

export default router
