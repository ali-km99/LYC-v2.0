import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { ar } from 'vuetify/locale'
const vuetify = createVuetify({
  theme: {},
  locale: {
    locale: 'ar',
    messages: { ar },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

export default vuetify
