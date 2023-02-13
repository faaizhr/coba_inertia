<template>
  
      <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <div class="py-1 text-sm">
         <p><inertia-link to="/">Beranda </inertia-link>> <b>Artikel</b></p>
        </div>
        <div class="mb-20">
          <div class="my-10 grid grid-cols-1 md:grid-cols-2 mb-10 items-center">
            <h1 class="text-5xl font-bold text-center md:text-left mb-5 md:mb-0 text-[#073231]">Bacaan Untukmu</h1>
            <input type="text" placeholder="CARI..." class="rounded-xl px-4 max-w-none focus:outline-none md:max-w-xs h-10 border border-green-900 bg-transparent md:ml-auto placeholder:text-black"/>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="">
              <MainCard v-for="post in postsDESC.slice(0, 1)" 
                :key="post.id" 
                :item="post"
                :index="index"
              />
            </div>
            <div class="">
              <SmallCard
              v-for="post in postsDESC.slice(1, 4)" 
                :key="post.id" 
                :item="post"
                :index="index"/>
            </div>
          </div>
          
        </div>
      </div>
      <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 bg-black py-20 rounded-b-3xl">
        <div class="my-10 grid grid-cols-1 md:grid-cols-2 mb-10 items-center h-10 z-10">
          <h1 class="text-3xl text-center md:text-left mb-5 md:mb-0 font-bold inline text-white">Artikel Lainnya</h1>
          <div>
            <div @click="handleDropdown" class="rounded px-5 py-2 w-4/6 mx-auto md:mx-0 md:ml-auto text-white border border-white cursor-pointer  bg-black flex justify-between items-center">
              <p v-if="category == ''">All Category</p>
              <p v-else-if="category == 1" >Active Lifestyle</p>
              <p v-else-if="category == 2" >Cardiovascular</p>
              <p v-else-if="category == 3" >Diet Program</p>
              <p v-else-if="category == 4" >Healthy Eating</p>
              <p v-else-if="category == 5" >Mindfullness & Stress</p>
              <p v-else-if="category == 6" >Sleep</p>
              <p v-else-if="category == 7" >Weight Management</p>
              <font-awesome-icon class="whiteColorIcon" icon="fa-chevron-down" />
            </div>
          </div>
          <div></div>
          <div 
            class="border border-white text-white w-4/6 mx-auto static m-0 md:ml-auto md:mr-0 z-50"
            :style="{ display: dropDown ? 'block' : 'none' }">
            <ul> 
              <li class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700" @click="handleChangeCat('')">All Category</li>
              <li v-for="kategori in filter" class="px-5 py-2 cursor-pointer bg-black hover:bg-gray-700" @click="handleChangeCat(kategori.id)" >{{ kategori.category }}</li>
            </ul>
          </div>
        </div>
        <div v-if="category == ''">
          <div class="container grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 z-0">
            <BasicCard v-for="post in joinTable" 
            :key="post.id"
            :item="post"
            :index="index"
            />
          </div>
        </div>
        <div v-if="category != ''">
          <div v-for="post in filter.filter(cat => cat.id == category)" class="container grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 z-0">
            <div class="" v-for="pos in post.posts">
              <div class="mb-5">
                <div>
                  <inertia-link :href="`/artikel/${pos.id}`" class="">
                    <img class="rounded" :src="`storage/${pos.image}`"/>
                  </inertia-link>
                </div>
                <div class="pt-3">
                  <!-- <button v-if="post.category == 'Sleep'" class="bg-green-500 px-5 py-1 text-white">
                    {{ post.category }}
                  </button> -->
                  <div class="flex justify-end">
                    <button 
                      v-if="(post.category == 'Diet Program')"
                      class="text-white bg-green-500 px-4 py-1 rounded text-xs"  
                    >{{ post.category }}</button>
                    <button 
                      v-else-if="(post.category == 'Sleep')"
                      class="text-white bg-amber-700 px-4 py-1 rounded text-xs"  
                    >{{ post.category }}</button>
                    <button 
                      v-else-if="(post.category == 'Healthy Eating')"
                      class="text-white bg-teal-600 px-4 py-1 rounded text-xs"  
                    >{{ post.category }}</button>
                    <button 
                      v-else-if="(post.category == 'Mindfullness & Stress')"
                      class="text-white bg-orange-700 px-4 py-1 rounded text-xs"  
                    >{{ post.category }}</button>
                    <button 
                      v-else-if="(post.category == 'Weight Management')"
                      class="text-white bg-red-700 px-4 py-1 rounded text-xs"  
                    >{{ post.category }}</button>
                    <button v-else class="text-white">Unknown</button>
                  </div>
                  <div class="mt-2">
                    <inertia-link :href="`/artikel/${pos.id}`" class="">
                      <h6 class="my-3 text-lg font-semibold  text-white">{{ pos.title }}</h6>
                    </inertia-link>
                    <inertia-link :href="`/artikel/${pos.id}`" class="font-bold text-white text-sm underline underline-offset-1">
                      Selengkapnya
                      <font-awesome-icon icon="fa-arrow-right" class="ml-1"/>
                    </inertia-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <button class="bg-[#073231] text-white hover:bg-blend-darken px-10 py-2 rounded-lg ">Load More</button>
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
          category: Array, 
          joinTable: Array, 
          filter: Array,
      },
      
      data() {
          return {
          dropDown: false,
          category: '',

          };
      },
      methods: {
          handleDropdown() {
              if (this.dropDown == false) {
                  this.dropDown = true;
              } else if (this.dropDown == true) {
                  this.dropDown = false
              }
          },

          handleChangeCat(value) {
            this.category = value
            console.log("cek ceok", this.category)
          }
      },
  
  
    }
  </script>
  
  <style>
      a {
          text-decoration: none;
          color: black;
      }
  </style>