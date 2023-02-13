<template>
  
  <div class="">
    <div class="">
      <div class="mb-10 items-center px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <div class="py-1 text-sm mb-10">
          <p><inertia-link href="/">Beranda </inertia-link>> <b>Tentang Kami</b></p>
        </div>      
        <div class="grid grid-cols-1 md:grid-cols-2">
          <h1 class="text-5xl text-[#073231] font-bold leading-tight text-center md:text-left">Tentang Kami</h1>
          <input type="text" placeholder="CARI..." class="rounded-xl px-4 max-w-none focus:outline-none md:w-4/6 h-10 border border-green-900 bg-transparent md:ml-auto placeholder:text-black hidden md:block"/>
        </div>
      </div>
      <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <p class="mt-14 leading-loose text-center md:text-left">Cari tahu lebih lanjut tentang kami, your health and wellness companion.</p>
      </div>
      <div class="mt-20 px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 bg-black py-20 rounded-b-3xl">
        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block md:hidden">
            <img class="w-4/6 mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/rectangle-62-11112022-101631.png"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 py-14">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left">Prodia</h6>
            <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">Klinik laboratorium yang mengutamakan akurasi pemeriksaan medis untuk diagnosa yang lebih baik. Prodia melalui layanan yang diberikan, berambisi untuk bertranformasi menuju layanan kesehatan yang dapat diandalkan dan menjadi Center Of Excellence.</p>
          </div>
          <div class="col-span-2 hidden md:block">
            <img class="" src="https://prodiadigital.com/asset/uploads/meta/post/rectangle-62-11112022-101631.png"/>
          </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block">
            <img class="w-4/6 mx-auto md:w-full md:m-0" src="https://prodiadigital.com/storage/meta/post/u-by-prodia-logogram-only-1-11112022-101800.svg"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 py-14">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left leading-loose">Your Personal Health & Wellness Companion</h6>
            <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">U by Prodia merupakan pendamping kesehatan yang Kamu butuhkan. Kami memberikanmu program kesehatan agar Kamu dapat memiliki hidup yang lebih sehat dan berkualitas.</p>
          </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block md:hidden">
            <img class="w-4/6 mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/visi-misi-12122022-125136.jpg"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 py-14">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left">Visi & Misi</h6>
            <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">Visi : Menjadi One Stop Healthcare Solution yang didukung dengan ilmu pengetahuan dan teknologi<br/>
            Misi : Membantu individu mencapai kesehatan personal mereka</p>
          </div>
          <div class="col-span-2 hidden md:block">
            <img class="rounded-xl" src="https://prodiadigital.com/asset/uploads/meta/post/visi-misi-12122022-125136.jpg"/>
          </div>
        </div>
      </div>

      
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
import BasicCard from '../../Components/BasicCard.vue';
import BasicCardHome from '../../Components/BasicCardHome.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//import coreui componenet
// import '@coreui/coreui/dist/css/coreui.min.css'
import { CAccordion } from '@coreui/vue';
import { CAccordionItem } from '@coreui/vue';
import { CAccordionHeader } from '@coreui/vue';
import { CAccordionBody } from '@coreui/vue';





export default {

  layout: LayoutApp,
    
  components: {
    "inertia-link": Link,
    BasicCard,
    BasicCardHome,
    FontAwesomeIcon,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
},

  props: {
      postsDESC: Array,
  },
  

}
</script>

<style>
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

  .bg-bantuan {
    background: linear-gradient(288.51deg, #FDC8BE 0.41%, #FCF6A4 77.28%);
  }


</style>