<template>
  
  <div class="">
    <!-- <div class="py-1 text-sm">
     <p><b><inertia-link to="/">Beranda </inertia-link></b></p>
    </div> -->
    <div class="">

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 items-center mb-20 h-28 md:h-10 z-20 px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <div></div>
        <input type="text" placeholder="CARI..." name="seacrhbar" @change="handleChangeSearch" class="rounded-xl px-4 focus:outline-none h-12 border border-green-900 bg-transparent md:ml-auto placeholder:text-black uppercase w-full md:w-4/6"/>
        <div></div>
        <div class="z-50">
          <div 
            v-if="this.searchbar != ''" 
            v-for="post in joinTable.filter(posts => posts.title.includes(this.searchbar))" class="bg-black w-full md:w-4/6 float-right p-3 border-b border-gray-300 z-20"
          >
            <inertia-link :href="`/artikel/${post.id}`">
              <p class="capitalize text-white text-sm">{{ post.title }}</p>
            </inertia-link>
          </div>
        </div>
      </div>

      <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <h1 class="text-5xl md:text-6xl text-[#073231] font-bold text-center leading-tight">Your Personal Health & Wellness Companion</h1>
        <p class="text-center mt-14 leading-loose">Kita semua unik, dengan berbagai perbedaan riwayat fisik, kondisi, dan kebutuhannya. Kami mengerti dan percaya, dengan keunikan ini dibutuhkan juga perawatan yang khusus. U by Prodia adalah aplikasi manajer kesehatan untuk mengelola kesehatan Kamu secara personal, agar Kamu bisa menjadi versi terbaik diri Kamu.</p>
      </div>
      <div class="mt-28 px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <h2 class="text-4xl text-[#073231] font-bold text-center">Fitur Untukmu</h2>
        <p class="text-center mt-5">Dapatkan akses ke fitur menarik untuk membuatmu tetap fit dan sehat.</p>
      </div>
      <div class="bg-custom w-full h-24 mt-20 rounded-custom min-margin -mr-6">

      </div>

      
    </div>
  </div>
  <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 bg-black py-20 rounded-b-3xl">
    <div class="w-full h-96 bg-black">
      <h2 class="text-4xl tracking-wide font-bold text-white text-center mt-10">Download Sekarang</h2>
      <div class="mx-auto">
        <div class="flex justify-center flex-wrap mt-10 gap-10">
          <a href="https://play.google.com/store/apps/details?id=com.prodiadigital.patient" target="_blank">
            <img class="w-72 rounded-xl" src="https://media.discordapp.net/attachments/915505289174847510/1073553106165575740/Untitled-1.png?width=875&height=262"/>
          </a>
          <a href="https://apps.apple.com/id/app/u-by-prodia/id6443986153" target="_blank">
            <img class="w-72 rounded-xl" src="https://media.discordapp.net/attachments/915505289174847510/1073553105951662170/Untitled-2.png?width=875&height=263"/>
          </a>
        </div>
      </div>
    </div>
    <div>
      <!-- <div class="block">
        <div class="animation">
          <div class="first">
            <img src="http://fpoimg.com/200x200?text=First">
          </div>
          <div>
            <img src="http://fpoimg.com/200x200?text=Second">
          </div>
          <div>
            <img src="http://fpoimg.com/200x200?text=Third">
          </div>
          <div>
            <img src="http://fpoimg.com/200x200">
          </div>
          <div>
            <img src="http://fpoimg.com/200x200">
          </div>
          <div>
            <img src="http://fpoimg.com/200x200">
          </div>
        </div>
      </div> -->
    </div>
    <div class="w-full grid grid-cols-1 md:grid-cols-3 text-white bg-radial py-28">
      <div class=" w-full flex items-center">
        <div class="hidden md:block">
          <h2 class="text-3xl mb-3 font-bold text-right">Pemeriksaan Lab</h2>
          <p class="text-right">Pesan pemeriksaan lab, seperti check up jantung, cek diabetes, atau cek gula darah di cabang Prodia terdekat. Seluruh hasil lab akan dikirimkan langsung di aplikasi.</p>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <img src="https://cdn.discordapp.com/attachments/915505289174847510/1073526322929868800/group-2509-14112022-092147.png"/>
      </div>
      <div class="block md:hidden mt-10 mb-16">
          <h2 class="text-3xl mb-3 font-bold text-center">Pemeriksaan Lab</h2>
          <p class="text-center">Pesan pemeriksaan lab, seperti check up jantung, cek diabetes, atau cek gula darah di cabang Prodia terdekat. Seluruh hasil lab akan dikirimkan langsung di aplikasi.</p>
        </div>
      <div class="w-full flex items-center">
        <div>
          <div class="mb-16">
            <h2 class="text-3xl mb-3 font-bold text-center md:text-left">Health Score</h2>
            <p>Pahami langkah untuk menjaga kesehatan dirimu dengan mengambil penilaian Health Score.</p>
          </div>
          <div>
            <h2 class="text-3xl mb-3 font-bold text-center md:text-left">Home Service</h2>
            <p>Lakukan pemeriksaan lab dari rumah! Cukup pesan tes dan kami akan datang untuk pengambilan sampel.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <inertia-link href="/fitur">
        <button class="bg-white px-8 py-2 rounded-xl text-sm font-medium">Fitur Lainnya</button>
      </inertia-link>
    </div>
  </div>

  <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 mt-20">
    <h2 class="text-4xl font-bold text text-[#073231] text-center">Apa Kata Mereka?</h2>
    <div v-for="feedback in feedback.filter(el => el.id == this.getFeedbackId)">
      <div class="w-full border border-gray-400 rounded-2xl mt-20 p-10 min-h-96">
        <img class="mx-auto" src="https://prodiadigital.com/assets/images/quote.svg"/>
        <p class="text-center mt-5">({{ feedback.layanan }})</p>
        <p class="text-center leading-relaxed">{{ feedback.comment }}</p>
      </div>
    </div>

    <div class="flex justify-center items-center mt-6">
      <div @click="prevFeedback" class="mr-3 cursor-pointer -ml-7">
        <font-awesome-icon icon="fa-arrow-left" class=""/>
      </div>
        <div class="w-full grid grid-cols-3 gap-5">
          <div v-for="feedback in feedback" class="">
            <div :class="getFeedbackId == feedback.id ? 'w-full rounded-lg border border-orange-400 cursor-pointer' : 'w-full rounded-lg border border-gray-400 cursor-pointer'">
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3" @click="handleGetFeedbackId(feedback.id)">
                <div>
                  <img class="w-full h-auto object-cover rounded-l-lg" src="https://prodiadigital.com/asset/uploads/meta/post/150-1503945-transparent-user-default-user-image-2-21112022-115039.png"/>
                </div>
                <div class="col-span-1 md:col-span-2 flex items-center">
                  <div>
                    <p class="font-semibold">{{ feedback.nama }}</p>
                    <p class="text-xs mt-4">{{ feedback.profesi }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      <div @click="nextFeedback" class="ml-3 cursor-pointer -mr-7">
        <font-awesome-icon icon="fa-arrow-right" class=""/>
      </div>
    </div>

  </div>


  <div class="mt-28 mx-auto px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
    <p class="text-center text-lg">ARTIKEL</p>
    <h2 class="font-bold text-3xl text-[#073231] text-center mt-2">Bacaan Untukmu</h2>
    <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      <BasicCardHome v-for="post in postsDESC.slice(0, 3)" 
        :key="post.id"
        :item="post"
        :index="index"
      />
    </div>
    <div>
      <inertia-link href="/artikel">
        <div class="text-white bg-[#073231] px-7 py-2 w-fit rounded-lg text-sm mx-auto mt-10">
          <p class="inline">Artikel Lainnya</p>
          <font-awesome-icon icon="fa-arrow-right" class="ml-2 whiteColorIcon"/>
        </div>
      </inertia-link>
    </div>
  </div>
</template>

<script>
//import layout
import LayoutApp from '../../Layouts/App.vue'

//import Link dari inertia
import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import { reactive } from 'vue';

//import component
import BasicCard from '../../Components/BasicCard.vue';
import BasicCardHome from '../../Components/BasicCardHome.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { feedback } from '../../questions';



// ========================================================

window.onload = function () {
  initSmoothScrolling('.block','smoothscroll');
}


// ========================================================





export default {

  layout: LayoutApp,
    
  components: {
    "inertia-link": Link,
    BasicCard,
    BasicCardHome,
    FontAwesomeIcon
},

  props: {
      postsDESC: Array,
      joinTable: Array, 
      feedback: Array,
  },
  

  data() {
    return {
      searchbar: '',
      getFeedbackId: 1,
    };
  },

  methods: {
    handleChangeSearch(e) {
      this.searchbar = e.target.value.toLowerCase()
      console.log(this.searchbar)
    },

    handleGetFeedbackId(id) {
      this.getFeedbackId = id;
    },

    nextFeedback() {
      if (this.getFeedbackId >= feedback.length) {
        this.getFeedbackId = 1;
      } else
      this.getFeedbackId = this.getFeedbackId + 1;
    },

    prevFeedback() {
      if (this.getFeedbackId <= 1) {
        this.getFeedbackId = feedback.length;
      } else
      this.getFeedbackId = this.getFeedbackId - 1;
    }
  },

  // setup() {
  //   const comment = reactive(feedback)

  //   return {
  //     comment
  //   }
  // }


}
</script>

<style>
  /* .block {
    overflow: hidden;
    width: 800px;
    margin: 50px auto;
    background: #fff;
  }
  .animation {
    width: auto;
    height: 100px;
    font-size: 0px;
  }
  .animation div {
    display: inline-block;
    width: auto;
    float: none;
    padding: 0 10px;
  } */

  a {
      text-decoration: none;
      color: black;
  }

  .whiteColorIcon {
    color: white;
    fill: white;
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

  .bg-radial {
    background: radial-gradient(50% 50% at 50% 50%, rgba(87, 74, 27, 0.64) 16.7%, rgba(77, 57, 21, 0.616008) 34.52%, rgba(40, 32, 11, 0.851788) 58.71%, #000000 100%);
  }


</style>