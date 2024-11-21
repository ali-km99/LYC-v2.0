<script setup lang="ts">
import { slides2 } from '@/components/EventCard'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
</script>

<template>
  <div class="body w-full h-[951px] bg-cover">
    <div class="hidden lg:block">
      <NavBar />
    </div>
    <SmallNavbar />
    <div
      class="w-full text-center text-white font-semibold p-4 text-2xl -mt-20 sm:hidden"
      style="text-shadow: 5px 4px 7px black"
    >
      <div class="bg-slate-300/25 full flex col-start-3 flex-col p-3">
        <p class="text-2xl text-white font-bold text-center">
          النادي الليبي لليخوت - LIBYA YACHT Club
        </p>
        <p class="text-yellow-50 text-end mt-4">نادي اهلي متخصص في الرياضات والألعاب البحرية</p>
        <p class="text-yellow-50 text-end w-full">معتمد من الهيئة العامة للشباب والرياضة</p>
        <!-- <button >
        المزيد
      </button> -->
        <div class="self-start p-2 px-4">
          <v-btn color="#FFC400">المزيد</v-btn>
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
          النادي الليبي لليخوت - LIBYA YACHT Club
        </p>
        <p class="text-yellow-50 text-end mt-4">نادي اهلي متخصص في الرياضات والألعاب البحرية</p>
        <p class="text-yellow-50 text-end w-full">معتمد من الهيئة العامة للشباب والرياضة</p>
        <!-- <button >
          المزيد
        </button> -->
        <div class="self-start p-2 px-4">
          <v-btn color="#FFC400">المزيد</v-btn>
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
    <h1 class="w-full text-3xl text-end px-3 pr-12 text-blue-800">عن النادي الليبي لليخوت</h1>
    <div class="d-flex fill-height justify-center align-center">
      <v-carousel height="400" hide-delimiter-background show-arrows>
        <template v-slot:next="{ props }">
          <div class="mt-48">
            <v-btn @click="props.onClick" variant="outlined" color="primary" size="large"
              >التالي
            </v-btn>
          </div>
        </template>
        <template v-slot:prev="{ props }">
          <div class="mt-48">
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
      <div>
        <h2 class="text-blue-600 text-3xl font-bold text-end">تواصل معنا</h2>
        <p class="text-sm text-gray-500 mt-4 leading-relaxed text-end">
          هل لديك استفسار محدد أو تتطلع إلى استكشاف فرص جديدة؟ فريقنا ذو الخبرة مستعد للتعاون معك.
        </p>

        <form>
          <div class="space-y-8 mt-8" dir="rtl">
            <div class="flex gap-2">
              <input
                type="text"
                placeholder=" الأسم"
                class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />

              <input
                type="number"
                placeholder=" رقم الهاتف"
                class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="البريد الأكتروني"
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
            />

            <textarea
              placeholder=" أكتب رساله"
              class="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
            ></textarea>
          </div>

          <button
            type="button"
            class="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              class="mr-2"
              viewBox="0 0 548.244 548.244"
            >
              <path
                fill-rule="evenodd"
                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                clip-rule="evenodd"
                data-original="#000000"
              />
            </svg>
            أرسل إيميل
          </button>
        </form>

        <ul class="mt-4 flex flex-wrap justify-center gap-6">
          <li class="flex items-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 479.058 479.058"
            >
              <path
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                data-original="#000000"
              />
            </svg>
            <a href="javascript:void(0)" class="text-sm ml-4">
              <strong>info@example.com</strong>
            </a>
          </li>
          <li class="flex items-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 482.6 482.6"
            >
              <path
                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                data-original="#000000"
              ></path>
            </svg>
            <a href="javascript:void(0)" class="text-sm ml-4">
              <strong>+158 996 888</strong>
            </a>
          </li>
        </ul>

        <!-- <div dir="rtl">
          <div class="flex justify-center mt-8 gap-4">
            <a
              href="#"
              class="hover:scale-105 text-gray-400 hover:text-blue-400"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="hover:scale-105 text-gray-400 hover:text-fuchsia-500"
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href="#"
              class="hover:scale-105 text-gray-400 hover:text-red-600"
            >
            
              <span class="sr-only">x</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"
                ></path>
              </svg>
            </a>
            <a href="#" class="hover:scale-105 text-gray-400 hover:text-black">
             
              <span class="sr-only">x</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"
                ></path>
              </svg>
            </a>
          </div>
        </div> -->
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
