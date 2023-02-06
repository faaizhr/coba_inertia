<template>
  <div class="px-6 sm:px-8 md:px-8 xl:px-72 2xl:px-96 mx-auto py-10">
    <div class="flex justify-between items-center">
      <div class="">
        <h1 class="text-xl font-bold">dentsu</h1>
      </div>
      <div class=" w-full md:grid md:justify-items-end hidden">
        <div class="">
          <a class="mr-5"><inertia-link href="/artikel">Beranda</inertia-link></a>
          <a class="mr-5">Bantuan</a>
          <a class="mr-5">Tentang Kami</a>
          <a class="mr-5">Artikel</a>
          <a class="mr-5">Fitur</a>
          <button class="border border-[#073231] rounded-lg px-3 py-1 mr-3 ml-3 hover:bg-[#073231] hover:text-white">English</button>
          <inertia-link href="/posts">
            <button class="border border-green-900 rounded-lg px-3 py-1 bg-[#073231] hover:bg-transparent text-white hover:text-black">Admin Site</button>
          </inertia-link>
        </div>
        <div>
        </div>
      </div>
      <div>
        <button class="mr-10 bg-green-900 text-white px-5 py-2 rounded-lg text-sm font-medium md:hidden">Admin Site</button>
        <font-awesome-icon icon="fa-solid fa-bars-staggered" class="fa-2xl cursor-pointer md:hidden" @click="handleToggleNavbar" />
      </div>
    </div>
  </div>


  <div class="transition ease-in-out duration-500" :style="{ display: toggleNavbar ? 'block' : 'none' }">
    <div class="bg-black w-5/6 h-screen fixed top-0 right-0 p-10 rounded-l-3xl">
      <font-awesome-icon icon="fa-solid fa-xmark "  class="whiteColorIcon fa-2xl float-right cursor-pointer" @click="handleToggleNavbar"/>
      <ul class="mt-10">
        <li class="py-5">
          <button class="rounded-lg px-5 py-2 bg-white text-sm font-semibold">Get the app</button>
        </li>
        <li class="text-white py-3"><inertia-link href="/posts">Beranda</inertia-link></li>
        <li class="text-white py-3">Bantuan</li>
        <li class="text-white py-3">Tentang Kami</li>
        <li class="text-white py-3">Artikel</li>
        <li class="text-white py-3">Fitur</li>
        <li class="py-5">
          <button class="rounded-lg px-7 py-2 text-sm font-semibold bg-black text-white border border-white">English</button>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>

import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia'

export default {
  name: "Navbar",
  components: {
    'inertia-link': Link,
  },
  data() {
    return {
      toggleNavbar: false
    };
  },
  methods: {
    handleToggleNavbar() {
      if (this.toggleNavbar == false) {
        this.toggleNavbar = true;
      } else if (this.toggleNavbar == true) {
        this.toggleNavbar = false
      }
    }
  },
}
</script>

<style>
 .whiteColorIcon {
  color: white;
  fill: white;
}
</style>