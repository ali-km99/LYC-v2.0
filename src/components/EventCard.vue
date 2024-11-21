<template>
  <div
    :class="`flex flex-col lg:flex-row ${props.reversed ? 'lg:flex-row-reverse' : ''} gap-6 items-center my-16`"
  >
    <!-- قسم النص -->
    <div
      v-motion-slide-visible-bottom
      :delay="200"
      :duration="1500"
      :class="` lg:w-1/2 flex flex-col   ${props.reversed ? 'items-end' : 'items-end'}`"
    >
      <p
        v-motion
        :initial="{ opacity: 0, x: props.reversed ? 200 : -200 }"
        :enter="{ opacity: 1, x: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="200"
        :duration="2000"
        class="text-white font-semibold bg-[#3B82F6] py-3 px-4 rounded-lg flex lg:justify-normal sm:justify-center mx-auto lg:mx-0 text-lg lg:text-base"
      >
        {{ event.year }}
      </p>

      <h2
        v-motion-pop-visible
        :variants="{ custom: { scale: 2 } }"
        :delay="100"
        :duration="1500"
        class="text-xl lg:text-2xl font-semibold text-[#3B82F6] mt-2 text-center lg:text-left"
      >
        {{ event.title }}
      </h2>
      <p class="text-gray-700 mt-2 text-center lg:text-left">
        {{ event.description }}
      </p>
    </div>

    <!-- قسم الصور -->
    <div
      class="flex gap-2 w-1/2 mt-4 lg:mt-0 lg:justify-normal justify-center"
      :initial="{ opacity: 0, y: props.reversed ? 100 : -100 }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :delay="200"
      :duration="1200"
      v-motion-slide-visible-once-right
    >
      <img
        v-for="(image, index) in event.images"
        :key="index"
        :src="image"
        :alt="`صورة لـ ${event.title}`"
        class="w-full h-48 lg:h-64 object-cover rounded-lg shadow-lg lg:mx-0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Evnt } from './EventCard'

const props = defineProps<{
  event: Evnt
  reversed: boolean
}>()
</script>

<style scoped></style>
