<template>
  <div class="mb-8 sm:mb-16">
    <!-- Header Section -->
    <div class="mb-4 sm:mb-6 px-4 sm:px-0" v-if="courseInfo">
      <h2
        class="text-xl sm:text-2xl font-semibold text-slate-800 mb-2 sm:mb-3 border-b border-blue-200 pb-2"
      >
        {{ title }}
      </h2>
      <p v-if="courseInfo" class="text-sm sm:text-base text-slate-600 mb-4 italic">
        {{ courseInfo }}
      </p>
    </div>

    <!-- Photos Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
      <div
        v-for="photo in visiblePhotos"
        :key="photo.id"
        class="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] bg-slate-100 cursor-pointer"
        @click="!imageError.has(photo.id) && selectPhoto(photo)"
      >
        <!-- Loader -->
        <div
          v-if="!loadedImages.has(photo.id) && !imageError.has(photo.id)"
          class="absolute inset-0 flex items-center justify-center"
        >
          <div
            class="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
          ></div>
        </div>

        <!-- Error State -->
        <div
          v-if="imageError.has(photo.id)"
          class="absolute inset-0 flex flex-col items-center justify-center p-4 text-slate-400"
        >
          <svg-icon type="mdi" :path="mdiFileImageRemove"></svg-icon>
          <p class="text-sm text-center">خطاء في تحميل الصورة</p>
        </div>

        <!-- Image -->
        <img
          v-else
          :src="photo.url"
          :alt="photo.title"
          loading="lazy"
          @load="handleImageLoad(photo.id)"
          @error="handleImageError(photo.id)"
          :class="[
            'object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300',
            loadedImages.has(photo.id) ? 'opacity-100' : 'opacity-0',
          ]"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="absolute bottom-0 p-3 sm:p-4 w-full">
            <h3 class="text-base sm:text-lg font-semibold text-white">{{ photo.title }}</h3>
            <p class="text-xs sm:text-sm text-gray-200 line-clamp-2">{{ photo.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Expand/Collapse Button -->
    <div v-if="photos.length > 3" class="flex justify-center mt-4 sm:mt-6 px-4 sm:px-0">
      <button
        @click="isExpanded = !isExpanded"
        color="blue"
        class="flex items-center gap-2 px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base"
      >
        <svg-icon type="mdi" :path="isExpanded ? mdiChevronUp : mdiChevronDown"></svg-icon>
        <span>{{ isExpanded ? 'Show Less' : 'Show More' }}</span>
      </button>
    </div>
  </div>

  <!-- Modal -->
  <Modal :photo="selectedPhoto" @close="selectedPhoto = null" />
</template>
<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import type { Photo } from '../types'
import Modal from '@/components/Modal.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiChevronDown, mdiChevronUp, mdiFileImageRemove } from '@mdi/js'
// Props
const props = defineProps<{
  title: string
  courseInfo: string
  photos: Photo[]
}>()

// Reactive State
const selectedPhoto = ref<Photo | null>(null)
const loadedImages = ref<Set<string>>(new Set())
const isExpanded = ref(false)
const imageError = ref<Set<string>>(new Set())

// Computed Property for Visible Photos
const visiblePhotos = computed(() => (isExpanded.value ? props.photos : props.photos.slice(0, 3)))

// Handlers
const handleImageLoad = (id: string) => {
  loadedImages.value.add(id)
}

const handleImageError = (id: string) => {
  imageError.value.add(id)
  loadedImages.value.delete(id)
}

const selectPhoto = (photo: Photo) => {
  selectedPhoto.value = photo
}
</script>
