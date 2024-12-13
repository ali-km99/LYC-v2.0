<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'

const programs = [
  {
    title: 'تدريب السباحة',
    count: '+ 90 متدرب',
    description: 'برامج تدريبية متخصصة في السباحة',
  },
  {
    title: 'تدريب قوارب  الشراع',
    count: '+ 60 متدرب',
    description: 'برامج متقدمة في رياضة الشراع',
  },
  {
    title: 'تدريب الألواح الشراعية',
    count: '+ 12 متدرب',
    description: 'برامج تدريبي في رياضة الألواح الشراعية',
  },
  {
    title: 'تدريب التجديف  ',
    count: '+ 120 متدرب',
    description: 'برامج متقدمة في رياضة قوارب التجديف',
  },
]
const ENprograms = [
  {
    title: 'Swimming Training',
    count: '+90 Trainees',
    description: 'Specialized training programs in swimming',
  },
  {
    title: 'Sailing Boat Training',
    count: '+60 Trainees',
    description: 'Advanced programs in sailing sports',
  },
  {
    title: 'Windsurfing Training',
    count: '+12 Trainees',
    description: 'Training programs in windsurfing sports',
  },
  {
    title: 'Rowing Training',
    count: '+120 Trainees',
    description: 'Advanced programs in rowing sports',
  },
]

const objectives = [
  'إعداد و تدريب الشباب',
  'تشكيل أوقات الشباب ببرامج تربوية وثقافية وترفيهية وما يعود عليهم بالفوائد النفسية والوطنية والفكرية والاجتماعية والبدنية والصحية',
  'نشر الرياضة البحرية وتحفيز كافة شرائح المجتمع على ممارسة الرياضات البحرية',
  'اكتشاف و تنمية المواهب الرياضية، وتكوين وإعداد الفرق الرياضية للألعاب الجماعية والفردية والمشاركة في المسابقات',
]
const ENobjectives = [
  'Training and preparing youth',
  'Engaging youth in educational, cultural, and recreational programs that provide psychological, national, intellectual, social, physical, and health benefits',
  'Promoting marine sports and encouraging all segments of society to practice them',
  'Discovering and developing athletic talents, forming and preparing teams for individual and group sports, and participating in competitions',
]
</script>

