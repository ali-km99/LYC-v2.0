<script setup lang="ts">
import { slides2 } from '@/components/EventCard'
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
        <p class="text-yellow-50 text-end mt-4">نادي اهلي متخصص في الرياضات والألعاب البحرية</p>
        <p class="text-yellow-50 text-end w-full">معتمد من الهيئة العامة للشباب والرياضة</p>
        <!-- <button >
        المزيد
      </button> -->
        <div class="self-start p-2 px-4">
          <v-btn color="#FFC400" @click="router.replace({ name: 'about' })"> المزيد</v-btn>
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
            <v-btn variant="outlined" color="primary" size="large" @click="props.onClick"
              >السابق
            </v-btn>
          </div>
        </template>
        <v-carousel-item v-for="(slide, i) in slides2" :key="i">
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
          v-motion-slide-visible-bottom
          :delay="600"
          :duration="1500"
          src="../assets/imeges/typs6.jpg"
          class="rounded-lg bg-gray-100"
        />
        <img
          v-motion-slide-visible-bottom
          :delay="600"
          :duration="1500"
          src="../assets/imeges/image7.jpg"
          class="rounded-lg bg-gray-100 col-span-2"
        />
      </div>
      <div>
        <h1 class="w-full text-3xl text-end px-3 pr-12 text-blue-500">الأصناف الرياضيه بنادي</h1>
        <p class="mt-4 text-white">
          نحن نضمن أعلى كفاءة في دوراتنا لتعلم اللغة الإنجليزية، من خلال تطبيق أساليب تجعلك تتعلم
          بسهولة وبشكل أسرع، نستخدم حلولًا تعليمية فريدة وأحدث التقنيات. كما انك ستحصل على إمكانية
          الوصول إلى الفصول الدراسية والمواد في أي وقت وأي مكان.
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
            <h2 class="font-semibold text-blue-600 text-lg">صنف الليزر ستاندرد - ILCA 7</h2>
            <p class="mt-2 text-sm text-gray-400">
              هــو قــارب شــراعي فــردي وهــو القــارب المعتمـد أولمبيـا عمـر الرياضـي فيـه يبـدأ
              مـن ســن 19 ســنة و ليــس لــه حــد أقصــى فــي العمــر ، تنظــم لــه بطــوالت دوليــة
              مختلفــة و أبرزهــا بطولــة العالــم و األولمبيــاد الصيفيــة .
            </p>
          </div>
          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="300"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">صنف هوبي كات - Hobie Cat 16</h2>
            <p class="mt-2 text-sm text-gray-400">
              هـو قـارب متعـدد األبـدان و هـو قـارب زوجـي يعتبــر مــن أســرع األصنــاف و أصعبهــا
              ســن الرياضـي فيـه مـن 15 سـنة كحـد أدنـى و ليـس لــه حــد أقصــى فــي العمــر ،
              بطوالتــه الدوليــة معتمــدة فــي االتحــاد الدولــي و لكنــه ليــس صنــف أولمبــي
            </p>
          </div>
          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="500"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">صنف الألواح الشراعية - Windsurf</h2>
            <p class="mt-2 text-sm text-gray-400">
              األلــواح الشــراعية متعــددة االصنــاف ولجميــع هــذه األصنــاف بطــوالت معتمــدة
              دوليــا ، مــن أهــم األصنــاف بيــك تيكنــو 293 وهــو صنــف بطــوالت الشــباب و
              أيضــا صنــف X-RS وهــو الصنـف المعتمـد أولمبيـا ، الفئـات السـنية فيـه متعــددة مــن
              12 ســنة فمــا فــوق .
            </p>
          </div>
          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="700"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">صنف الأوبتيموس - Optimist</h2>
            <p class="mt-2 text-sm text-gray-400">
              هو قـارب شـراعي فـردي يعـد الصنـف المعتمد دوليــا للناشــئين ويكــون عمــر الرياضــي
              فيــه مـن سـن 6 سـنوات و حتـى سـن 15 سـنة، حيـث تقـام بطـوالت دوليـة متعـددة لهـذا
              الصنـف و هـو ال يعتبـر صنـف أولمبـي .
            </p>
          </div>
          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="600"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">صنف الليزر - ILCA 4</h2>
            <p class="mt-2 text-sm text-gray-400">
              هــو قــارب شــراعي فــردي وهــو يعــد أول قــارب فــي فئــة الشــباب و عمــر
              الرياضــي فيـه مـن سـن 15 سـنة إلـى سـن 17 سـنة ، تقـام لـه بطـوالت دوليـا أيضـا و هـو
              أيضـا ال يعتبــر صنــف أولمبــي .
            </p>
          </div>
          <div
            class="border-t border-gray-200 pt-4"
            v-motion-slide-visible-bottom
            :delay="600"
            :duration="1500"
          >
            <h2 class="font-semibold text-blue-600">صنف الليزر راديال - ILCA 6</h2>
            <p class="mt-2 text-sm text-gray-400">
              هــو قــارب شــراعي فــردي وهــو يعــد أول قــارب فــي فئــة الشــباب و عمــر
              الرياضــي فيـه مـن سـن 15 سـنة إلـى سـن 17 سـنة ، تقـام لـه بطـوالت دوليـا أيضـا و هـو
              أيضـا ال يعتبــر صنــف أولمبــي .
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
        <h2 class="text-blue-600 text-3xl font-bold text-end">تواصل معنا</h2>
        <p class="text-sm text-gray-500 mt-4 leading-relaxed text-end">
          هل لديك استفسار محدد أو تتطلع إلى استكشاف فرص جديدة؟ فريقنا ذو الخبرة مستعد للتعاون معك.
        </p>

        <form>
          <div class="space-y-8 mt-8" dir="rtl">
            <div class="flex lg:gap-2 gap-6 lg:flex-row flex-col">
              <v-text-field
                label="الإسم "
                :prepend-icon="mdiAccount"
                variant="underlined"
              ></v-text-field>
              <v-text-field
                label="رقم الهاتف "
                :prepend-icon="mdiPhone"
                variant="underlined"
              ></v-text-field>
            </div>

            <v-text-field
              label="البريد الاكتروني"
              :prepend-icon="mdiEmail"
              variant="underlined"
            ></v-text-field>

            <v-textarea
              label="أكتب الرساله هنا"
              :prepend-icon="mdiMail"
              variant="underlined"
            ></v-textarea>
            <v-btn color="#3B82F6" text="أرسل إيميل" :append-icon="mdiSend"> </v-btn>
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
              <strong>+158 996 888</strong>
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
