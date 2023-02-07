<template>

  <div class="px-6 sm:px-8 md:px-8 xl:px-72 2xl:px-96">
    <div class="py-1 text-sm">
     <p><inertia-link to="/posts">Admin Panel </inertia-link>> Artikel > <b>{{ joinTable.title }}</b></p>
    </div>
    <div class="mb-20">
      <h1 class="text-3xl font-bold text-center md:text-left my-10">Detail Artikel</h1>
      <div class="w-full bg-white p-5 rounded-xl">
        <div class="mb-5">
          <h6 class="font-semibold text-xl">Judul Artikel</h6>
          <p>{{ joinTable.title }}</p>
        </div>
        <div class="mb-5">
          <h6 class="font-semibold text-xl">Isi Artikel</h6>
          <p>{{ joinTable.content }}</p>
        </div>
        <div class="mb-5">
          <h6 class="font-semibold text-xl">Kategori</h6>
          <p v-for="cat in joinTable.category">{{ cat.category }}</p>
        </div>
        <div class="mb-5">
          <h6 class="font-semibold text-xl">Ditulis Oleh</h6>
          <p>{{ joinTable.ditulis_oleh }}</p>
        </div>
        <div class="mb-5">
          <h6 class="font-semibold text-xl">Ditinjau Oleh</h6>
          <p>{{ joinTable.ditinjau_oleh }}</p>
        </div>
        <div class="mb-5">
          <h6 class="font-semibold text-xl">Cover</h6>
          <img :src="joinTable.image" class="w-full rounded-xl"/>
        </div>
        <div class="mb-5 text-sm">
          <p>Dibuat pada : {{ getMonthNameCreate }} {{ getDayCreate }}, {{ getYearCreate }} | {{ getTimeCreate }}</p>
          <p>Terakhir diupdate : {{ getMonthNameUpdate }} {{ getDayUpdate }}, {{ getYearUpdate }} | {{ getTimeUpdate }}</p>
        </div>

        <div>
          <inertia-link :href="`/posts/${joinTable.id}/edit`" class=""><button class="bg-black px-10 py-2 rounded-lg hover:bg-white mb-2 mr-5 text-white hover:text-black border border-black">EDIT</button></inertia-link>
          <button @click.prevent="deletePost(`${post.id}`)" class="bg-red-700 px-10 py-2 text-white hover:bg-white hover:text-red-700 border border-red-700 rounded-lg">DELETE</button>
        </div>
      </div>
      
    </div>
  </div>
  <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-72 bg-black py-20 rounded-b-3xl">
    
  </div>
</template>

<script>
  //import layout
  import LayoutApp from '../../Layouts/App.vue'

  //import Link dari inertia
  import { Link } from '@inertiajs/inertia-vue3';
  import { Inertia } from '@inertiajs/inertia'

export default {

  layout: LayoutApp,
    
  components: {
      'inertia-link': Link,
  },

  props: {
      posts: Array, // <- nama props yang dibuat di controller saat parsing data
      joinTable: Array
  },
  
  data() {
      return {
        getYearUpdate: this.joinTable.updated_at.substring(0, 4),
        getMonthUpdate: this.joinTable.updated_at.substring(5, 7),
        getDayUpdate: this.joinTable.updated_at.substring(8, 10),
        getTimeUpdate: this.joinTable.updated_at.substring(11, 16),

        getYearCreate: this.joinTable.created_at.substring(0, 4),
        getMonthCreate: this.joinTable.created_at.substring(5, 7),
        getDayCreate: this.joinTable.created_at.substring(8, 10),
        getTimeCreate: this.joinTable.created_at.substring(11, 16),
      };
  },

  computed: {

      getMonthNameUpdate: function() {
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
      },

      getMonthNameCreated: function() {
        if (this.getMonthCreated == "01") {
          return "Januari"
        } 
        else if(this.getMonthCreated == "02") {
          return "Februari"
        }
        else if(this.getMonthCreated == "03") {
          return "Maret"
        }
        else if(this.getMonthCreated == "04") {
          return "April"
        }
        else if(this.getMonthCreated == "05") {
          return "Mei"
        }
        else if(this.getMonthCreated == "06") {
          return "Juni"
        }
        else if(this.getMonthCreated == "07") {
          return "Juli"
        }
        else if(this.getMonthCreated == "08") {
          return "Agustus"
        }
        else if(this.getMonthCreated == "09") {
          return "September"
        }
        else if(this.getMonthCreated == "10") {
          return "Oktober"
        }
        else if(this.getMonthCreated == "11") {
          return "November"
        }
        else if(this.getMonthCreated == "12") {
          return "Desember"
        }
      }


    },
  methods: {

      handleDropdown() {
          if (this.dropDown == false) {
              this.dropDown = true;
          } else if (this.dropDown == true) {
              this.dropDown = false
          }
      },
  },

  setup() {
    function deletePost(id) {
      Inertia.delete(`/posts/${id}`)
    }
    return {
      deletePost
    }
  },
}
</script>

<style>
  a {
      text-decoration: none;
      color: black;
  }

  .backgroundColor {
    background-image: linear-gradient(to right, #fbf38f, #fff09a, #ffeea6, #ffecb2, #ffeabe, #ffe7c1, #ffe4c4, #ffe1c8, #ffdbc5, #ffd5c2, #ffd0c0, #fecabf);
  }
</style>