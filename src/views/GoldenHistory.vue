<template>
  <div class="hidden lg:block bg-blue-500">
    <Navbar />
  </div>
  <div class="relative bg-blue-500"><SmallNavbar /></div>
  <header class="bg-white text-blue-600 text-center pt-10 pb-20">
    <h1 class="text-3xl font-bold text-blue-600 flex justify-center items-center">
      <span><img src="../assets/imeges/winner.png" width="60px" alt="" class="m-2" /></span>
      التاريخ الذهبي - نادي الليبي لليخوت
    </h1>
    <p class="mt-2 text-lg text-blue-500">استكشف إنجازاتنا على مر السنين</p>
  </header>
  <div class="container mx-auto mt-10 px-4">
    <div class="relative">
      <!-- الخط الرئيسي المتعرج -->
      <div
        class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#3B82F6] timeline-line"
      ></div>

      <!-- الأحداث -->
      <EventCard
        v-for="(event, index) in events"
        :key="event.year"
        :event="event"
        :reversed="index % 2 !== 0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Evnt } from '@/components/EventCard'
import EventCard from '@/components/EventCard.vue'

import Navbar from '@/components/NavBar.vue'

import SmallNavbar from '@/components/SmallNavbar.vue'

const events: Evnt[] = [
  {
    year: 2017,
    title: ' البطوله الاولى للنادي الليبي لليخوت',
    description:
      'الترتيب الأول و الثاني  فئه كبار في صنف الأبتومست  بالبطولة الأولى للنادي الليبي لليخوت',
    images: ['src/assets/imeges/image1.png', 'src/assets/imeges/image2.png'],
  },
  {
    year: 2017,
    title: ' البطوله الاولى للنادي الليبي لليخوت',
    description:
      'الترتيب الثاني و الثالث فئه الصغار في صنف الأوبتيمست بالبطوله الأولى للنادي الليبي لليخوت',
    images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  },
  {
    year: 2023,
    title: 'آخر إنجاز',
    description:
      'في عام 2023، حقق النادي إنجازاً آخر في بطولة دولية، مما يُعد تتويجاً لجهود السنوات العديدة في تطوير مهارات اللاعبين.',
    images: ['src/assets/imeges/image5.png'],
  },
  {
    year: 1990,
    title: 'إنشاء النادي',
    description:
      'تم إنشاء النادي في عام 1990 بهدف نشر رياضة الأشرعة البحرية في المنطقة وتحقيق النجاح على الصعيد المحلي والعالمي.',
    images: ['src/assets/imeges/image1.png', 'src/assets/imeges/image2.png'],
  },
  {
    year: 2005,
    title: 'أول بطولة عالمية',
    description:
      'حقق النادي أول فوز له في بطولة عالمية عام 2005، مما أسهم في رفع اسم النادي دولياً وجعل اللاعبين يحظون بتقدير عالمي.',
    images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  },
]
</script>

<style scoped>
.timeline-line {
  width: 2px;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    #3b82f6 0%,
    #3b82f6 50%,
    transparent 50%,
    transparent 100%
  );
  background-size: 20px 20px;
}

body {
  overflow-x: hidden;
}

.bgGR {
  background-color: #3b82f6;
  background-image: linear-gradient(
    180deg,
    #3b82f6 80%,

    #ffffff 99%
  );
}
</style>
