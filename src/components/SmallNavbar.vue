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
</script>

<template>
  <header class="sm:hidden">
    <nav
      class="bg-bluee"
      :class="{
        'h-96 ': minu,
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
          <li v-motion-pop class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink :to="{ name: 'home' }"> الرئيسي </RouterLink>
          </li>
          <li v-motion-pop :delay="200" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink :to="{ name: 'PhotoGallery' }"> معرض الصور </RouterLink>
          </li>
          <li v-motion-pop :delay="300" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink :to="{ name: 'about' }"> عن النادي </RouterLink>
          </li>

          <li v-motion-pop :delay="400" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink :to="{ name: 'GoldenHistory' }"> السجل الذهبي </RouterLink>
          </li>
          <li v-motion-pop :delay="400" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            تواصل معنا
          </li>
          <div class="flex p-4 mr-4 gap-3">
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
        </ul>
      </section>
    </nav>
  </header>
</template>
