import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Transportation from '@/pages/Transportation.vue'
import Activities from '@/pages/Activities.vue'
import AboutTheHost from '@/pages/AboutTheHost.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/transportation', component: Transportation },
  { path: '/activities', component: Activities },
  { path: '/host', component: AboutTheHost }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  title: 'JinStay'
})

export default router
