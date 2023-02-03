<template>
    <div class="px-6 sm:px-8 md:px-8 xl:px-72">
      <div class="py-1 text-sm">
       <p><inertia-link to="/">Beranda </inertia-link>> <b>Artikel</b></p>
      </div>
      <inertia-link href="/detail" class="btn btn-md btn-primary">Detail</inertia-link>
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
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
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
    import SecondaryCard from '../../Components/SecondaryCard.vue'

  export default {

      //layout
      layout: LayoutApp,
      
      //register Link di component
      components: {
        'inertia-link': Link,
        MainCard,
        SecondaryCard,
        SmallCard
      },

      //props
      props: {
          posts: Array // <- nama props yang dibuat di controller saat parsing data
      },

       //define Composition Api
       setup() {
        //method deletePost
        function deletePost(id) {
            Inertia.delete(`/posts/${id}`)
        }
        return {
            deletePost
        }

      }
  }
</script>

<style>
    a {
        text-decoration: none;
        color: black;
    }
</style>