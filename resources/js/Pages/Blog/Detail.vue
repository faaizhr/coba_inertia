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
      post: Object,
      posts: Array
    },

    data() {
      return {
        getYear: this.post.updated_at.substring(0, 4),
        getMonth: this.post.updated_at.substring(5, 7),
        getDay: this.post.updated_at.substring(8, 10),
        getTime: this.post.updated_at.substring(11, 16),

      }
    },

    computed: {
      getMonthName: function() {
        if (this.getMonth == "01") {
          return "Januari"
        } 
        else if(this.getMonth == "02") {
          return "Februari"
        }
        else if(this.getMonth == "03") {
          return "Maret"
        }
        else if(this.getMonth == "04") {
          return "April"
        }
        else if(this.getMonth == "05") {
          return "Mei"
        }
        else if(this.getMonth == "06") {
          return "Juni"
        }
        else if(this.getMonth == "07") {
          return "Juli"
        }
        else if(this.getMonth == "08") {
          return "Agustus"
        }
        else if(this.getMonth == "09") {
          return "September"
        }
        else if(this.getMonth == "10") {
          return "Oktober"
        }
        else if(this.getMonth == "11") {
          return "November"
        }
        else if(this.getMonth == "12") {
          return "Desember"
        }
      }
    }
      
      
  }

</script>

<template>
    <div class=" px-6 sm:px-8 md:px-8 xl:px-72 2xl:px-96 mx-auto py-1 text-sm">
     <p><inertia-link href="/posts">Beranda </inertia-link>> <b>Artikel</b> > <b>{{ post.title }}</b></p>
    </div>
    <div class="px-6 sm:px-8 md:px-8 xl:px-72 2xl:px-96 mx-auto my-20 grid grid-cols-1 md:grid-cols-9">

      <div class="col-span-2 hidden md:block sticky ">
        <div class="sticky top-10">
          <p class="mb-3">Share:</p>
          <div>
            <div class="w-10 h-10 border border-black rounded-full px-2 py-2 mb-3">
              <font-awesome-icon icon="fa-link"/>
            </div>
            <div class="w-10 h-10 border border-black rounded-full px-3 py-2 mb-3">
              <font-awesome-icon icon="fa-brands fa-facebook"/>
            </div>
            <div class="w-10 h-10 border border-black rounded-full px-3 py-2 mb-3">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </div>
            <div class="w-10 h-10 border border-black rounded-full px-3 py-2 mb-3">
              <font-awesome-icon icon="fa-brands fa-whatsapp"/>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-7">

      <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="border-b md:border-b-0 md:border-r border-black pb-4">
            <h6>Ditulis oleh:</h6>
            <p>{{ post.ditulis_oleh }}</p>
          </div>
          <div class="col-span-2 md:ml-10 pt-4 md:pt-0">
            <h6>Ditinjau oleh:</h6>
            <p>{{ post.ditinjau_oleh }}</p>
          </div>
      </div>

      <div class="mt-10">
        <p class="block md:inline">Terakhir Update, {{ getMonthName }} {{ getDay }}, {{ getYear }} {{ getTime }}</p>
        <button class="text-white bg-green-500 px-4 py-1 rounded ml-0 mt-3 md:mt-0 md:ml-4">{{ post.category }}</button>
      </div>
      <div>
        <h1 class="mt-10 font-bold text-4xl leading-normal">{{ post.title }}</h1>
        <div class="mt-10 flex justify-between">
          <p class="text-sm">Durasi membaca: 3,996 menit</p>
          <div class="flex items-center">
            <font-awesome-icon icon="fa-eye"/>
            <p class="ml-3">76</p>
          </div>
        </div>
        <img class="rounded-xl mt-5 w-full" :src="post.image"/>
      </div>
      <div class="mt-10">
        <p>{{ post.content }}</p>
      </div>
    </div>
  </div>
    <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-72 2xl:px-96 bg-black py-20 rounded-b-3xl">
      <h1 class="text-3xl font-bold inline text-white">Artikel Lainnya</h1>
      <div class="container grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 z-0">
        <BasicCard v-for="post in posts" 
          :key="post.id"
          :id="post.id"  
          :title="post.title" 
          :content="post.content" 
          :image="post.image" 
          :category="post.category" 
          :ditulis_oleh="post.ditulis_oleh" 
          :ditinjau_oleh="post.ditinjau_oleh" 
          :index="index"
        />
      </div>
    </div>
</template>


<style>
  /* @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  * {
    font-family: "Poppins", sans-serif;
  }

  .backgroundColor {
    background-image: linear-gradient(to right, #fbf38f, #fff09a, #ffeea6, #ffecb2, #ffeabe, #ffe7c1, #ffe4c4, #ffe1c8, #ffdbc5, #ffd5c2, #ffd0c0, #fecabf);
  } */
</style>
