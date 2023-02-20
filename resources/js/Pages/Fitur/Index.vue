<template>
  
  <div class="">
    <div class="">
      <div class="mb-10 items-center px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <div class="py-1 text-sm mb-10">
          <p><inertia-link href="/">Beranda </inertia-link>> <b>Fitur</b></p>
        </div>  

        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 items-center mb-20 h-28 md:h-10 z-20">
            <h1 class="text-5xl font-bold text-center md:text-left mb-5 md:mb-0 text-[#073231]">Fitur</h1>
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
      <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
        <p class="mt-14 leading-loose text-center md:text-left">Fitur dan layanan yang tersedia untuk mendukung kesehatan Kamu.</p>
        <div class="flex justify-center md:justify-start flex-wrap gap-6 mt-10 ">
          <a href="https://play.google.com/store/apps/details?id=com.prodiadigital.patient" target="_blank">
            <img class="w-72 rounded-xl" src="https://media.discordapp.net/attachments/915505289174847510/1073553106165575740/Untitled-1.png?width=875&height=262"/>
          </a>
          <a href="https://apps.apple.com/id/app/u-by-prodia/id6443986153" target="_blank">
            <img class="w-72 rounded-xl" src="https://media.discordapp.net/attachments/915505289174847510/1073553105951662170/Untitled-2.png?width=875&height=263"/>
          </a>
        </div>
      </div>


      <div class="mt-20 px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 bg-black py-20 rounded-b-3xl">


        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block md:hidden bg-radial-small">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left block md:hidden">Health Score</h6>
            <img class="w-1/3 md:w-auto mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-11112022-113720.png"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 grid items-center">
            <div>
              <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left hidden md:block">Health Score</h6>
              <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">Pahami langkah untuk menjaga kesehatan dirimu dengan mengambil penilaian Health Score.</p>

              <div v-for="(question, index) in questions" :key="question.title" class="mb-7 mt-7">
                <div @click="() => handleAccordion(index)" class="font-semibold text-lg cursor-pointer flex justify-between">
                  <p :class="question.isExpanded == true ? 'text-orange-400' : 'text-white'">{{ question.title }}</p>
                  <div :class="question.isExpanded == true ? 'border border-orange-400 p-custom rounded-full' : 'border border-white p-custom rounded-full'">
                    <font-awesome-icon v-if="question.isExpanded == false" icon="fa-plus" class="whiteColorIcon "/>
                    <font-awesome-icon v-else icon="fa-minus" class="orangeColorIcon"/>
                  </div>
                </div>
                <Collapse :when="questions[index].isExpanded" class="collapses">
                  <div class="w-full mt-5">
                    <p class="text-white">{{question.contents}}</p>
                  </div>
                </Collapse>
                <hr :class="question.isExpanded == true ? 'border-orange-400 mt-5' : 'border-white mt-5'"/>
              </div>

            </div>
          </div>
          <div class="col-span-2 hidden md:block bg-radial-small">
            <img class="mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-11112022-113720.png"/>
          </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block bg-radial-small">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left block md:hidden">Pemeriksaan Lab</h6>
            <img class="w-1/3 md:w-auto mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-1-11112022-113855.png"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 grid items-center">
            <div>
              <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left leading-loose hidden md:block">Pemeriksaan Lab​</h6>
              <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">Pesan pemeriksaan lab, seperti check up jantung, cek diabetes, atau cek gula darah di cabang Prodia terdekat. Seluruh hasil lab akan dikirimkan langsung di aplikasi.</p>
            </div>
          </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block md:hidden bg-radial-small">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left block md:hidden">Home Service</h6>
            <img class="w-1/3 mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-2-11112022-113923.png"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 grid items-center">
            <div>
              <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left hidden md:block">Home Service</h6>
              <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">Lakukan pemeriksaan lab dari rumah! Cukup pesan tes dan kami akan datang untuk pengambilan sampel​.</p>
            </div>
          </div>
          <div class="col-span-2 hidden md:block bg-radial-small">
            <img class="mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-2-11112022-113923.png"/>
          </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block bg-radial-small">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left block md:hidden">Konsultasi Kesehatan</h6>
            <img class="mx-auto w-1/3 md:w-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-3-11112022-113937.png"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 grid items-center">
            <div>
              <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left leading-loose hidden md:block">Konsultasi Kesehatan​</h6>
              <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">Layanan ini akan segera hadir untukmu, nantikan fitur terbaru kami.</p>
            </div>
          </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block md:hidden bg-radial-small">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left block md:hidden">Vaksinasi</h6>
            <img class="w-1/3 mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-4-11112022-114032.png"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 grid items-center">
            <div>
              <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left hidden md:block">Vaksinasi</h6>
              <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">Layanan ini akan segera hadir untukmu, nantikan fitur terbaru kami.</p>
            </div>
          </div>
          <div class="col-span-2 hidden md:block bg-radial-small">
            <img class="mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-4-11112022-114032.png"/>
          </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block bg-radial-small">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left block md:hidden">Health Shop</h6>
            <img class="mx-auto w-1/3 md:w-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-5-2-11112022-114019.png"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 grid items-center">
            <div>
              <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left leading-loose hidden md:block">Health Shop​</h6>
              <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">Layanan ini akan segera hadir untukmu, nantikan fitur terbaru kami.</p>
            </div>
          </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block md:hidden bg-radial-small">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left block md:hidden">Program Kesehatan Personal</h6>
            <img class="w-1/3 mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-6-11112022-114059.png"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 grid items-center">
            <div>
              <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left hidden md:block">Program Kesehatan Personal</h6>
              <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">Layanan ini akan segera hadir untukmu, nantikan fitur terbaru kami.</p>
            </div>
          </div>
          <div class="col-span-2 hidden md:block bg-radial-small">
            <img class="mx-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-6-11112022-114059.png"/>
          </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-5 mb-16">
          <div class="col-span-2 block bg-radial-small">
            <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left block md:hidden">Tantangan Hidup Sehat</h6>
            <img class="mx-auto w-1/3 md:w-auto" src="https://prodiadigital.com/asset/uploads/meta/post/screen-shot-2022-10-03-at-14-50-1-6-11112022-114059.png"/>
          </div>
          <div class="col-span-3 mt-10 md:mt-0 grid items-center">
            <div>
              <h6 class="text-3xl md:text-5xl font-bold text-white mb-5 text-center md:text-left leading-loose hidden md:block">Tantangan Hidup Sehat​</h6>
              <p class="text-lg text-white leading-loose w-full md:w-5/6 text-center md:text-left">Layanan ini akan segera hadir untukmu, nantikan fitur terbaru kami.</p>
            </div>
          </div>
        </div>


        <div class="bg-bantuan w-full rounded-xl mt-28 p-10 grid grid-cols-1 md:grid-cols-4">
          <div class="col-span-1 md:col-span-3">
            <h6 class="text-2xl md:text-4xl font-bold leading-snug">Apakah Kamu memiliki pertanyaan atau membutuhkan bantuan?</h6>
            <p class="mt-5">Kami ada untukmu</p>
          </div>
          <div class="col-span-1 md:col-span-1 flex md:items-center md:justify-end justify-center mt-10 md:mt-0">
            <button class="text-white text-base font-semibold px-7 py-2 bg-[#073231] rounded-lg">Bantuan</button>
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
import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'

