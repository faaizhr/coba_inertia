
<template>
  <div v-for="cat in category">
    <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
      <div class="py-1 text-sm">
        <p><inertia-link href="/">Beranda </inertia-link>> <b>{{ cat.category }}</b></p>
      </div>
      <div>
        
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 items-center mb-36 h-28 md:h-10 z-20">
          <h1 class="text-5xl font-bold text-center md:text-left mb-5 md:mb-0 text-[#073231]">{{ cat.category }}</h1>
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
      </div>
    </div>
    <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 bg-black py-20 rounded-b-3xl">
      <div class="container grid grid-cols-1 md:grid-cols-3 gap-10 ">
        <div class="" v-for="post in cat.posts">
          <div class="mb-5">
            <div>
              <inertia-link :href="`/artikel/${post.id}`" class="">
                <img class="rounded" :src="`../storage/${post.image}`"/>
              </inertia-link>
            </div>
            <div class="pt-3">
              <div class="mt-2">
                <inertia-link :href="`/artikel/${post.id}`" class="">
                  <h6 class="my-3 text-lg font-semibold  text-white capitalize">{{ post.title }}</h6>
                </inertia-link>
                <inertia-link :href="`/artikel/${post.id}`" class="font-bold text-white text-sm underline underline-offset-1">
                  Selengkapnya
                  <font-awesome-icon icon="fa-arrow-right" class="ml-1"/>
                </inertia-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import LayoutApp from '../../Layouts/App.vue'

import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { reactive } from 'vue'
import BasicCard from '../../Components/BasicCard.vue';

// import SecondaryCard from '../../components/SecondaryCard.vue'


export default {
  layout: LayoutApp,
  components: {
    "inertia-link": Link,
    BasicCard,
    FontAwesomeIcon
  },

  props: {
    joinTable: Array,
    category: Array,
  },

  data() {
    return {
  //     getColor: this.joinTable.category,

  //     getYear: this.joinTable.updated_at.substring(0, 4),
  //     getMonth: this.joinTable.updated_at.substring(5, 7),
  //     getDay: this.joinTable.updated_at.substring(8, 10),
  //     getTime: this.joinTable.updated_at.substring(11, 16),
      searchbar: '', 
    }
  },

  methods: {
    handleChangeSearch(e) {
      this.searchbar = e.target.value.toLowerCase()
      console.log(this.searchbar)
    }
  }

  // computed: {
  //   getCatColor: function() {
  //     return this.getColor
  //   },

  //   getMonthName: function() {
  //     if (this.getMonth == "01") {
  //       return "Januari"
  //     } 
  //     else if(this.getMonth == "02") {
  //       return "Februari"
  //     }
  //     else if(this.getMonth == "03") {
  //       return "Maret"
  //     }
  //     else if(this.getMonth == "04") {
  //       return "April"
  //     }
  //     else if(this.getMonth == "05") {
  //       return "Mei"
  //     }
  //     else if(this.getMonth == "06") {
  //       return "Juni"
  //     }
  //     else if(this.getMonth == "07") {
  //       return "Juli"
  //     }
  //     else if(this.getMonth == "08") {
  //       return "Agustus"
  //     }
  //     else if(this.getMonth == "09") {
  //       return "September"
  //     }
  //     else if(this.getMonth == "10") {
  //       return "Oktober"
  //     }
  //     else if(this.getMonth == "11") {
  //       return "November"
  //     }
  //     else if(this.getMonth == "12") {
  //       return "Desember"
  //     }
  //   },
  // }
    
    
}

</script>


<style>
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

.backgroundColor {
  background-image: linear-gradient(to right, #fbf38f, #fff09a, #ffeea6, #ffecb2, #ffeabe, #ffe7c1, #ffe4c4, #ffe1c8, #ffdbc5, #ffd5c2, #ffd0c0, #fecabf);
} */
</style>
