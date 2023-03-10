
import { useI18n } from 'vue-i18n'

export default {
  install (app: App<any>) {
    app.config.globalProperties._t = function (str: string) {
      const localeInject = useI18n()
      return localeInject.t(str)
    }
  }
}
