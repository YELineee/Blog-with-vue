import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/Music.vue')
    },
    {
      path: '/yakyak',
      name: 'yakyak',
      component: () => import('../views/Yakyak.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/Resume.vue')
    },
    {
      path: '/projects/baize',
      name: 'projects',
      component: () => import('../components/projects/baize.vue'),
    }
  ]
})

export default router
