<template>
  
  <div class="w-full h-screen bg-[#073231] pt-20">
    <div class="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 bg-custom mx-auto rounded-xl p-10">

      <inertia-link href="/">
        <font-awesome-icon icon="fa-chevron-left" class=""/>
      </inertia-link>

      <h1 class="text-black text-5xl font-bold text-center mb-10 mt-5">Login</h1>

      <div v-if="$page.props.flash.message" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-5" role="alert">
        <strong class="font-bold">Success! </strong>
        <span class="block sm:inline">{{$page.props.flash.message}}</span>
      </div>
      
      <!-- <p class="text-xl text-emerald-600 font-semibold">{{ $page.props.flash.message }}</p> -->
      <form @submit.prevent="storeLogin">
        <div>
          <label for="email" class="text-black font-medium mb-2 block">Email</label>
          <input type="email" name="email" v-model="user.email" class="w-full h-10 px-5 border border-black bg-transparent rounded-lg placeholder:text-black placeholder:text-sm focus:outline-none" placeholder="Masukkan alamat email"/>
          <p class="text-sm text-red-600">{{ errors.email }}</p>
        </div>
        <div class="mt-5">
          <label for="password" class="text-black font-medium mb-2 block">Password</label>
          <input type="password" name="password" v-model="user.password" class="w-full h-10 px-5 border border-black bg-transparent rounded-lg placeholder:text-black placeholder:text-sm focus:outline-none" placeholder="Masukkan password"/>
          <p class="text-sm text-red-600">{{ errors.password }}</p>
        </div>
        <button type="submit" class="border border-black px-10 py-2 rounded-xl bg-black text-white mt-10 block mx-auto">Login</button>
        <p class="text-center mt-3 ">Belum punya akun? <inertia-link href="/register" class="font-semibold">Registrasi</inertia-link></p>
      </form>
    </div>
  </div>
</template>

<script>
// import LayoutApp from '../../Layouts/App.vue'

import { reactive } from 'vue'
import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



export default {

  // layout: LayoutApp,
    
  components: {
    "inertia-link": Link,
    FontAwesomeIcon
    
  },

  props: {
    errors: Object
  },

  setup() {

    const user = reactive({
        email: '',
        password: '',
    });

    const storeLogin = () => {
      Inertia.post('/login', {
        email: user.email,
        password: user.password,
      });
    }

    return {
        user,
        storeLogin
    }
  }

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