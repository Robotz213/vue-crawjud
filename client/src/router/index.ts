import { createRouter, createWebHistory } from 'vue-router'
import PingComponent from '../components/PingComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/ping',
      component: PingComponent
    }]
}
)

export default router
