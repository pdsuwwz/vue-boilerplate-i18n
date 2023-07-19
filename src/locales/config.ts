import elementEnLocale from 'element-plus/es/locale/lang/en'
import elementZhLocale from 'element-plus/es/locale/lang/zh-cn'

/**
 * 缺省值 i18n 语言
 */
export const DEFAULT_LANG = 'zh-hans'

export const localesMapping = [
  {
    localeCode: 'zh-hans',
    localeName: '简体中文',
    elementLocale: elementZhLocale
  },
  {
    localeCode: 'en',
    localeName: 'English',
    elementLocale: elementEnLocale
  }
]

export const findLocaleByCode = (targetLocaleCode) => {
  return localesMapping.find(
    localeItem => localeItem.localeCode === targetLocaleCode
  )
}
