<template>
  <div class="min-h-screen bg-white">
    <div class="hidden lg:block bg-blue-500">
      <NavBar />
    </div>
    <div class="relative bg-blue-500/90"><SmallNavbar color="bg-blue-500" /></div>
    <header
      class="bg-blue-500/90 backdrop-blur-sm text-white py-4 sm:py-6 px-4 sticky top-0 z-40 shadow-lg"
    >
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div class="flex items-center space-x-3">
            <h1 class="text-xl sm:text-2xl font-bold">النادي الليبي لليخوت</h1>
          </div>
          <div class="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder=" ... بحث عن صورة"
              v-model="searchTerm"
              class="w-full sm:w-48 md:w-64 pl-10 pr-4 py-2 rounded-full bg-slate-800/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base transition-all duration-300 focus:sm:w-72"
            />
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-8 sm:py-12">
      <div class="space-y-2 mb-8 sm:mb-12 text-center px-4">
        <h1 class="text-3xl sm:text-4xl font-bold text-white">معرض الصور</h1>
        <p class="text-sm sm:text-base text-white">اكتشف اللحظات المميزة في النادي الليبي لليخوت</p>
      </div>

      <template v-if="filteredGroups.length">
        <div v-for="group in filteredGroups" :key="group.id">
          <PhotoGroup
            :key="group.id"
            :title="group.title"
            :course-info="group.courseInfo"
            :photos="group.photos"
          />
        </div>
      </template>
      <div v-else class="text-center py-8 sm:py-12 px-4">
        <p class="text-slate-600">لا توجد صورة بهذا الأسم .</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import PhotoGroup from '@/components/PhotoGroup.vue'

import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'

import { photoGroups } from '@/data/photos'
const searchTerm = ref<string>('')

const filteredGroups = computed(() => {
  const search = searchTerm.value.toLowerCase()
  return photoGroups
    .map((group) => ({
      ...group,
      photos: group.photos.filter(
        (photo) => photo.title.toLowerCase().includes(search),
        // || photo.description.toLowerCase().includes(search),
      ),
    }))
    .filter((group) => group.photos.length > 0)
})
</script>
