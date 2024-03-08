import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Read',
      component: () => import('../components/Read.vue')
    },
    {
      path: '/create/:contentId?',
      name: 'Create',
      component: () => import('../components/Create.vue')
    },
    {
      path: '/detail/:contentId',
      name: 'Detail',
      component: () => import('../components/Detail.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
