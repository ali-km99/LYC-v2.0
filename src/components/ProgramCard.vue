<script setup lang="ts">
import { ref } from 'vue'

import type { Program } from '@/types/program'
import ProgramDetails from './ProgramDetails.vue'

defineProps<{
  program: Program
}>()

const showDetails = ref(false)
</script>

<template>
  <div
    class="relative h-96 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 shadow-lg"
    :style="{
      backgroundImage: `url(${program.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70 p-8 flex flex-col justify-center"
    >
      <div class="text-center text-white">
        <div class="text-5xl mb-4 drop-shadow-lg">{{ program.icon }}</div>
        <h2 class="text-2xl font-bold mb-4 drop-shadow-lg">
          {{ program.title }}
        </h2>
        <p class="mb-6 leading-relaxed drop-shadow">
          {{ program.description }}
        </p>

        <v-btn :color="program.color" @click="showDetails = true">
          {{ $t("content['moreButton']") }}</v-btn
        >
      </div>
    </div>

    <ProgramDetails :program="program" :is-open="showDetails" @close="showDetails = false" />
  </div>
</template>
