import { CustomRouteItem } from '@/types'
import childrenRoutes from '@/router/child-routes'
import { localesMapping, findLocaleByCode } from '@/locales/config'
import { isUndefined } from '@/utils/type'
import { changeLocale } from '@/locales/useLocale'

const Layout = () => import('@/components/Layout/index.vue')

// Creates regex (zh-hans|en)
function getLocaleRegex () {
  let reg = ''
  localesMapping.forEach((localeItem, index) => {
    const line = index !== localesMapping.length - 1 ? '|' : ''
    reg = `${reg}${localeItem.localeCode}${line}`
  })
  return `(${reg})`
}

const routes: Array<CustomRouteItem> = [
  {
    path: '/',
    name: 'Root',
    redirect: '/project'
  },
  {
    path: `/:locale${getLocaleRegex()}?`,
    component: Layout,
    beforeEnter (to, from, next) {
      const isFoundLocale = findLocaleByCode(to.params.locale)

      if (isFoundLocale) {
        changeLocale(to.params.locale)
      }
      if (isFoundLocale && !isUndefined(to.params.pathMatch)) {
        next(`/${to.params.locale}/project`)
        return
      }
      next()
    },
    children: [
      {
        path: '',
        name: 'LangRoot',
        redirect: {
          name: 'Project'
        }
      },
      ...childrenRoutes
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/components/404.vue')
  }
]

export default routes
