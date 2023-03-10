import { createRouterGuards } from '@/router/permission'
import routes from './routes'

const history = process.env.VITE_ROUTER_MODE === 'hash'
  ? createWebHashHistory()
  : createWebHistory()

const router = createRouter({
  history,
  routes
})

export async function setupRouter(app: App) {
  createRouterGuards(router)
  app.use(router)

  await router.isReady()
}

export default router

