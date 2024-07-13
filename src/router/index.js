import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Transportation from '@/pages/Transportation.vue'
import Activities from '@/pages/Activities.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/transportation', component: Transportation },
  { path: '/activities', component: Activities }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
