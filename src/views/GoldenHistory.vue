<template>
  <div class="hidden lg:block bg-blue-500">
    <Navbar />
  </div>
  <div class="relative bg-blue-500"><SmallNavbar /></div>
  <header class="bg-blue-500/10 text-blue-600 text-center pt-10 pb-20 px-5 shadow-lg">
    <h1 class="text-3xl font-semibold text-blue-600 flex justify-center items-center">
      التاريخ الذهبي - نادي الليبي لليخوت
    </h1>
    <p class="mt-6 text-lg text-blue-800">
      شـارك النـادي فـي العديـد مـن بطـوالت داخـل وخـارج الوطـن ومجموعـة مـن المعـارض والمهرجانـات
      واألنشـطة لنشـر الثقافـة البحريـة والرياضـة داخـل المجتمـع .
    </p>
  </header>
  <div class="container mx-auto mt-10 px-4">
    <div class="relative">
      <!-- الخط الرئيسي المتعرج -->
      <div
        class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#3B82F6] timeline-line hidden lg:block"
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
    year: '2017 أغسطص',
    title: ' البطوله الاولى للنادي الليبي لليخوت',
    description:
      'الترتيب الأول و الثاني  فئه كبار في صنف الأبتومست  بالبطولة الأولى للنادي الليبي لليخوت',
    images: ['src/assets/imeges/golden2017kids2.JPG', 'src/assets/imeges/golden2017kids.jpg'],
  },
  {
    year: '2017 أغسطص',
    title: ' البطوله الاولى للنادي الليبي لليخوت',
    description:
      'الترتيب الثاني و الثالث فئه الصغار في صنف الأوبتيمست بالبطوله الأولى للنادي الليبي لليخوت',
    images: ['src/assets/imeges/golden2017kids3.jpg', 'src/assets/imeges/golden2017kids4.jpg'],
  },
  {
    year: '2017 ديسمبر',
    title: 'بطولة زليتن للقوارب الشراعية  ',
    description: 'الترتيب الأول و الثاني في صنف الأوبتيموس ببطولة زليتن للقوارب الشراعية ',
    images: ['src/assets/imeges/golden2017kids6.jpg', 'src/assets/imeges/golden2017kids7.jpg'],
  },
  {
    year: '2018 أغسطص',
    title: ' البطوله الثانيه للنادي الليبي لليخوت',
    description:
      'الترتيب الأول و الثاني و ثالث فئه كبار في صنف الأبتومست  بالبطولة الثانيه للنادي الليبي لليخوت',
    images: ['src/assets/imeges/golden2017kids2.JPG', 'src/assets/imeges/golden2017kids.jpg'],
  },
  {
    year: '2018 أغسطص',
    title: ' البطوله الثانيه للنادي الليبي لليخوت',
    description:
      'الترتيب الأول و الثاني و الثالث فئه الصغار في صنف الأوبتيمست بالبطوله الثانيه للنادي الليبي لليخوت',
    images: ['src/assets/imeges/golden2017kids3.jpg', 'src/assets/imeges/golden2017kids4.jpg'],
  },
  {
    year: '2018 أغسطص',
    title: ' البطوله الثانيه للنادي الليبي لليخوت',
    description: `الترتيــب األول و الثانــي و الثالــث فــي صنــف الهوبــي كات 16 بالبطولــة الثانيــة للنــادي
الليبــي لليخــوت 2018 .
`,
    images: ['src/assets/imeges/image8.jpg', 'src/assets/imeges/image7.jpg'],
  },

  // {
  //   year: ' 2018 مارس',
  //   title: '   تركيا - بطولة بدروم الدولية ',
  //   description: ' بطولة بدروم الدولية في نسختها السادسة بمدينة بدروم ',
  //   images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  // },
  {
    year: '2019 أغسطص',
    title: ' البطوله الثالثه للنادي الليبي لليخوت',
    description: 'الترتيب الأول و الثاني و الثالث فئه كبار بالبطوله الثانيه للنادي الليبي لليخوت',
    images: ['src/assets/imeges/golden2017kids3.jpg', 'src/assets/imeges/golden2017kids4.jpg'],
  },
  {
    year: '2019 أغسطص',
    title: ' البطوله الثالثه للنادي الليبي لليخوت',
    description:
      'الترتيب الأول  و الثالث فئه الصغار في صنف الأوبتيمست بالبطوله الثانيه للنادي الليبي لليخوت',
    images: ['src/assets/imeges/golden2017kids3.jpg', 'src/assets/imeges/golden2017kids4.jpg'],
  },
  // {
  //   year: ' مارس 2019',
  //   title: ' تركيا -بطولة بدروم الدولية',
  //   description: 'بطولة بدروم الدولية في نسختها السابعة بمدينة بدروم ',
  //   images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  // },
  // {
  //   year: ' 2019 ابريل',
  //   title: 'معرض طرابلس الدولي',
  //   description: ' معرض طرابلس الدولي بجناح من ضمن أجنحة وزارة السياحة',
  //   images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  // },
  // {
  //   year: ' 2019 ابريل',
  //   title: ' بطوله تونس',
  //   description: ' بطولة تونس بجزيرة جربة',
  //   images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  // },
  // {
  //   year: '  أغسطص .2019 ',
  //   title: 'بطوله تونس',
  //   description: ' بطولة تونس بمدينة تونس',
  //   images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  // },
  {
    year: ' نوفمبر 2019 ',
    title: ' الحممامت- بطولة كأس تونس',
    description:
      ' الترتيــب الرابــع و الخامــس و الســادس فــي صنــف الليــزر راديــال ببطولــة كأس تونــس',
    images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  },
  {
    year: ' نوفمبر 2019 ',
    title: 'الحممات- بطولة كأس تونس',
    description: ' الترتيب الثامن في صنف الليزر 4.7 ببطولة كأس تونس',
    images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  },
  {
    year: ' نوفمبر 2019 ',
    title: 'الحممات- بطولة كأس تونس',
    description: ' التراتيـب 12 و 15 و 17 فـي صنـف األوبتمسـت ببطولـة أكس تونـس',
    images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  },
  {
    year: ' نوفمبر 2019 ',
    title: '   زوارة-بطولة ليبيا للألواح الشراعية ',
    description: ' الترتيب الثاني في بطولة ليبيا لأللواح الشراعية  ',
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
