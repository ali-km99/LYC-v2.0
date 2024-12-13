import { createI18n, type I18nOptions } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

type LocaleMessage = Record<string, string>
type LocaleMessages = Record<string, LocaleMessage>
function loadLocaleMessages() {
  const messages: Record<string, any> = {}
  const localeFiles = import.meta.glob('./locales/*.json', { eager: true })

  for (const [path, content] of Object.entries(localeFiles)) {
    const locale = path.match(/\/([^/]+)\.json$/)?.[1]
    if (locale && typeof content === 'object' && 'default' in content!) {
      messages[locale] = content.default
    }
  }

  return messages
}

const i18nOptions: I18nOptions = {
  locale: 'ar',
  fallbackLocale: 'ar',
  messages: loadLocaleMessages(),
}

export default createI18n(i18nOptions)
