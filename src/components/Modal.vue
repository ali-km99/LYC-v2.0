<script setup lang="ts">
defineProps<{
  isOpen: boolean
  title: string
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click="$emit('close')"
    >
      <div class="bg-white p-8 rounded-xl w-[70%] max-h-[90vh] overflow-y-auto rtl" @click.stop>
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-primary">{{ title }}</h2>
          <button
            class="text-3xl text-gray-500 hover:text-primary transition-colors"
            @click="$emit('close')"
          >
            ×
          </button>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
