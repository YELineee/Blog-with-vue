import { createRouter, createWebHistory } from 'vue-router'

const IndexView = () => import('../views/IndexView.vue')
const Music = () => import('../views/Music.vue')
const Yakyak = () => import('../views/Yakyak.vue')
const Resume = () => import('../views/Resume.vue')

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
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ]
})

export default router
