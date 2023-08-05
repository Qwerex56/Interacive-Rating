import { createRouter, createWebHistory } from 'vue-router';

import RatingStep from '@/views/RatingStep.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'rating',
      component: RatingStep
    },
  ]
})

export default router