<template>
  <div class="min-h-screen bg-[#8897B9] lg:bg-white">
    <!-- Hero Section with Fixed Background -->
    <div class="hero-section lg:bg-about bg-aboutSmall w-full relative mb-8">
      <div class="absolute inset-0"></div>
      <div class="hidden lg:block">
        <Navbar />
      </div>
      <div class="relative"><SmallNavbar color="bg-blue-500" /></div>
      <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="text-white text-center">
          <h1 class="text-5xl font-bold mb-6">{{ $t('aboutUs.title') }}</h1>
          <p class="text-xl leading-relaxed">
            {{ $t('aboutUs.description') }}
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8 bg-[#8897B9] lg:bg-white">
      <!-- History Section -->
      <div class="bg-slate-100 rounded-lg shadow-lg p-8 mb-8">
        <div class="flex w-full justify-around items-center mb-7">
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet6.png" alt="" />
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet1.png" alt="" />
          <h2 class="text-2xl font-bold text-blue-900 text-right">
            {{ $t('aboutUs.historySection') }}
          </h2>
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet2.png" alt="" />
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet3.png" alt="" />
        </div>
        <div class="text-center flex flex-col items-center">
          <p class="text-gray-700 lg:w-3/4 w-full mb-3 text-center px-2 lg:px-10">
            {{ $t('aboutUs.content[0]') }}
          </p>
          <p class="text-gray-700 lg:w-3/4 w-full mb-3 text-center px-2 lg:px-10">
            {{ $t('aboutUs.content[1]') }}
          </p>
          <div class="rounded-lg">
            <img
              width="900px"
              src="../assets/imeges/aboutUs.jpg"
              class="rounded-lg"
              alt="صورة اعضاء تأسيس النادي"
            />
          </div>

          <p class="text-gray-700 lg:w-3/4 w-full mb-3 text-center px-2 lg:px-10">
            {{ $t('aboutUs.content[2]') }}
          </p>
          <div class="grid grid-cols-3 gap-4 w-full px-20">
            <!-- <img
              width="1200px"
              src="../assets/imeges/aboutUs.jpg"
              class="rounded-lg"
              alt="صورة اعضاء تأسيس النادي"
            /> -->

            <div class="bg-sky-400 rounded-full shadow-lg h-72 w-72 overflow-hidden">
              <img src="../assets/imeges/image7.jpg" class="h-full" alt="" />
            </div>
            <div class="bg-sky-400 rounded-full shadow-lg h-72 w-72 overflow-hidden">
              <img src="../assets/imeges/golden2017kids5.jpg" class="h-full" alt="" />
            </div>
            <div class="bg-sky-400 rounded-full shadow-lg h-72 w-72 overflow-hidden">
              <img src="../assets/imeges/golden2017kids2.jpg" class="h-full" alt="" />
            </div>
          </div>
          <p class="text-gray-700 lg:w-3/4 w-full mb-3 text-center px-2 lg:px-10">
            {{ $t('aboutUs.content[3]') }}
          </p>
          <p class="text-gray-700 lg:w-3/4 w-full mb-3 text-center px-2 lg:px-10">
            {{ $t('aboutUs.content[4]') }}
          </p>
        </div>
      </div>
      <div class="bg-slate-100 rounded-lg shadow-md p-6 lg:p-10 mb-8">
        <!-- Header Section -->

        <div class="flex w-full justify-around items-center mb-7">
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet6.png" alt="" />
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet1.png" alt="" />
          <h2 class="text-2xl font-bold text-blue-900 text-right">
            {{ $t('aboutUs.nameMeaning.title') }}
          </h2>
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet2.png" alt="" />
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet3.png" alt="" />
        </div>
        <!-- Content Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- Text Section -->
          <div>
            <p
              class="text-gray-700 text-sm lg:text-base leading-relaxed mb-4 lg:mb-6 px-4 lg:px-10 text-right"
            >
              {{ $t('aboutUs.nameMeaning.content[0]') }}
            </p>
            <p class="text-gray-700 text-sm lg:text-base leading-relaxed px-4 lg:px-10 text-right">
              {{ $t('aboutUs.nameMeaning.content[1]') }}
            </p>
          </div>

          <!-- Image Section -->
          <div class="flex justify-center">
            <img
              class="rounded-lg shadow-md max-w-full lg:max-w-lg"
              src="../assets/imeges/IMG_6183.jpg"
              alt="صورة اعضاء تأسيس النادي"
            />
          </div>
        </div>
      </div>
      <div
        :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
        class="bg-slate-100 rounded-lg shadow-lg p-8"
      >
        <div class="flex w-full justify-around items-center mb-7">
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet6.png" alt="" />
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet1.png" alt="" />
          <h2 class="text-2xl font-bold text-blue-900 mx-3">{{ $t('aboutUs.goalsSection') }}</h2>

          <img class="lg:w-14 w-8" src="../assets/flags/alphabet2.png" alt="" />
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet3.png" alt="" />
        </div>
        <ul class="space-y-4">
          <li
            v-for="objective in $i18n.locale == 'ar' ? objectives : ENobjectives"
            :key="objective"
            class="flex space-x-3 text-right"
          >
            <span class="text-blue-600">⚓</span>
            <span class="text-gray-700">{{ objective }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Programs Section -->
    <div class="grid md:grid-cols-2 gap-8 pb-8 lg:px-10 px-3">
      <div
        v-for="(program, index) in $i18n.locale == 'ar' ? programs : ENprograms"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl flex justify-between transition-shadow"
      >
        <div>
          <h3 class="text-3xl font-bold text-blue-900 mb-3">
            {{ program.title }}
          </h3>
          <div class="text-2xl font-bold text-blue-600 mb-2">
            {{ program.count }}
          </div>
          <p class="text-gray-600">{{ program.description }}</p>
        </div>
        <img
          v-if="index === 0"
          src="../assets/GIF/swimming.gif"
          alt=""
          class="lg:w-48 lg:h-48 w-28 h-28"
        />
        <img
          v-if="index === 1"
          src="../assets/GIF/sail.gif"
          alt=""
          class="lg:w-48 lg:h-48 w-28 h-28"
        />
        <img
          v-if="index === 2"
          src="../assets/GIF/sailing.gif"
          alt=""
          class="lg:w-48 lg:h-48 w-28 h-28"
        />
        <img
          v-if="index === 3"
          src="../assets/GIF/paddle.gif"
          alt=""
          class="lg:w-48 lg:h-48 w-28 h-28"
        />
      </div>
    </div>

    <!-- Objectives Section -->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap');

div {
  font-family: 'Noto Sans Arabic', sans-serif;
}

/* .prose {
  max-width: none;
} */

.hero-section {
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 900px;
}

/* Ensure proper RTL layout for flex items */
.flex {
  gap: 0.75rem;
}

.flex span:first-child {
  margin-right: 0;
  margin-left: 0.75rem;
}
</style>
