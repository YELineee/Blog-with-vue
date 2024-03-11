import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import Music from '../views/Music.vue'
import Yakyak from '../views/Yakyak.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
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
