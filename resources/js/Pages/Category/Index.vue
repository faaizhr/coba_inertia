
<template>
  <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
    <div class="py-1 text-sm">
      <p><inertia-link href="/">Beranda </inertia-link>> <b>Category</b></p>
    </div>
    <div>
      <div v-for="cat in category">
        <inertia-link :href="`/category/${cat.slug}`">
          <p>{{ cat.category }}</p>
        </inertia-link>
      </div>
    </div>
  </div>
  <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 bg-black py-20 rounded-b-3xl">
    <h1 class="text-3xl font-bold inline text-white">Artikel Lainnya</h1>
    <div class="container grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 z-0">
     
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
    category: Array,
  },

  // data() {
  //   return {
  //     getColor: this.joinTable.category,

  //     getYear: this.joinTable.updated_at.substring(0, 4),
  //     getMonth: this.joinTable.updated_at.substring(5, 7),
  //     getDay: this.joinTable.updated_at.substring(8, 10),
  //     getTime: this.joinTable.updated_at.substring(11, 16),

  //   }
  // },

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
