import { createRouter, createWebHistory } from 'vue-router'
import PingComponent from '../components/PingComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.url),
  routes: [
    {
      path: '/ping',
      name: 'Ping',
      component: PingComponent
    }]
}
)

export default router
