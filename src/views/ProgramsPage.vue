<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import ProgramCard from '@/components/ProgramCard.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import { programs, programsEN } from '@/data/programs'
</script>

<template>
  <div class="hidden lg:block bg-blue-500">
    <NavBar />
  </div>
  <div class="relative bg-blue-500/90"><SmallNavbar color="bg-blue-500" /></div>
  <div class="container mx-auto p-8 rtl">
    <h1 class="text-4xl font-bold text-primary text-center mb-12">{{ $t('Nav.Programs') }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProgramCard
        v-for="program in $i18n.locale == 'ar' ? programs : programsEN"
        :key="program.id"
        :program="program"
      />
    </div>
  </div>
</template>
