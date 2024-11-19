<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <header class="bg-slate-900 text-white py-4 sm:py-6 px-4 sticky top-0 z-40 shadow-lg">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div class="flex items-center space-x-3">
            <h1 class="text-xl sm:text-2xl font-bold">النادي الليبي لليخوت</h1>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-8 sm:py-12">
      <div class="space-y-2 mb-8 sm:mb-12 text-center px-4">
        <h1 class="text-3xl sm:text-4xl font-bold text-slate-900">معرض الصور</h1>

        <div class="my-6 px-4">
          <h1 class="text-right">Lorem, ipsum.</h1>
          <hr />
          <p class="text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia totam
            expedita.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            <div
              v-for="photo in photos"
              :key="photo.id"
              class="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] bg-slate-100 cursor-pointer"
              @click="!imageError.has(photo.id) && selectPhoto(photo)"
            >
              <!-- Spinner -->
              <div
                v-if="!loadedImages.has(photo.id) && !imageError.has(photo.id)"
                class="absolute inset-0 flex items-center justify-center"
              >
                <div
                  class="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
                />
              </div>

              <!-- Error Message -->
              <div
                v-if="imageError.has(photo.id)"
                class="absolute inset-0 flex flex-col items-center justify-center p-4 text-slate-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <p class="text-sm text-center">الصورة غير متوفرة</p>
              </div>

              <!-- Image -->
              <v-img
                v-else
                :src="photo.url"
                :alt="photo.title"
                loading="lazy"
                @load="handleImageLoad(photo.id)"
                @error="handleImageError(photo.id)"
                class="object-cover w-full h-full"
              />

              <!-- Hover Overlay -->
              <div
                class="absolute inset-0 bg-black/60 text-white flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div
                  class="p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <h3 class="text-lg font-semibold">{{ photo.title }}</h3>
                  <p class="text-sm mt-1">{{ photo.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const photos = ref([
  {
    id: 1,
    url: 'https://lyc.ly/assets/imeges/image9.jpg',
    title: 'عنوان الصورة 1',
    description: 'وصف مختصر لهذه الصورة 1.',
  },
  {
    id: 2,
    url: 'https://lyc.ly/photo/img1.jpg',
    title: 'عنوان الصورة 2',
    description: 'وصف مختصر لهذه الصورة 2.',
  },
  {
    id: 3,
    url: 'https://lyc.ly/assets/imeges/IMG_6183.jpg',
    title: 'عنوان الصورة 3',
    description: 'وصف مختصر لهذه الصورة 3.',
  },
])

// إدارة حالة تحميل الصور وأخطاء التحميل
const loadedImages = ref(new Set<number>())
const imageError = ref(new Set<number>())

const handleImageLoad = (id: number): void => {
  loadedImages.value.add(id)
}

const handleImageError = (id: number): void => {
  imageError.value.add(id)
}

const selectPhoto = (photo: {
  id: number
  url: string
  title: string
  description: string
}): void => {
  alert(`تم اختيار الصورة: ${photo.title}`)
}
</script>
