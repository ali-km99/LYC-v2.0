import en from './locales/en.json'

/**
 * Define the structure of the translation messages based on the `en.json` file
 */
type MessageSchema = typeof en

declare module 'vue-i18n' {
  // Extend the default vue-i18n module
  export interface DefineLocaleMessage extends MessageSchema {}
  export interface DefineDateTimeFormat {}
  export interface DefineNumberFormat {}
}
