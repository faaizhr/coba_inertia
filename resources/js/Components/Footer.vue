<template>
  <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 mx-auto py-2">
      <div class="py-10 border-b border-black">
        <h1 class="font-bold text-2xl">dentsu Indonesia</h1>
      </div>
      <div class="py-10 grid grid-cols-1 md:grid-cols-3">
        <div>
          <font-awesome-icon class="fa-xl mr-5" icon="fa-brands fa-facebook"/>
          <font-awesome-icon class="fa-xl mr-5" icon="fa-brands fa-instagram"/>
          <font-awesome-icon class="fa-xl mr-5" icon="fa-brands fa-youtube"/>
        </div>
        <div class="mt-5 md:mt-0 font-medium">
          <router-link to="/" class="mr-4">Kebijakan Privasi</router-link>
          <router-link to="/" class="mr-4">Syarat & Ketentuan</router-link>
          <router-link to="/" class="mr-4">Penafian</router-link>
        </div>
        <div class="">
          <p class="mt-5 md:mt-0 font-light md:text-right text-left">&copy Copyright PT. dentsu Indonesia</p>
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