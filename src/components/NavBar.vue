<script setup lang="ts">
import router from '@/router'
import { mdiWeb } from '@mdi/js'

// تعريف أنواع الحدث باستخدام TypeScript
const emit = defineEmits<{
  scrollToSection: []
}>()
const handleNavigation = (): void => {
  emit('scrollToSection') // إرسال الحدث مع الـ ID
  router.replace('/') // الانتقال إلى الصفحة الرئيسية
}
</script>

<template>
  <div>
    <nav class="h-28 w-full bg-white/20 backdrop-blur-sm sticky top-0">
      <div class="flex items-center justify-between">
        <!-- الشعار -->
        <img src="../assets/imeges/logo2.png" width="100px" alt="main-logo" class="m-2 ml-10" />

        <!-- القائمة -->
        <div class="flex flex-col">
          <p class="text-center text-3xl text-blue-500 mb-2">{{ $t('content.clubName') }}</p>
          <div>
            <ul :dir="$i18n.locale == 'ar' ? 'ltr' : 'rtl'" class="flex flex-row gap-10 text-white">
              <li class="hover:text-[#394A98] hover:scale-110 duration-150 transition text-lg">
                <a @click="handleNavigation" href="#contact"> {{ $t('Nav["contact"]') }} </a>
              </li>
              <RouterLink :to="{ name: 'Advertisements' }">
                <li
                  class="hover:text-[#394A98] hover:scale-110 duration-150 transition text-lg hover:cursor-pointer"
                >
                  {{ $t('Nav["Advertisements"]') }}
                </li>
              </RouterLink>

              <RouterLink :to="{ name: 'PhotoGallery' }">
                <li class="hover:text-[#394A98] hover:scale-110 duration-150 transition text-lg">
                  {{ $t('Nav["PhotoGallery"]') }}
                </li>
              </RouterLink>

              <!-- <RouterLink :to="{ name: 'GoldenHistory' }">
              <li class="hover:text-[#394A98] hover:scale-110 duration-150 transition text-lg">
                {{ $t('Nav["GoldenHistory"]') }}
              </li>
            </RouterLink> -->
              <RouterLink :to="{ name: 'ProgramsPage' }">
                <li
                  class="hover:text-[#394A98] hover:scale-110 duration-150 transition text-lg hover:cursor-pointer"
                >
                  {{ $t('Nav["Programs"]') }}
                </li>
              </RouterLink>
              <RouterLink :to="{ name: 'about' }">
                <li class="hover:text-[#394A98] hover:scale-110 duration-150 transition text-lg">
                  {{ $t('Nav["about"]') }}
                </li>
              </RouterLink>
              <RouterLink :to="{ name: 'home' }">
                <li
                  class="hover:text-[#394A98] hover:scale-110 duration-150 transition text-lg hover:cursor-pointer"
                >
                  {{ $t('Nav["home"]') }}
                </li>
              </RouterLink>
            </ul>
          </div>
        </div>

        <!-- اختيار اللغة -->
        <div class="flex p-4 mr-4 gap-3">
          <select
            class="w-16 text-slate-300 bg-transparent border border-gray-300 rounded text-end"
            v-model="$i18n.locale"
          >
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
            >
              {{ locale }}
            </option>
          </select>
          :{{ $t('Nav["lang"]') }}
          <v-icon :icon="mdiWeb" color="#FFFFFF"></v-icon>
        </div>
      </div>
    </nav>
  </div>
</template>
