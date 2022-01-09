import router from '@/router'

import { useUserAccountStore } from '@/modules/UserAccount/store'

import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'
import { systemTitle } from '@/locales/data'

import NProgress from 'nprogress'
import { Router } from 'vue-router'
import { changeLocale } from '@/locales/useLocale'

NProgress.configure({
  showSpinner: false
})

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userAccountStore = useUserAccountStore()

    NProgress.start()

    document.title = `${to.meta.title || ''} - ${systemTitle}`

    console.log('😄😄😄 ', to)

    const currentRouteLocale = to.params.locale

    if (
      allowlist.find(
        name => to.name === name
      )
    ) {
      next()
      return
    }

    // 获取用户信息
    const { data, error } = await userAccountStore.getUserInfo()

    if (error) {
      changeLocale(currentRouteLocale || data.language)
      Cookie.remove('token')
      Cookie.remove('name')
      next('/en/user/login')
      return
    }

    if (data.user.username && Cookie.get('name') === data.user.username) {
      // TODO: It must be used together with the backend
      changeLocale(currentRouteLocale || data.language)
      next()
      return
    }

    // ElMessage.error('登录失败，请重新登录')
    Cookie.remove('token')
    Cookie.remove('name')
    changeLocale(currentRouteLocale || userAccountStore.locale)
    next(`/${currentRouteLocale || userAccountStore.locale}/user/login`)
  })

  router.afterEach((to) => {
    NProgress.done()
  })
}
