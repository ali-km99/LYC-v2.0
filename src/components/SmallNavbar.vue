<script setup lang="ts">
import { mdiWeb } from '@mdi/js'
import { ref } from 'vue'

const minu = ref(false)

const toggelMinu = () => {
  console.log('minu')
  if (minu.value !== !minu.value) {
    minu.value = !minu.value
  }
}
import { useRouter } from 'vue-router' // استيراد Vue Router

// تعريف أنواع الحدث باستخدام TypeScript
const emit = defineEmits<{
  scrollToSection: []
}>()

const router = useRouter()

// التنقل وإرسال الحدث
const handleNavigation = (): void => {
  emit('scrollToSection') // إرسال الحدث مع الـ ID
  router.replace('/') // الانتقال إلى الصفحة الرئيسية
}
</script>

<template>
  <header class="md:hidden">
    <nav
      class="bg-bluee"
      :class="{
        'h-[28rem] ': minu,
        'h-24 ': !minu,
      }"
    >
      <div class="flex w-11/12 py-2 justify-between mx-auto items-center">
        <div class="p-2">
          <img src="../assets/imeges/emptylogo.png" width="65" alt="" />
        </div>

        <div
          dir="ltr"
          id="btnShow"
          @click="toggelMinu"
          class="text-white flex flex-col space-y-1 p-2 transition duration-300"
        >
          <span class="w-7 h-1 bg-white rounded-md"></span>
          <span
            class="w-7 h-1 bg-white duration-300 span rounded-md"
            :class="{ 'w-4': minu }"
          ></span>
          <span
            :class="{ 'w-2': minu }"
            class="w-7 h-1 bg-white duration-500 span2 rounded-md"
          ></span>
        </div>
      </div>
      <section id="hero" class="h-24 bg-no-repeat bg-left bg-nav-BG flex items-center relative">
        <ul
          v-if="minu"
          id="tabel"
          class="duration-300 bg-bluee text-white bg-opacity-60 rounded-sm w-11/12 mx-auto flex flex-col items-center justify-items-center absolute top-1 left-3 z-30"
        >
          <!-- <li class="py-2 border-b-2 border-bluee-sec w-full text-center"> -->

          <li
            v-motion-pop
            class="py-2 border-b-2 border-bluee-sec w-full text-center bg-[#302b2b94] rounded-t-lg"
          >
            <RouterLink :to="{ name: 'home' }"> {{ $t('Nav["home"]') }} </RouterLink>
          </li>

          <li
            v-motion-pop
            :delay="100"
            class="py-2 border-b-2 border-bluee-sec w-full text-center bg-[#302b2b94]"
          >
            <RouterLink :to="{ name: 'about' }"> {{ $t('Nav["about"]') }} </RouterLink>
          </li>

          <li
            v-motion-pop
            :delay="200"
            class="py-2 border-b-2 border-bluee-sec w-full text-center bg-[#302b2b94]"
          >
            <RouterLink :to="{ name: 'ProgramsPage' }"> {{ $t('Nav["Programs"]') }}</RouterLink>
          </li>
          <!-- <li
            v-motion-pop
            :delay="300"
            class="py-2 border-b-2 border-bluee-sec w-full text-center bg-[#302b2b94]"
          >
            <RouterLink :to="{ name: 'GoldenHistory' }">
              {{ $t('Nav["GoldenHistory"]') }}
            </RouterLink>
          </li> -->
          <li
            v-motion-pop
            :delay="400"
            class="py-2 border-b-2 border-bluee-sec w-full text-center bg-[#302b2b94]"
          >
            <RouterLink :to="{ name: 'PhotoGallery' }"> {{ $t('Nav["PhotoGallery"]') }}</RouterLink>
          </li>
          <li
            v-motion-pop
            :delay="500"
            class="py-2 border-b-2 border-bluee-sec w-full text-center bg-[#302b2b94]"
          >
            <RouterLink :to="{ name: 'Advertisements' }">
              {{ $t('Nav["Advertisements"]') }}</RouterLink
            >
          </li>

          <li
            @click="handleNavigation"
            v-motion-pop
            :delay="600"
            class="py-2 border-b-2 border-bluee-sec w-full text-center bg-[#302b2b94]"
          >
            <a href="/#contact"> {{ $t('Nav["contact"]') }}</a>
          </li>
          <div class="bg-[#302b2b94] w-full rounded-b-lg" v-motion-pop :delay="700">
            <div class="flex p-4 justify-center gap-3">
              <select
                class="w-20 text-slate-300 bg-transparent border border-gray-300 rounded"
                v-model="$i18n.locale"
              >
                <option
                  class="uppercase"
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
        </ul>
      </section>
    </nav>
  </header>
</template>
