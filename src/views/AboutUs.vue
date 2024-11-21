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

const objectives = [
  'إعداد و تدريب الشباب',
  'تشكيل أوقات الشباب ببرامج تربوية وثقافية وترفيهية وما يعود عليهم بالفوائد النفسية والوطنية والفكرية والاجتماعية والبدنية والصحية',
  'نشر الرياضة البحرية وتحفيز كافة شرائح المجتمع على ممارسة الرياضات البحرية',
  'اكتشاف و تنمية المواهب الرياضية، وتكوين وإعداد الفرق الرياضية للألعاب الجماعية والفردية والمشاركة في المسابقات',
]
</script>

<template>
  <div class="min-h-screen bg-[#8897B9] lg:bg-white">
    <!-- Hero Section with Fixed Background -->
    <div class="hero-section lg:bg-about bg-aboutSmall relative mb-8">
      <div class="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/20 to-[#3B82F6]/40"></div>
      <div class="hidden lg:block">
        <Navbar />
      </div>
      <div class="relative"><SmallNavbar color="bg-blue-500" /></div>
      <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="text-white text-center">
          <h1 class="text-5xl font-bold mb-6">رحلة الريادة</h1>
          <p class="text-xl leading-relaxed">
            منذ عام 2015، نحن نقود مسيرة الرياضات البحرية في ليبيا
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8 bg-[#8897B9] lg:bg-white">
      <!-- History Section -->
      <div class="bg-slate-200 rounded-lg shadow-lg p-8 mb-8">
        <div class="flex w-full justify-around items-center mb-7">
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet6.png" alt="" />
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet1.png" alt="" />
          <h2 class="text-2xl font-bold text-blue-900 text-right">قصتنا</h2>
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet2.png" alt="" />
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet3.png" alt="" />
        </div>
        <div class="text-center flex flex-col items-center">
          <p class="text-gray-700 w-3/4 text-center px-10">
            في أواخر عام 2015 راودت السيد محمود عبدالرزاق بن لطيف فكرة تأسيس نادي يمارس رياضة
            الشراع. وعلى فور تم دعوة مجموعة من المدربين واولياء امور رياضيين وخبراء في الرياضات
            والالعاب البحرية.
          </p>
          <p class="text-gray-700 w-3/4 text-center px-10">
            بعد الاتصال على الفرق في مايو 2016 و انطلقت اللجنة التأسيسية برئاسة السيد هاشم عبدالرزاق
            الزرقاني، حيث تم الاجتماع عليه لقيادة حشد إدارة النادي للعمل على تنفيذ الأهداف النادي.
          </p>
        </div>
      </div>
      <div dir="rtl" class="bg-slate-200 rounded-lg shadow-lg p-8">
        <div class="flex w-full justify-around items-center mb-7">
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet6.png" alt="" />
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet1.png" alt="" />
          <h2 class="text-2xl font-bold text-blue-900 mx-3">أهدافنا</h2>

          <img class="lg:w-14 w-8" src="../assets/flags/alphabet2.png" alt="" />
          <img class="lg:w-14 w-8" src="../assets/flags/alphabet3.png" alt="" />
        </div>
        <ul class="space-y-4">
          <li v-for="objective in objectives" :key="objective" class="flex space-x-3 text-right">
            <span class="text-blue-600">⚓</span>
            <span class="text-gray-700">{{ objective }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Programs Section -->
    <div class="grid md:grid-cols-2 gap-8 mb-8 lg:px-10 px-3">
      <div
        v-for="(program, index) in programs"
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
