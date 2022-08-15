/*
 * @Author: pdsuwwz pdsu.wwz@foxmail.com
 * @Date: 2022-01-09 19:11:21
 * @LastEditors: pdsuwwz pdsu.wwz@foxmail.com
 * @LastEditTime: 2022-08-15 14:26:21
 * @FilePath: /vue-boilerplate-i18n/src/locales/index.ts
 * @Description:
 *
 * Copyright (c) 2022 by pdsuwwz pdsu.wwz@foxmail.com, All Rights Reserved.
 */
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

  return {
    locale,
    legacy: false,
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

