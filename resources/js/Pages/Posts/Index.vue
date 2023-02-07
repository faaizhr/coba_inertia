<template>

    <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
      <div class="py-1 text-sm">
       <p><inertia-link to="/posts">Admin Panel </inertia-link>> <b>Artikel</b></p>
      </div>
      <div class="mb-20">
        <div class="my-10 grid grid-cols-1 md:grid-cols-2 mb-10 items-center">
          <h1 class="text-3xl font-bold text-center md:text-left mb-5 md:mb-0">Kelola Artikel</h1>
          <inertia-link href="/posts/create" class="mx-auto md:ml-auto md:mr-0"><button class="bg-black text-white w-fit py-2 px-10 rounded-xl  hover:bg-white hover:text-black duration-200 text-lg font-semibold">Tambah Artikel</button></inertia-link>
        </div>

        <div class="">
          <div class="">
            <table class="bg-white rounded-2xl min-w-full">
              <thead class="bg-black rounded-3xl">
                <tr class="">
                  <th class="py-3 text-white">IMAGE</th>
                  <th class="py-3 text-white">TITLE</th>
                  <th class="py-3 text-white">CONTENT</th>
                  <th class="py-3 text-white">CATEGORY</th>
                  <th class="py-3 text-white">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="post in joinTable" :key="post.id" class="hover:bg-slate-100">
                  <td class="py-2 px-2"><img :src="post.image"/>
                    <inertia-link :href="`/posts/${post.id}`">
                    </inertia-link>
                  </td>
                  <td class="py-2 px-2">
                    <inertia-link :href="`/posts/${post.id}`" class="font-medium">
                      {{ post.title }}
                    </inertia-link>
                  </td>
                  <td class="py-2 px-2">{{ post.content.substring(0, 90) }}....</td>
                  <td class="py-2 px-2">
                    <p v-for="cat in post.category" class="mb-3">
                      {{ cat.category }}
                    </p>
                  </td>
                  <td class="py-2 px-2 text-center">
                    <inertia-link :href="`/posts/${post.id}/edit`" class=""><button class="bg-black px-5 py-1 rounded-xl hover:bg-white mb-2 text-white hover:text-black">EDIT</button></inertia-link>
                    <button @click.prevent="deletePost(`${post.id}`)" class="bg-red-700 px-5 py-1 text-white rounded-xl">DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table>
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

  //import component
  import MainCard from '../../Components/MainCard.vue';
  import SmallCard from '../../Components/SmallCard.vue'
  import BasicCard from '../../Components/BasicCard.vue';
  // import SecondaryCard from '../../Components/SecondaryCard.vue';

  

  export default {

    layout: LayoutApp,
      
    components: {
        'inertia-link': Link,
        MainCard,
        SmallCard,
        BasicCard
        // SecondaryCard
    },

    props: {
        posts: Array, // <- nama props yang dibuat di controller saat parsing data
        joinTable: Array
    },
    
    data() {
        return {
        dropDown: false,
        // number: [
        //   x = 1,
        //   y = 2,
        //   jumlah = null
        // ]
        };
    },
    methods: {
        setPokes() {
          console.log()
        },
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