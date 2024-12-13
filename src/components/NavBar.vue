<script setup lang="ts">
import { mdiWeb } from '@mdi/js'
</script>

<template>
  <div>
    <nav class="h-28 w-full bg-white/10 backdrop-blur-sm sticky top-0">
      <div class="flex items-center justify-between">
        <!-- الشعار -->
        <img src="../assets/imeges/emptylogo.png" width="90" alt="main-logo" class="m-2 ml-10" />

        <!-- القائمة -->
        <div>
          <ul class="flex flex-row gap-10 text-white">
            <RouterLink :to="{ name: 'home' }">
              <li
                class="hover:text-[#394A98] hover:scale-110 duration-150 transition hover:cursor-pointer"
              >
                {{ $t('Nav["home"]') }}
              </li>
            </RouterLink>
            <RouterLink :to="{ name: 'ProgramsPage' }">
              <li
                class="hover:text-[#394A98] hover:scale-110 duration-150 transition hover:cursor-pointer"
              >
                {{ $t('Nav["Programs"]') }}
              </li>
            </RouterLink>
            <RouterLink :to="{ name: 'Advertisements' }">
              <li
                class="hover:text-[#394A98] hover:scale-110 duration-150 transition hover:cursor-pointer"
              >
                {{ $t('Nav["Advertisements"]') }}
              </li>
            </RouterLink>
            <RouterLink :to="{ name: 'PhotoGallery' }">
              <li class="hover:text-[#394A98] hover:scale-110 duration-150 transition">
                {{ $t('Nav["PhotoGallery"]') }}
              </li>
            </RouterLink>
            <RouterLink :to="{ name: 'about' }">
              <li class="hover:text-[#394A98] hover:scale-110 duration-150 transition">
                {{ $t('Nav["about"]') }}
              </li>
            </RouterLink>
            <RouterLink :to="{ name: 'GoldenHistory' }">
              <li class="hover:text-[#394A98] hover:scale-110 duration-150 transition">
                {{ $t('Nav["GoldenHistory"]') }}
              </li>
            </RouterLink>
            <li class="hover:text-[#394A98] hover:scale-110 duration-150 transition">
              <a href="#contact"> {{ $t('Nav["contact"]') }} </a>
            </li>
          </ul>
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
