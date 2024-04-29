import { useUserAccountStore } from '@/modules/UserAccount/store'

import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'
import { systemTitle } from '@/locales/data'

import NProgress from 'nprogress'
import type { Router } from 'vue-router'
import { changeLocale } from '@/locales/useLocale'

NProgress.configure({
  showSpinner: false
})

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userAccountStore = useUserAccountStore()

    NProgress.start()

    document.title = `${ to.meta.title || '' } - ${ systemTitle }`

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

    if (!Cookie.get('token')) {
      next(`/${ currentRouteLocale || userAccountStore.locale }/user/login`)
      return
    }

    // 获取用户信息
    const { data, error } = await userAccountStore.getUserInfo()

    if (error) {
      Cookie.remove('token')
      const _locale = changeLocale(
        currentRouteLocale || userAccountStore.locale
      )
      next(`/${ _locale }/user/login`)
      return
    }

    changeLocale(currentRouteLocale || data.language)
    next()
  })

  router.afterEach((to) => {
    NProgress.done()
  })
}
