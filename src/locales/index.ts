import { type App } from 'vue'
// import { localeMap } from './config'
import { createI18n } from 'vue-i18n'
// import { setHtmlPageLang, setLoadLocalePool } from './helper'
import { useUserAccountStoreWithOut } from '@/modules/UserAccount/store'

async function createI18nOptions() {
  console.log('🍌', 'createI18nOptions')
  const userAccountStore = useUserAccountStoreWithOut()
  const locale = userAccountStore.locale
  const defaultLocal = await import(`./lang/${locale}.ts`)
  const message = defaultLocal.default ?? {}

  // setHtmlPageLang(locale)
  // setLoadLocalePool((loadLocalePool) => {
  //   loadLocalePool.push(locale)
  // })

  console.log('locale', locale)
  return {
    locale,
    // legacy: false,
    // fallbackLocale: locale, // set fallback locale
    messages: {
      [locale]: message as { [key: string]: string; }
    },
    globalInjection: true,
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true
  }
}

export let i18n: ReturnType<typeof createI18n>

// setup i18n instance with global
export async function setupI18n(app: App) {
  const options = await createI18nOptions()
  i18n = createI18n(options)
  app.use(i18n)
}

