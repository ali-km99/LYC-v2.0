<template>
  <Transition>
    <div
      v-if="photo"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
      @click="$emit('close')"
    >
      <div
        class="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden max-h-[90vh] flex flex-col"
        @click.stop
      >
        <button
          @click="emit('close')"
          class="absolute top-2 right-2 z-10 p-1.5 sm:p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          aria-label="Close modal"
        >
          <v-icon :icon="mdiWindowClose"></v-icon>
        </button>

        <div class="relative flex-1 min-h-0">
          <img
            :src="photo.url"
            :alt="photo.title"
            class="w-full h-full object-contain"
            @error="handleImageError"
          />
        </div>

        <div class="p-4 sm:p-6 bg-white">
          <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{{ photo.title }}</h3>
          <!-- <p class="text-sm sm:text-base text-slate-600">{{ photo.description }}</p> -->
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onUnmounted, watch } from 'vue'

import type { Photo } from '../types'
import { mdiWindowClose } from '@mdi/js'

const props = defineProps<{
  photo: Photo | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.style.display = 'none'
  const container = target.parentElement
  if (container) {
    const fallback = document.createElement('div')
    fallback.className =
      'w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-100'
    fallback.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
      <p class="mt-2 text-sm">Image unavailable</p>
    `
    container.appendChild(fallback)
  }
}

watch(
  () => props.photo,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  },
)

onUnmounted(() => {
  document.body.style.overflow = 'unset'
})
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
