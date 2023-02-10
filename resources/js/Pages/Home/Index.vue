<template>
  
  <div class="">
    <!-- <div class="py-1 text-sm">
     <p><b><inertia-link to="/">Beranda </inertia-link></b></p>
    </div> -->
    <div class="">
      <div class="my-10 grid grid-cols-1 md:grid-cols-2 mb-10 items-center px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <div></div>
        <input type="text" placeholder="CARI..." class="rounded-xl px-4 max-w-none focus:outline-none md:w-4/6 h-10 border border-green-900 bg-transparent md:ml-auto placeholder:text-black"/>
      </div>
      <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <h1 class="text-6xl text-[#073231] font-bold text-center leading-tight">Your Personal Health & Wellness Companion</h1>
        <p class="text-center mt-14 leading-loose">Kita semua unik, dengan berbagai perbedaan riwayat fisik, kondisi, dan kebutuhannya. Kami mengerti dan percaya, dengan keunikan ini dibutuhkan juga perawatan yang khusus. U by Prodia adalah aplikasi manajer kesehatan untuk mengelola kesehatan Kamu secara personal, agar Kamu bisa menjadi versi terbaik diri Kamu.</p>
      </div>
      <div class="mt-28 px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <h2 class="text-4xl text-[#073231] font-bold text-center">Fitur Untukmu</h2>
        <p class="text-center mt-5">Dapatkan akses ke fitur menarik untuk membuatmu tetap fit dan sehat.</p>
      </div>
      <div class="bg-custom w-full h-24 mt-20 rounded-custom z-10 min-margin relative -mr-6">

      </div>

      
    </div>
  </div>
  <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 bg-black py-20 rounded-b-3xl -z-50">
  </div>
</template>

<script>
//import layout
import LayoutApp from '../../Layouts/App.vue'

//import Link dari inertia
import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia'

//import component
import MainCard from '../../Components/MainCard.vue';
import SmallCard from '../../Components/SmallCard.vue'
import BasicCard from '../../Components/BasicCard.vue';
import BasicFilteredCard from '../../Components/BasicFilteredCard.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import SecondaryCard from '../../Components/SecondaryCard.vue';



export default {

  layout: LayoutApp,
    
  components: { 
  "inertia-link": Link,
  MainCard,
  SmallCard,
  BasicCard,
  FontAwesomeIcon
},

  props: {
      postsDESC: Array,
  },
  
  // data() {
  //     return {
  //     dropDown: false,
  //     category: '',

  //     };
  // },
  // methods: {
  //     handleDropdown() {
  //         if (this.dropDown == false) {
  //             this.dropDown = true;
  //         } else if (this.dropDown == true) {
  //             this.dropDown = false
  //         }
  //     },

  //     handleChangeCat(value) {
  //       this.category = value
  //       console.log("cek ceok", this.category)
  //     }
  // },


}
</script>

<style>
  a {
      text-decoration: none;
      color: black;
  }

  .bg-custom {
    background-image: linear-gradient(to right, #fbf38f, #fff09a, #ffeea6, #ffecb2, #ffeabe, #ffe7c1, #ffe4c4, #ffe1c8, #ffdbc5, #ffd5c2, #ffd0c0, #fecabf);
  }

  .rounded-custom {
    border-radius: 50%;
  }

  .min-margin {
    margin-bottom: -45px;
  }


</style>