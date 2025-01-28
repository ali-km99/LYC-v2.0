<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import router from '@/router'

// استلام الحدث
const handleScrollEvent = async () => {
  await router.replace('/') // الانتقال إلى الصفحة الرئيسية
}
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
  {
    title: 'تدريب وتطوير الشباب',
    content:
      'إشراك الشباب في برامج تعليمية وثقافية وترفيهية توفر فوائد نفسية وروحية وفكرية واجتماعية وبدنية وصحية.',
  },
  {
    title: 'تشجيع الرياضات البحرية',
    content: 'تشجيع جميع فئات المجتمع، بمختلف الأعمار، على ممارسة الرياضات البحرية.',
  },
  {
    title: 'اكتشاف وتطوير المواهب',
    content:
      'التعرف على المواهب الرياضية ورعايتها، وتكوين وإعداد فرق لكل من الرياضات الفردية والجماعية، والمشاركة في المسابقات التي تنظمها الاتحادات الرياضية.',
  },
  {
    title: 'العمل الجماعي المنظم وبرامج التطوع',
    content: 'تنفيذ برامج العمل الجماعي المنظم وحملات التطوع التي تهدف إلى خدمة المجتمع.',
  },
  {
    title: 'شعل أوقات الشباب ببرامج تربويه و ثقافية',
    content:
      'شغل اوقات الشباب بمايعود عليهم بالفوائد النفسيه والروحية و الفكرية والإجتماعية و البدنية والصحية ',
  },
]
const ENobjectives = [
  {
    title: 'Youth Training and Development',
    content:
      'Engaging youth in educational, cultural, and recreational programs that provide psychological, spiritual, intellectual, social, physical, and health benefits.',
  },
  {
    title: 'Promoting Marine Sports',
    content:
      'Encouraging all segments of society, across different age groups, to practice marine sports.',
  },
  {
    title: 'Talent Discovery and Development',
    content:
      'Identifying and nurturing sports talents, forming and preparing teams for both individual and team sports, and participating in competitions organized by sports federations.',
  },
  {
    title: 'Organized Group Work and Volunteer Programs',
    content:
      'Implementing organized group work programs and volunteer campaigns aimed at serving the community.',
  },
  {
    title: 'Engage Youth Time with Educational and Cultural Programs',
    content:
      'Engage youth in activities that provide psychological, spiritual, intellectual, social, physical, and health benefits.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#0B6D90] lg:bg-white">
    <!-- Hero Section with Fixed Background -->
    <div class="hero-section lg:bg-about bg-aboutSmall w-full relative mb-8">
      <div class="absolute inset-0"></div>
      <div class="hidden lg:block">
        <Navbar />
      </div>
      <div class="relative">
        <SmallNavbar color="bg-blue-500" @scrollToSection="handleScrollEvent" />
      </div>
      <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="text-white text-center">
          <h1 class="text-5xl font-bold mb-6">{{ $t('aboutUs.title') }}</h1>
          <p class="text-xl leading-relaxed">
            {{ $t('aboutUs.description') }}
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8 bg-[#0B6D90] lg:bg-white">
      <!-- History Section -->
      <div class="bg-slate-100 rounded-lg shadow-lg p-8 mb-8">
        <div class="flex flex-col items-center w-full mb-7">
          <!-- الصور: تظهر في شاشات الموبايل فوق العنوان فقط -->
          <div class="flex flex-wrap justify-center md:hidden w-full mb-4">
            <img class="lg:w-14 w-8 mb-2" src="../assets/flags/L.png" alt="" />
            <img class="lg:w-14 w-8 mb-2" src="../assets/flags/Y.png" alt="" />
            <img class="lg:w-14 w-8 mb-2" src="../assets/flags/C.png" alt="" />
          </div>

          <!-- العنوان: يظهر دائمًا في المنتصف -->
          <h2 class="lg:hidden text-2xl font-bold text-blue-900 mx-3 text-center w-full my-3">
            {{ $t('aboutUs.historySection') }}
          </h2>

          <!-- الصور: تظهر بجانب العنوان في الشاشات الكبيرة فقط -->
          <div class="hidden md:flex justify-between items-center w-full">
            <!-- الصور على اليمين -->
            <div class="flex items-center">
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/L.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/Y.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/C.png" alt="" />
            </div>
            <h2 class="text-2xl font-bold text-blue-900 mx-3 text-center w-full my-3">
              {{ $t('aboutUs.historySection') }}
            </h2>
            <!-- الصور على اليسار -->
            <div class="flex items-center">
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/L.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/Y.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/C.png" alt="" />
            </div>
          </div>
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

          <p class="text-gray-700 lg:w-3/4 w-full my-6 text-center px-2 lg:px-10">
            {{ $t('aboutUs.content[2]') }}
          </p>
          <div class="grid grid-cols-3 gap-4 w-full lg:px-20 my-6">
            <div
              class="bg-sky-400 rounded-full shadow-lg lg:h-72 lg:w-72 w-28 h-28 overflow-hidden"
            >
              <img src="../assets/imeges/image10.jpg" class="h-full" alt="" />
            </div>
            <div
              class="bg-sky-400 rounded-full shadow-lg lg:h-72 lg:w-72 w-28 h-28 overflow-hidden"
            >
              <img src="../assets/imeges/a54.jpg" class="h-full" alt="" />
            </div>
            <div
              class="bg-sky-400 rounded-full shadow-lg lg:h-72 lg:w-72 w-28 h-28 overflow-hidden"
            >
              <img src="../assets/imeges/a52.jpg" class="h-full" alt="" />
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

        <div class="flex flex-col items-center w-full mb-7">
          <!-- الصور: تظهر في شاشات الموبايل فوق العنوان فقط -->
          <div class="flex flex-wrap justify-center md:hidden w-full mb-4">
            <img class="lg:w-14 w-8 mb-2" src="../assets/flags/L.png" alt="" />
            <img class="lg:w-14 w-8 mb-2" src="../assets/flags/Y.png" alt="" />
            <img class="lg:w-14 w-8 mb-2" src="../assets/flags/C.png" alt="" />
          </div>

          <!-- العنوان: يظهر دائمًا في المنتصف -->
          <h2 class="lg:hidden text-2xl font-bold text-blue-900 mx-3 text-center w-full my-3">
            {{ $t('aboutUs.nameMeaning.title') }}
          </h2>

          <!-- الصور: تظهر بجانب العنوان في الشاشات الكبيرة فقط -->
          <div class="hidden md:flex justify-between items-center w-full">
            <!-- الصور على اليمين -->
            <div class="flex items-center">
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/L.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/Y.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/C.png" alt="" />
            </div>
            <h2 class="text-2xl font-bold text-blue-900 mx-3 text-center w-full my-3">
              {{ $t('aboutUs.nameMeaning.title') }}
            </h2>
            <!-- الصور على اليسار -->
            <div class="flex items-center">
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/L.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/Y.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/C.png" alt="" />
            </div>
          </div>
        </div>
        <!-- Content Section -->
        <div
          :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
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
        <div class="flex flex-col items-center w-full mb-7">
          <!-- الصور: تظهر في شاشات الموبايل فوق العنوان فقط -->
          <div class="flex flex-wrap justify-center md:hidden w-full mb-4">
            <img class="lg:w-14 w-8 mb-2" src="../assets/flags/L.png" alt="" />
            <img class="lg:w-14 w-8 mb-2" src="../assets/flags/Y.png" alt="" />
            <img class="lg:w-14 w-8 mb-2" src="../assets/flags/C.png" alt="" />
          </div>

          <!-- العنوان: يظهر دائمًا في المنتصف -->
          <h2 class="lg:hidden text-2xl font-bold text-blue-900 mx-3 text-center w-full my-3">
            {{ $t('aboutUs.goalsSection') }}
          </h2>

          <!-- الصور: تظهر بجانب العنوان في الشاشات الكبيرة فقط -->
          <div class="hidden md:flex justify-between items-center w-full">
            <!-- الصور على اليمين -->
            <div class="flex items-center">
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/L.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/Y.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/C.png" alt="" />
            </div>
            <h2 class="text-2xl font-bold text-blue-900 mx-3 text-center w-full my-3">
              {{ $t('aboutUs.goalsSection') }}
            </h2>
            <!-- الصور على اليسار -->
            <div class="flex items-center">
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/L.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/Y.png" alt="" />
              <img class="lg:w-14 w-8 mb-2" src="../assets/flags/C.png" alt="" />
            </div>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-2">
          <div
            v-for="objective in $i18n.locale == 'ar' ? objectives : ENobjectives"
            :key="objective.content"
          >
            <div class="my-2">
              <span class="text-blue-600"></span>
              <p class="text-blue-600 text-xl font-semibold">{{ ' ⚓ ' + objective.title }}</p>

              <p class="text-gray-700 w-2/3 m-6">{{ objective.content }}</p>
            </div>
          </div>
        </div>
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
  background-position: center;
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
