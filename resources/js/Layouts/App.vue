<template>
  <div>
    <Navbar/>
    <main class="">
      <slot />
    </main>
    <Footer/>
  </div>
</template>

<script>

  import { Link } from '@inertiajs/inertia-vue3';
  import Navbar from '../Components/Navbar.vue'
  import Footer from '../Components/Footer.vue';

  export default {
		
    //register Link di component
    components: {
    "inertia-link": Link,
    Footer,
    Navbar
},
  }
</script>

<style>

</style>