<script setup lang="ts">
import type { Program } from '@/types/program'
import Modal from './Modal.vue'

defineProps<{
  program: Program
  isOpen: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <Modal :is-open="isOpen" :title="program.title" @close="$emit('close')">
    <div class="text-right">
      <div class="p-10">
        <img :src="program.img" alt="" class="rounded-lg w-2/3 mx-auto hidden lg:block" />
      </div>
      <p class="text-lg leading-relaxed text-gray-700">
        {{ program.fullDescription }}
      </p>
      <p v-if="program.label1" class="text-lg font-bold leading-relaxed text-gray-700 m-4">
        {{ program.label1 }}
      </p>
      <p v-if="program.text1" class="leading-relaxed text-gray-700">
        {{ program.text1 }}
      </p>
      <p v-if="program.label2" class="text-lg font-bold leading-relaxed text-gray-700 m-4">
        {{ program.label2 }}
      </p>
      <p v-if="program.text2" class="leading-relaxed text-gray-700">
        {{ program.text2 }}
      </p>
      <p v-if="program.label3" class="text-lg font-bold leading-relaxed text-gray-700 m-4">
        {{ program.label3 }}
      </p>
      <p v-if="program.text3" class="leading-relaxed text-gray-700">
        {{ program.text3 }}
      </p>
      <p v-if="program.label4" class="text-lg font-bold leading-relaxed text-gray-700 m-4">
        {{ program.label4 }}
      </p>
      <p v-if="program.text4" class="leading-relaxed text-gray-700">
        {{ program.text4 }}
      </p>
      <p v-if="program.label5" class="text-lg font-bold leading-relaxed text-gray-700 m-4">
        {{ program.label5 }}
      </p>
      <p v-if="program.text5" class="leading-relaxed text-gray-700">
        {{ program.text5 }}
      </p>
      <p v-if="program.text6" class="text-lg leading-relaxed text-gray-700 my-2">
        {{ program.text6 }}
      </p>
    </div>
  </Modal>
</template>
