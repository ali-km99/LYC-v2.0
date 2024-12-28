<script setup lang="ts">
import { slides2, slides3 } from '@/components/EventCard'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import router from '@/router'
import {
  mdiAccount,
  mdiEmail,
  mdiEmailFastOutline,
  mdiMail,
  mdiPhone,
  mdiPhoneOutline,
  mdiSend,
} from '@mdi/js'
</script>

<template>
  <div class="body w-full h-[951px] bg-cover transition duration-500">
    <div class="hidden lg:block">
      <NavBar />
    </div>
    <SmallNavbar />
    <div
      class="w-full text-center text-white font-semibold p-4 text-2xl mt-32 rounded-md sm:hidden"
      style="text-shadow: 5px 4px 7px black"
    >
      <div class="bg-slate-300/25 flex col-start-3 flex-col p-3 rounded-md">
        <p class="text-2xl text-white font-bold text-center">
          {{ $t("content['clubName']") }}
        </p>
        <p class="text-yellow-50 text-end mt-4">{{ $t("content['description1']") }}</p>
        <p class="text-yellow-50 text-end w-full">{{ $t("content['description2']") }}</p>
        <!-- <button >
        المزيد
      </button> -->
        <div class="self-start p-2 px-4">
          <v-btn color="#FFC400" @click="router.replace({ name: 'about' })">
            {{ $t("content['moreButton']") }}</v-btn
          >
        </div>
      </div>
    </div>
    <div
      v-motion-slide-visible-bottom
      :delay="200"
      :duration="1500"
      class="w-full grid-cols-3 lg:mt-96 mt-32 pr-5 hidden lg:grid"
    >
      <div class="bg-slate-300/25 full flex col-start-3 flex-col p-3">
        <p class="text-2xl text-white font-bold text-center">
          {{ $t("content['clubName']") }}
        </p>
        <p class="text-yellow-50 text-end mt-4">{{ $t("content['description1']") }}</p>
        <p class="text-yellow-50 text-end w-full">{{ $t("content['description2']") }}</p>
        <!-- <button >
          المزيد
        </button> -->
        <div class="self-start p-2 px-4">
          <v-btn color="#FFC400" @click="router.replace({ name: 'about' })">{{
            $t("content['moreButton']")
          }}</v-btn>
        </div>
      </div>
    </div>
  </div>
  <section class="bg-white h-[25vh] py-10 flex justify-around mx-4">
    <img
      class="hover:scale-105 duration-300 lg:w-[200px] lg:h-[100px] w-11 h-11"
      src="../assets/imeges/COM/IMG-20241029-WA0005.jpg"
      alt=""
    />
    <img
      class="hover:scale-105 duration-300 lg:w-[150px] lg:h-[100px] w-11 h-11"
      src="../assets/imeges/COM/IMG-20241029-WA0004.jpg"
      alt=""
    />
    <img
      class="hover:scale-105 duration-300 lg:w-[120px] lg:h-[100px] w-11 h-11"
      src="../assets/imeges/COM/IMG-20241029-WA0002.jpg"
      alt=""
    />
    <img
      class="hover:scale-105 duration-300 lg:w-[90px] lg:h-[100px] w-11 h-11"
      src="../assets/imeges/COM/IMG-20241029-WA0006.jpg"
      alt=""
    />
    <img
      class="hover:scale-105 duration-300 lg:w-[120px] lg:h-[100px] w-11 h-11"
      src="../assets/imeges/COM/IMG-20241029-WA0007.jpg"
      alt=""
    />
  </section>
  <section class="my-12">
    <h1 class="w-full text-3xl text-end px-3 pr-12 text-blue-800">{{ $t('aboutClub') }}</h1>
    <div class="d-flex fill-height justify-center align-center">
      <v-carousel height="400" hide-delimiter-background show-arrows>
        <template v-slot:next="{ props }">
          <div class="mt-80 z-30">
            <v-btn @click="props.onClick" variant="outlined" color="primary" size="large">
              {{ $t('next') }}
            </v-btn>
          </div>
        </template>
        <template v-slot:prev="{ props }">
          <div class="mt-80 z-30">
            <v-btn variant="outlined" color="primary" size="large" @click="props.onClick">
              {{ $t('back') }}
            </v-btn>
          </div>
        </template>
        <v-carousel-item v-for="(slide, i) in $i18n.locale == 'ar' ? slides2 : slides3" :key="i">
          <v-sheet height="100%">
            <div class="grid lg:grid-cols-2 w-full px-8">
              <img
                v-if="i === 0"
                src="../assets/imeges/IMG_6183.jpg"
                alt=""
                class="mx-auto h-96 object-cover rounded-lg shadow-lg hidden lg:block"
              />
              <img
                v-if="i === 1"
                src="../assets/imeges/Group2.png"
                alt=""
                class="mx-auto h-96 object-cover rounded-lg shadow-lg hidden lg:block"
              />
              <img
                v-if="i === 2"
                src="../assets/imeges/image6.jpg"
                alt=""
                class="mx-auto h-96 object-cover rounded-lg shadow-lg hidden lg:block"
              />
              <div class="flex justify-center items-center flex-col mt-14 h-full">
                <div
                  class="w-10 h-10 rounded-full bg-[#E4FF5B] flex justify-center items-center self-end"
                >
                  {{ slide.num }}
                </div>
                <p class="h-2/3 text-gray-500 text-base leading-relaxed">
                  {{ slide.text }}
                </p>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>

  <section id="method" class="bg-bluee">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
    >
      <div class="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 overflow-hidden">
        <img
          v-motion-slide-visible-left
          :delay="100"
          :duration="1500"
          height="400"
          src="../assets/imeges/typs5.jpg"
          class="rounded-lg bg-gray-100"
        />
        <img
          v-motion-slide-visible-top
          :delay="200"
          :duration="1500"
          src="../assets/imeges/typs2.jpg"
          class="rounded-lg bg-gray-100"
        />
        <img
          v-motion-slide-visible-top
          :delay="400"
          :duration="1500"
          src="../assets/imeges/typs4.jpg"
          class="rounded-lg bg-gray-100"
        />
        <img
          v-motion-slide-visible-left
          :delay="600"
          :duration="1500"
          src="../assets/imeges/typs6.jpg"
          class="rounded-lg bg-gray-100"
        />
        <img
          v-motion-slide-visible-top
          :delay="600"
          :duration="1500"
          src="../assets/imeges/typs7.jpg"
          class="rounded-lg bg-gray-100 col-span-2"
        />
        <img
          v-motion-slide-visible-bottom
          :delay="600"
          :duration="1500"
          src="../assets/imeges/a56.jpg"
          class="rounded-lg bg-gray-100 w-full"
        />
        <img
          v-motion-slide-visible-left
          :delay="600"
          :duration="1500"
          src="../assets/imeges/image12.jpg"
          class="rounded-lg bg-gray-100"
        />
        <img
          v-motion-slide-visible-top
          :delay="600"
          :duration="1500"
          src="../assets/imeges/image7.jpg"
          class="rounded-lg bg-gray-100 col-span-2"
        />
      </div>
      <div>
        <h1 class="w-full text-3xl text-end px-3 pr-12 text-blue-500">
          {{ $t('TYtitle') }}
        </h1>
        <p class="mt-4 text-white">
          {{ $t('TYdescription') }}
        </p>

        <dl
          dir="rtl"
          class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
        >
          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="100"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600 text-lg">
              {{ $t('TYcategories.0.title') }}
            </h2>
            <p class="mt-2 text-sm text-gray-400">
              {{ $t('TYcategories.0.description') }}
            </p>
          </div>

          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="300"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">
              {{ $t('TYcategories.1.title') }}
            </h2>
            <p class="mt-2 text-sm text-gray-400">
              {{ $t('TYcategories.1.description') }}
            </p>
          </div>

          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="500"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">
              {{ $t('TYcategories.2.title') }}
            </h2>
            <p class="mt-2 text-sm text-gray-400">
              {{ $t('TYcategories.2.description') }}
            </p>
          </div>

          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="700"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">
              {{ $t('TYcategories.3.title') }}
            </h2>
            <p class="mt-2 text-sm text-gray-400">
              {{ $t('TYcategories.3.description') }}
            </p>
          </div>

          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="600"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">
              {{ $t('TYcategories.4.title') }}
            </h2>
            <p class="mt-2 text-sm text-gray-400">
              {{ $t('TYcategories.4.description') }}
            </p>
          </div>

          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="600"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">
              {{ $t('TYcategories.5.title') }}
            </h2>
            <p class="mt-2 text-sm text-gray-400">
              {{ $t('TYcategories.5.description') }}
            </p>
          </div>
          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="800"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">
              {{ $t('TYcategories.6.title') }}
            </h2>
            <p class="mt-2 text-sm text-gray-400">
              {{ $t('TYcategories.6.description') }}
            </p>
          </div>
          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="1000"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">
              {{ $t('TYcategories.7.title') }}
            </h2>
            <p class="mt-2 text-sm text-gray-400">
              {{ $t('TYcategories.7.description') }}
            </p>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <section class="p-2 px-8 my-6">
    <div
      class="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 before:absolute before:right-0 before:w-[300px] before:bg-blue-500 before:h-full max-md:before:hidden"
    >
      <div id="contact">
        <h2 class="text-blue-600 text-3xl font-bold text-end">{{ $t("Nav['contact']") }}</h2>
        <p class="text-sm text-gray-500 mt-4 leading-relaxed text-end">
          {{ $t('contentusTitel') }}
        </p>

        <form>
          <div class="space-y-8 mt-8">
            <div class="flex lg:gap-2 gap-6 lg:flex-row flex-col">
              <v-text-field
                :label="$i18n.locale == 'ar' ? 'الأسم' : 'Name'"
                :prepend-icon="mdiAccount"
                variant="underlined"
              ></v-text-field>
              <v-text-field
                :label="$i18n.locale == 'ar' ? 'رقم الهاتف' : 'Phone number'"
                :prepend-icon="mdiPhone"
                variant="underlined"
              ></v-text-field>
            </div>

            <v-text-field
              :label="$i18n.locale == 'ar' ? 'البريد الأكتروني' : 'Email'"
              :prepend-icon="mdiEmail"
              variant="underlined"
            ></v-text-field>

            <v-textarea
              :label="$i18n.locale == 'ar' ? 'أكتب الرساله هنا ' : 'Write your message here'"
              :prepend-icon="mdiMail"
              variant="underlined"
            ></v-textarea>
            <v-btn
              color="#3B82F6"
              :text="$i18n.locale == 'ar' ? 'أرسل رساله   ' : 'Send  message '"
              :append-icon="mdiSend"
            >
            </v-btn>
          </div>
        </form>

        <ul class="mt-4 flex flex-wrap justify-center gap-6">
          <li class="flex items-center text-blue-600">
            <a href="javascript:void(0)" class="text-sm mr-2">
              <strong>info@lyc.ly</strong>
            </a>
            <v-icon :icon="mdiEmailFastOutline"></v-icon>
          </li>
          <li class="flex items-center text-blue-600">
            <a href="javascript:void(0)" class="text-sm mr-2">
              <strong>+218 92 5992289</strong>
            </a>
            <v-icon :icon="mdiPhoneOutline"></v-icon>
          </li>
        </ul>
      </div>
      <div class="z-10 relative h-full max-md:min-h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.6765267749324!2d13.13772162487383!3d32.8802769787027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8ed9a2532fb07%3A0xedb24e1f5a21dd37!2z2KfZhNmG2KfYr9mKINin2YTZhNmK2KjZiiDZhNmE2YrYrtmI2KogTFlD!5e0!3m2!1sar!2sus!4v1731181817744!5m2!1sar!2sus"
          class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.body {
  background-image: url('../assets/imeges/bg2.jpg');

  background-size: cover;
  background-repeat: no-repeat;
}

/* .text-img {
  background-image: url(../assets/imeges/emptylogo.png);
  background-size: 100px;
} */
</style>
