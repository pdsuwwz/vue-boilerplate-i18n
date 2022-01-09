import { i18n } from '@/locales'

import { computed, unref } from 'vue'
import { useUserAccountStore, useUserAccountStoreWithOut } from '@/modules/UserAccount/store'

export function setI18nLanguage(locale) {
  const localeStore = useUserAccountStoreWithOut()

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    (i18n.global.locale as any).value = locale
  }
  localeStore.setLanguage({
    locale
  })
}

// Switching the language will change the locale of useI18n
// And submit to configuration modification
export async function changeLocale(locale) {
  const globalI18n = i18n.global
  const currentLocale = unref(globalI18n.locale)
  if (currentLocale === locale) {
    return locale
  }

  const langModule = await import(`./lang/${locale}.ts`)
  if (!langModule) return

  globalI18n.setLocaleMessage(locale, langModule.default ?? {})

  setI18nLanguage(locale)
  return locale
}

export const useLocale = () => {
  const store = useUserAccountStore()
  const getLocale = computed(() => store.locale)

  return computed((): any => {
    return i18n.global.getLocaleMessage(getLocale.value)
  })
}
