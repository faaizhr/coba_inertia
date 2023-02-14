<template>
  
  <div class="">
    <div class="">
      <div class="mb-10 items-center px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <div class="py-1 text-sm mb-10">
          <p><inertia-link href="/">Beranda </inertia-link>> <b>Bantuan</b></p>
        </div>      
        <div class="grid grid-cols-1 md:grid-cols-2">
          <h1 class="text-5xl text-[#073231] font-bold leading-tight text-center md:text-left">Bantuan</h1>
          <input type="text" placeholder="CARI..." class="rounded-xl px-4 max-w-none focus:outline-none md:w-4/6 h-10 border border-green-900 bg-transparent md:ml-auto placeholder:text-black hidden md:block"/>
        </div>
      </div>
      <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <p class="mt-14 leading-loose">Apakah Kamu membutuhkan bantuan terkait fitur dan layanan kami? Dapatkan bantuan pada panduan berikut.</p>
      </div>
      <div class="mt-20 px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 bg-white py-20">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="col-span-1">
            <div>
              <h5 class="text-5xl font-bold mb-5">FAQ</h5>
              <h6 class="text-xl font-semibold mb-10">Kategori</h6>
              <div v-for="(question, index) in questions" :key="question.title" class="mb-7">
                <div @click="() => handleAccordion(index)" class="font-semibold text-lg cursor-pointer flex justify-between">
                  <p :class="question.isExpanded == true ? 'text-orange-400' : 'text-black'">{{ question.title }}</p>
                  <font-awesome-icon icon="fa-chevron-down" :class="question.isExpanded == true ? 'orangeColorIcon' : 'blackColorIcon'"/>
                </div>
                <Collapse :when="questions[index].isExpanded" class="collapses">
                  <div class="w-full mt-5">
                    <div v-for="body in question.contents">
                      <p class="mt-2">{{ body.subtitle }}</p>
                    </div>
                  </div>
                </Collapse>
                <hr v-if="question.isExpanded == true" class=" border-orange-400 mt-5"/>
              </div>
            </div>
          </div>
          <div class="col-span-2">

          </div>
        </div>
        <div class="bg-bantuan w-full rounded-xl mt-28 p-10 grid grid-cols-1 md:grid-cols-4">
          <div class="col-span-1 md:col-span-3">
            <h6 class="text-2xl md:text-4xl font-bold leading-snug">Selalu terdapat beberapa pertanyaan yang belum terjawab. Kamu dapat menghubungi kami dengan mudah.</h6>
          </div>
          <div class="col-span-1 md:col-span-1 flex md:items-center md:justify-end justify-center mt-10 md:mt-0">
            <button class="text-white text-base font-semibold px-7 py-2 bg-[#073231] rounded-lg">Hubungi Kami</button>
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


import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'

export default {

layout: LayoutApp,
  
components: {
  "inertia-link": Link,
  BasicCard,
  BasicCardHome,
  FontAwesomeIcon,
  Collapse
},

props: {
    postsDESC: Array,
},

methods: {
  handleAccordion(selectedIndex) {
      questions.forEach((_, index) => {
        questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
      })
    }
},

setup() {
  const questions = reactive([
    {
      title: 'Health Score',
      contents: [
        {
          subtitle: 'Gambaran Umum',
          link: ''
        },
        {
          subtitle: 'Informasi Produk',
          link: ''
        },
        {
          subtitle: 'Permasalahan Teknis',
          link: ''
        },
      ],
      isExpanded: true
    },
    {
      title: 'Health Shop',
      contents: [
        {
          subtitle: 'Gambaran Umum',
          link: ''
        },
        {
          subtitle: 'Pembelian',
          link: ''
        },
        {
          subtitle: 'Pembayaran',
          link: ''
        },
        {
          subtitle: 'Pengembalian Dana & Pengiriman Ulang',
          link: ''
        },
      ],
      isExpanded: false
    },
    {
      title: 'Home Service',
      contents: [
        {
          subtitle: 'Informasi',
          link: ''
        },
        {
          subtitle: 'Proses Layanan',
          link: ''
        },
        {
          subtitle: 'Penjadwalan Ulang',
          link: ''
        },
        {
          subtitle: 'Penilaian',
          link: ''
        },
      ],
      isExpanded: false
    },
    {
      title: 'Informasi Data Diri',
      contents: [
        {
          subtitle: 'Informasi',
          link: ''
        },
      ],
      isExpanded: false
    }
  ])

  function handleAccordion(selectedIndex) {
    questions.forEach((_, index) => {
      questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
    })
    console.log(questions)
  }

  return {
    questions,
    handleAccordion
  }
}


}

</script>

<style>

  .collapses {
    transition: height 600ms cubic-bezier(0.3, 0, 0.6, 1);
  }

  a {
      text-decoration: none;
      color: black;
  }

  .whiteColorIcon {
    color: white;
    fill: white;
  }
  .orangeColorIcon {
    color: rgb(251 146 60);
    fill: rgb(251 146 60);
  }
  .blackColorIcon {
    color: black;
    fill: black;
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