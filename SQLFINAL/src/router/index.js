import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: '',
    //   component: AppView
    // },
    {
      path: '/',
      name: '',
      component: () => import('../views/DefaultView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
