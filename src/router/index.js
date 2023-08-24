import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/employers',
      name: 'employers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Employers.vue')
    },
    {
        path: '/payments',
        name: 'payments',
        component: () => import('../views/Payments.vue')
    },
    {
        path: '/ratings',
        name: 'ratings',
        component: () => import('../views/Ratings.vue')
    },
    {
        path: '/new-payment',
        name: 'new-payment',
        component: () => import('../views/NewPayment.vue')
    }
  ]
})

export default router
