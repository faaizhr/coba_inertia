<template>
  <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 mx-auto py-2">
      <div class="py-10 border-b border-black">
        <img class="w-32" src="https://prodiadigital.com/assets/images/logo.svg"/>
      </div>
      <div class="py-10 grid grid-cols-1 md:grid-cols-12 items-center">
        <div class="flex justify-start items-center col-span-3">
          <p class="mr-10 font-medium">Part of</p>
          <img src="https://prodiadigital.com/assets/images/footer-logo.svg"/>
        </div>
        <div class="col-span-2 mt-5 md:mt-0">
          <font-awesome-icon class="fa-xl mr-5" icon="fa-brands fa-facebook"/>
          <font-awesome-icon class="fa-xl mr-5" icon="fa-brands fa-instagram"/>
          <font-awesome-icon class="fa-xl mr-5" icon="fa-brands fa-youtube"/>
        </div>
        <div class="mt-5 md:mt-0 font-medium text-sm col-span-4">
          <router-link to="/" class="mr-4">Kebijakan Privasi</router-link>
          <router-link to="/" class="mr-4">Syarat & Ketentuan</router-link>
          <router-link to="/" class="mr-4">Penafian</router-link>
        </div>
        <div class="col-span-3">
          <p class="mt-5 md:mt-0 font-light md:text-right text-left text-sm">&copy Copyright PT. Prodia Digital Indonesia</p>
        </div>
      </div>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  export default {
    name: "Footers",
    components: {
      FontAwesomeIcon
    }
  }
</script>

<style></style>