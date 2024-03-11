import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import TestView from '../views/TestView.vue'
import YELINEEE from '../views/YELineee.vue'
import Music from '../views/Music.vue'
import Yakyak from '../views/Yakyak.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/yakyak',
      name: 'yakyak',
      component: Yakyak
    }
  ]
})

export default router
