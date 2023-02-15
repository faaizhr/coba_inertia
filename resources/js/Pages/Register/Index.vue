<template>
  
  <div class="w-full h-screen bg-[#073231] pt-20">
    <div class="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 bg-custom mx-auto rounded-xl p-10">
      <h1 class="text-black text-5xl font-bold text-center mb-10">Register</h1>
      <form @submit.prevent="storeRegister">
        <div>
          <label for="nama" class="text-black font-medium mb-2 block">Nama</label>
          <input type="text" name="nama" id="nama" v-model="user.name" class="w-full h-10 px-5 border border-black bg-transparent rounded-lg placeholder:text-black placeholder:text-sm focus:outline-none" placeholder="Masukkan nama Anda"/>
        </div>
        <div class="mt-5">
          <label for="email" class="text-black font-medium mb-2 block">Email</label>
          <input type="email" name="email" id="email" v-model="user.email" class="w-full h-10 px-5 border border-black bg-transparent rounded-lg placeholder:text-black placeholder:text-sm focus:outline-none" placeholder="Masukkan alamat email"/>
        </div>
        <div class="mt-5">
          <label for="password" class="text-black font-medium mb-2 block">Password</label>
          <input type="password" name="password" id="password" v-model="user.password" class="w-full h-10 px-5 border border-black bg-transparent rounded-lg placeholder:text-black placeholder:text-sm focus:outline-none" placeholder="Masukkan password"/>
        </div>
        <div class="mt-5">
          <label for="password_confirmation" class="text-black font-medium mb-2 block">Password Confirmation</label>
          <input type="password" name="password_confirmation" id="password_confirmation" v-model="user.password_confirmation" class="w-full h-10 px-5 border border-black bg-transparent rounded-lg placeholder:text-black placeholder:text-sm focus:outline-none" placeholder="Konfirmasi password"/>
        </div>
        <button type="submit" class="border border-black px-10 py-2 rounded-xl bg-black text-white mt-10 block mx-auto">Register</button>
        <p class="text-center mt-3 ">Sudah punya akun? <inertia-link href="/login" class="font-semibold">Login</inertia-link></p>
      </form>
    </div>
  </div>
</template>

<script>
// import LayoutApp from '../../Layouts/App.vue'

import { reactive } from 'vue'
import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia'



export default {

  // layout: LayoutApp,
    
  components: {
    "inertia-link": Link,
  },

  setup() {
              
  //define state
    const user = reactive({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    });

    const storeRegister = () => {
      Inertia.post('/register', {
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation
      });
    }
    return {
      user,
      storeRegister
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