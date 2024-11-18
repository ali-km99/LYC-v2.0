<template>
  <div>
    <nav class="h-20 w-full bg-white/10 backdrop-blur-sm sticky top-0">
      <div class="flex items-center justify-between">
        <img
          src="../assets/imeges/emptylogo.png"
          width="60"
          alt="main-logo"
          class="m-2 ml-10"
        />
        <!-- list  -->
        <div class="">
          <ul class="flex flex-row gap-10 text-white">
            <RouterLink :to="{ name: 'home' }">
              <li
                class="hover:text-[#394A98] hover:scale-110 duration-150 transition hover:cursor-pointer"
              >
                الرئيسي
              </li>
            </RouterLink>
            <RouterLink :to="{ name: 'PhotoGallery' }">
              <li
                class="hover:text-[#394A98] hover:scale-110 duration-150 transition"
              >
                معرض الصور
              </li></RouterLink
            >
            <RouterLink :to="{ name: 'about' }">
              <li
                class="hover:text-[#394A98] hover:scale-110 duration-150 transition"
              >
                عن النادي
              </li>
            </RouterLink>

            <RouterLink :to="{ name: 'GoldenHistory' }">
              <li
                class="hover:text-[#394A98] hover:scale-110 duration-150 transition"
              >
                السجل الذهبي
              </li>
            </RouterLink>
            <li
              class="hover:text-[#394A98] hover:scale-110 duration-150 transition"
            >
              تواصل معنا
            </li>
          </ul>
        </div>
        <!-- list -->

        <div class="flex">
          <select>
            <option>عربي</option>
            <option>EN</option>
          </select>
          <img src="../assets/lang.svg" width="20" alt="" />
        </div>
      </div>
    </nav>
  </div>
</template>
