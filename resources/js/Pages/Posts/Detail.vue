<script>

  import LayoutApp from '../../Layouts/App.vue'

  import { Link } from '@inertiajs/inertia-vue3';
  import { Inertia } from '@inertiajs/inertia'

  import SecondaryCard from '../../components/SecondaryCard.vue'

  export default {
    layout: LayoutApp,
    components: {
        'inertia-link': Link,
        SecondaryCard,
      },
  }

</script>

<template>
    <div class=" px-6 sm:px-8 md:px-8 xl:px-72 mx-auto py-1 text-sm">
     <p><inertia-link href="/posts">Beranda </inertia-link>> <b>Artikel</b> > <b>Apa Itu Sugar Craving dan Cara Mengelolanya?</b></p>
    </div>
    <div class="px-6 sm:px-8 md:px-8 xl:px-72 mx-auto my-20 grid grid-cols-1 md:grid-cols-9">

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
            <p>Jeliana Seliatuw</p>
          </div>
          <div class="col-span-2 md:ml-10 pt-4 md:pt-0">
            <h6>Ditinjau oleh:</h6>
            <p>Siska Darmayanti, S.Si, M.Farm</p>
          </div>
        </div>

        <div class="mt-10">
          <p class="block md:inline">Terakhir Update, January 31, 2023 09:16 am</p>
          <button class="text-white bg-green-500 px-4 py-1 rounded ml-0 mt-3 md:mt-0 md:ml-4">Healthy Eating</button>
        </div>
        <div>
          <h1 class="mt-10 font-bold text-4xl leading-normal">Apa Itu Sugar Craving dan Cara Mengelolanya?</h1>
          <div class="mt-10 flex justify-between">
            <p class="text-sm">Durasi membaca: 3,996 menit</p>
            <div class="flex items-center">
              <font-awesome-icon icon="fa-eye"/>
              <p class="ml-3">76</p>
            </div>
          </div>
          <img class="rounded-xl mt-5" src="https://media.discordapp.net/attachments/915505289174847510/1070955652391895091/shopping-concept-portrait-attractive-korean-girl-yellow-sweater-showing-promotion-offer-copy-space-pointing-looking-left-with-pleased-smile-blue-background_1.jpg?width=824&height=549"/>
        </div>
        <div class="">
          <p class="mt-5">Salah satu alasan mengapa penting untuk mengenal apa itu sugar craving adalah, fakta bahwa kondisi ini dapat memicu meningkatnya risiko obesitas dan masalah kesehatan lainnya. 
        <br/><br/>
        Sebuah kajian yang dimuat dalam jurnal ​Obesity Facts menyebutkan bahwa mengonsumsi yang manis-manis dapat berkontribusi pada peningkatan berat badan. Ini dapat terjadi pada anak-anak maupun orang dewasa. 
        <br/><br/>
        Menurut data dari ​Statista di tahun 2021, konsumsi gula di Indonesia adalah 27,5 kg per kapita. Jumlah ini disebutkan akan terus naik. Sementara itu, data dari ​Riset Kesehatan Dasar (Riskesdas) 2018 juga menunjukkan ada peningkatan kasus obesitas dari 14,8% (2013), menjadi 21,8% (2018). 
      </p>
      <h6 class="text-lg font-bold my-4">Apa Itu Sugar Craving?</h6>
      <p>
          Ringkasnya, sugar craving dapat diartikan sebagai kondisi di mana kamu merasa ​ngidam atau ingin makan/minum yang manis-manis. Adapun dorongan untuk mengonsumsi makanan dan minuman manis ini bisa muncul kapan saja. 
          <br/><br/>
          Kondisi ini juga tidak hanya terjadi karena kamu sedang lapar. Ngidam manis bahkan bisa muncul beberapa saat setelah kamu baru saja selesai makan besar.  
          <br/><br/>
          Dorongan untuk mengonsumsi sesuatu yang manis jika muncul sesekali masih bisa dianggap wajar. Namun, apabila kamu mengalami kondisi ini cukup sering, maka kamu perlu tahu apa penyebab serta cara terbaik untuk mengelolanya. 
        </p>
      </div>
    </div>
  </div>
    <div class="mx-auto px-6 sm:px-8 md:px-8 xl:px-72 bg-black py-20 rounded-b-3xl">
      <h1 class="text-3xl font-bold inline text-white">Artikel Lainnya</h1>
      <div class="container grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 z-0">
        <SecondaryCard/>
        <SecondaryCard/>
        <SecondaryCard/>
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
