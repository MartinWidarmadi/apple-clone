import { createRouter, createWebHistory } from 'vue-router'
import BackToSchoolView from '@/views/BackToSchoolView.vue'
import StoreView from '@/views/StoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/BaseLayout.vue'),
      children: [
        { path: '/', component: BackToSchoolView },
        { path: '/stores', name: 'stores', component: StoreView }
      ]
    }
  ]
})

export default router
