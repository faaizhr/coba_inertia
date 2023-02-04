<template>

<div class="card border-0 rounded shadow-sm">
          <div class="card-body">
              <table class="table">
                  <thead>
                      <tr>
                          <th scope="col">TITLE</th>
                          <th scope="col">CONTENT</th>
                          <th scope="col">CATEGORY</th>
                          <th scope="col">IMAGE</th>
                          <th scope="col">CREATED_AT</th>
                          <th scope="col">ACTIONS</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="post in posts" :key="post.id">
                          <td>{{ post.title }}haloo</td>
                          <td>{{ post.content }}</td>
                          <td>{{ post.category }}</td>
                          <td>{{ post.image }}</td>
                          <td>{{ post.created_at }}</td>
                          <td class="text-center">
                            <inertia-link :href="`/posts/${post.id}/edit`" class="btn btn-sm btn-primary me-2">EDIT</inertia-link>
                            <button @click.prevent="deletePost(`${post.id}`)" class="btn btn-sm btn-danger">DELETE</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>

      <!-- <button @click="cekconsole" class="w-52 h-10 bg-neutral-500">CEK CONSOLE LOG</button> -->
      <!-- <h1>{{ number.x }} + {{ number.y }} = {{ number.jumlah }} HALLOOOO</h1> -->

    <div class="px-6 sm:px-8 md:px-8 xl:px-72">
      <div class="py-1 text-sm">
       <p><inertia-link to="/">Beranda </inertia-link>> <b>Artikel</b></p>
      </div>
      <div class="mb-20">
        <div class="my-10 grid grid-cols-1 md:grid-cols-2 mb-10 items-center">
          <h1 class="text-3xl font-bold text-center md:text-left mb-5 md:mb-0">Bacaan Untukmu</h1>
          <input type="text" placeholder="CARI..." class="rounded-xl px-4 max-w-none focus:outline-none md:max-w-xs h-10 border border-green-900 bg-transparent md:ml-auto"/>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="">
            <MainCard/>
          </div>
          <div class="">
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
          </div>
        </div>
        
      </div>
    </div>
    <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-72 bg-black py-20 rounded-b-3xl">
      
      <div class="my-10 grid grid-cols-1 md:grid-cols-2 mb-10 items-center h-10 z-10">
        <h1 class="text-3xl text-center md:text-left mb-5 md:mb-0 font-bold inline text-white">Artikel Lainnya</h1>
        <div>
          <div @click="handleDropdown" class="rounded px-5 py-2 w-4/6 mx-auto md:mx-0 md:ml-auto text-white border border-white cursor-pointer  bg-black flex justify-between items-center">
            <p>Category</p>
            <font-awesome-icon class="whiteColorIcon" icon="fa-chevron-down" />
          </div>
        </div>
        <div></div>
        <div 
          class="border border-white text-white w-4/6 mx-auto static m-0 md:ml-auto md:mr-0 z-50"
          :style="{ display: dropDown ? 'block' : 'none' }">
          <ul> 
            <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700">Active Lifestyle</li>
            <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700">Cardiovascular</li>
            <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700">Diabetes</li>
            <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700">Diet Program</li>
            <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700">Healthy Eating</li>
          </ul>
        </div>
      </div>
      <div class="container grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 z-0">
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
      </div>
      <div class="flex justify-center mt-10">
        <button class="bg-white px-5 py-1 rounded-lg ">Load More</button>
      </div>
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
        posts: Array // <- nama props yang dibuat di controller saat parsing data
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
        setPokes(data) {
        this.pokemon = data;
        },
        handleDropdown() {
            if (this.dropDown == false) {
                this.dropDown = true;
            } else if (this.dropDown == true) {
                this.dropDown = false
            }
        },
    },

    // computed: {
    //   jumlah: function() {
    //     return this.number.x + this.number.y
    //   }
    // },

    setup() {
      function deletePost(id) {
        Inertia.delete(`/posts/${id}`)
      }
      return {
        deletePost
      }
    },
    log() {
      console.log("HAALOOO");
    }
  }
</script>

<style>
    a {
        text-decoration: none;
        color: black;
    }
</style>