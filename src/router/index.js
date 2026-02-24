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
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/work/experience',
      name: 'Work Experience',
      component: () => import('../views/PlaceholderView.vue'),
    },
    {
      path: '/work/projects',
      name: 'Projects',
      component: () => import('../views/PlaceholderView.vue'),
    },
    {
      path: '/education/diplomas',
      name: 'Diplomas',
      component: () => import('../views/PlaceholderView.vue'),
    },
    {
      path: '/education/research',
      name: 'Research',
      component: () => import('../views/PlaceholderView.vue'),
    },
    {
      path: '/competitive-programming/career',
      name: 'Career',
      component: () => import('../views/PlaceholderView.vue'),
    },
    {
      path: '/competitive-programming/events',
      name: 'Events',
      component: () => import('../views/PlaceholderView.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/PlaceholderView.vue'),
    },
  ],
})

export default router