//import component
import BasicCard from '../../Components/BasicCard.vue';
import BasicCardHome from '../../Components/BasicCardHome.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';





export default {

  layout: LayoutApp,
    
  components: {
    "inertia-link": Link,
    FontAwesomeIcon,
    Collapse
  },

  props: {
    joinTable: Array,
  },

  data() {
    return {
      searchbar: '',  
    };
  },

  methods: {
    handleAccordion(selectedIndex) {
      questions.forEach((_, index) => {
        questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
      })
    },
    handleChangeSearch(e) {
      this.searchbar = e.target.value.toLowerCase()
      console.log(this.searchbar)
    }
  },

  setup() {
    const questions = reactive([
      {
        title: 'Penilaian Risiko Penyakit',
        contents: 'Lakukan penilaian risiko penyakit untuk membantumu memahami risiko jangka panjang terkait penyakit jantung, diabetes, hipertensi, hati dan ginjal.',
        isExpanded: false
      },
      {
        title: 'Penilaian Gaya Hidup',
        contents: 'Layanan ini akan segera hadir untukmu, nantikan fitur terbaru kami.',
        isExpanded: false
      },
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

  .p-custom {
    padding: 1px 6px 0px 6px;
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

  .bg-radial-small {
    background: radial-gradient(52.31% 50% at 50% 50%, rgba(87, 74, 27, 0.64) 3.88%, rgba(77, 57, 21, 0.616008) 4.72%, rgba(177, 151, 80, 0.851788) 6.4%, #000000 100%);
  }

  .bg-bantuan {
    background: linear-gradient(288.51deg, #FDC8BE 0.41%, #FCF6A4 77.28%);
  }


</style>