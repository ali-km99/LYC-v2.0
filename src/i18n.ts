import { createI18n, type I18nOptions } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

type LocaleMessage = Record<string, string>
type LocaleMessages = Record<string, LocaleMessage>

function loadLocaleMessages(): LocaleMessages {
  const locales: Array<Record<string, LocaleMessage>> = [{ en }, { ar }]
  const messages: LocaleMessages = {}

  locales.forEach((lang) => {
    const [key] = Object.keys(lang) // الحصول على أول مفتاح (مثلاً 'en' أو 'ar')
    messages[key] = lang[key]
  })

  return messages
}

const i18nOptions: I18nOptions = {
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
}

export default createI18n(i18nOptions)
