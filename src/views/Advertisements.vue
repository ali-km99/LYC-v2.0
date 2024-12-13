<template>
  <div class="hidden lg:block bg-blue-500">
    <NavBar />
  </div>
  <div class="relative bg-blue-500"><SmallNavbar /></div>
  <div class="bg-gray-100 min-h-screen p-6" dir="rtl">
    <!-- Page Header -->
    <h1 class="text-4xl font-bold text-primary text-center mb-12">اعلانات النادي الليبي لليخوت</h1>

    <!-- Announcements Section -->
    <div class="mt-6 space-y-6" v-if="races.length">
      <div v-for="race in races" :key="race.id" class="bg-white shadow-md rounded-md p-6">
        <!-- Race Header -->
        <div class="border-b pb-4 mb-4">
          <h2 class="text-xl font-semibold">{{ race.title }}</h2>
          <p class="text-gray-500">{{ race.location }}</p>
        </div>

        <!-- Race Details -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 class="font-semibold">معلومات البطولة</h3>
            <p>{{ race.info }}</p>
          </div>
          <div>
            <h3 class="font-semibold">قواعد و معدات</h3>
            <p>{{ race.rules }}</p>
          </div>
          <div>
            <h3 class="font-semibold">الإقامة و الإعاشة</h3>
            <p>{{ race.accommodation }}</p>
          </div>
        </div>

        <!-- Race Schedule -->
        <div class="mt-4">
          <h3 class="font-semibold">البرنامج الزمني</h3>
          <ul class="list-disc ml-6">
            <li v-for="schedule in race.schedule" :key="schedule.time">
              <span>{{ schedule.date }}</span> - <span>{{ schedule.time }}</span
              >: <span>{{ schedule.event }}</span>
            </li>
          </ul>
        </div>

        <!-- Registration Details -->
        <div class="mt-4">
          <h3 class="font-semibold">التسجيل</h3>
          <p><strong>الموعد النهائي:</strong> {{ race.registration.deadline }}</p>
          <p><strong>الرسوم:</strong> {{ race.registration.fee }}</p>
          <p><strong>طريقة التسجيل:</strong> {{ race.registration.process }}</p>
        </div>

        <!-- Buttons -->
        <div class="mt-6 flex gap-3">
          <button
            class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            @click="downloadAnnouncement(race.id)"
          >
            تحميل إعلان السباق
          </button>
          <a
            :href="race.registration.link"
            class="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            target="_blank"
          >
            التسجيل في السباق
          </a>
        </div>
      </div>
    </div>

    <!-- No Races Message -->
    <div v-else class="text-center text-gray-500 mt-12">
      <p>لا توجد سباقات في الوقت الحالي.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import { ref } from 'vue'

const races = ref([
  {
    id: 1,
    title: 'بطولة البحر المتوسط الصيفية 2024',
    location: 'ميناء طرابلس، ليبيا',
    info: 'بطولة سنوية تضم أفضل البحارة من منطقة البحر المتوسط.',
    rules: 'تطبق قواعد سباقات الإبحار العالمية 2021-2024.',
    accommodation: 'خصومات خاصة في فندق المارينا مع توفير وجبات.',
    schedule: [
      { date: '2024-07-01', time: '09:00', event: 'التسجيل' },
      { date: '2024-07-01', time: '14:00', event: 'السباق التجريبي' },
      { date: '2024-07-02', time: '10:00', event: 'يوم السباق الأول' },
      { date: '2024-07-03', time: '10:00', event: 'يوم السباق الثاني' },
      { date: '2024-07-04', time: '10:00', event: 'يوم السباق الثالث' },
      { date: '2024-07-04', time: '18:00', event: 'حفل التتويج' },
    ],
    registration: {
      deadline: '2024-06-15',
      fee: '$250',
      process: 'التسجيل عبر الإنترنت من خلال موقع النادي.',
      link: '#',
    },
  },
])

const downloadAnnouncement = (raceId: number) => {
  alert(`تحميل إعلان السباق رقم ${raceId}`)
}
</script>
