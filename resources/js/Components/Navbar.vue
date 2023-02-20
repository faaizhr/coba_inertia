<template class="">
  <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96 mx-auto  sticky top-0 z-" id="navBar">
    <div class="flex justify-between items-center">
      <div class="">
        <img id="blackLogo" class="w-32" src="https://prodiadigital.com/assets/images/logo.svg"/>
        <img id="whiteLogo" class="w-24 hidden" src="https://prodiadigital.com/assets/images/logo-white.svg"/>
      </div>
      <div class=" w-full md:grid md:justify-items-end hidden">
        <div>
          <inertia-link class="mr-5 hover:border-b-2 border-orange-400 duration-200" href="/">Beranda</inertia-link>
          <inertia-link class="mr-5 hover:border-b-2 border-orange-400 duration-200" href="/bantuan">Bantuan</inertia-link>
          <inertia-link class="mr-5 hover:border-b-2 border-orange-400 duration-200" href="/tentang-kami">Tentang Kami</inertia-link>
          <inertia-link class="mr-5 hover:border-b-2 border-orange-400 duration-200" href="/artikel">Artikel</inertia-link>
          <inertia-link class="mr-5 hover:border-b-2 border-orange-400 duration-200" href="/fitur">Fitur</inertia-link>
          <inertia-link href="/posts" id="secButton">
            <button class="border border-[#073231] rounded-lg px-7 py-2 mr-3 ml-3 hover:bg-[#073231] hover:text-white">English</button>
          </inertia-link>
          <inertia-link href="/posts" id="mainButton">
            <button class="border border-[#073231] rounded-lg px-7 py-2 bg-[#073231] hover:bg-transparent text-white hover:text-black">Admin Site</button>
          </inertia-link>
        </div>
        <div>
        </div>
      </div>
      <div id="icon">
        <inertia-link href="/posts" id="mainButton">
          <button class="mr-10 bg-[#073231] hover:bg-transparent border border-black text-white hover:text-black px-5 py-2 rounded-lg text-sm font-medium md:hidden">Admin Site</button>
        </inertia-link>
        <font-awesome-icon icon="fa-solid fa-bars-staggered" class="fa-2xl cursor-pointer md:hidden" @click="handleToggleNavbar" />
      </div>
    </div>
  </div>


  <div class="collapses" :style="{ display: toggleNavbar ? 'block' : 'none' }">
    <div class="bg-black w-5/6 h-screen fixed top-0 right-0 p-10 rounded-l-3xl">
      <font-awesome-icon icon="fa-solid fa-xmark "  class="whiteColorIcon fa-2xl float-right cursor-pointer" @click="handleToggleNavbar"/>
      <ul class="mt-10">
        <li class="py-5">
          <inertia-link href="/posts">
            <button class="rounded-lg px-5 py-2 bg-white text-sm font-semibold">Admin Site</button>
          </inertia-link>
        </li>
        <li class="py-3"><inertia-link href="/" :class=" $page.url === '/' ? 'font-semibold text-white py-3' : 'text-white py-3'">Beranda</inertia-link></li>
        <li class="py-3"><inertia-link href="/bantuan" :class=" $page.url === '/bantuan' ? 'font-semibold text-white py-3' : 'text-white py-3'">Bantuan</inertia-link></li>
        <li class="py-3"><inertia-link href="/tentang-kami" :class=" $page.url === '/tentang-kami' ? 'font-semibold text-white py-3' : 'text-white py-3'">Tentang Kami</inertia-link></li>
        <li class="py-3"><inertia-link href="/artikel" :class=" $page.url === '/artikel' ? 'font-semibold text-white py-3' : 'text-white py-3'">Artikel</inertia-link></li>
        <li class="py-3"><inertia-link href="/fitur" :class=" $page.url === '/fitur' ? 'font-semibold text-white py-3' : 'text-white py-3'">Fitur</inertia-link></li>
        <li class="py-5">
          <button class="rounded-lg px-7 py-2 text-sm font-semibold bg-black text-white border border-white">English</button>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>

import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// ============== CHANGING CSS AFTER SCROLLING =========================== //

  let scrollNavbar;

    window.onscroll = () => {scrollNavbar()};

    scrollNavbar = () => {
        // Target elements
        const navBar = document.getElementById("navBar");
        const links = document.querySelectorAll("#navBar a");
        const mainButton = document.querySelectorAll("#mainButton button")
        const secButton = document.querySelectorAll("#secButton button")
        const icon = document.querySelectorAll("#icon")
        const blackLogo = document.querySelectorAll("#blackLogo")
        const whiteLogo = document.querySelectorAll("#whiteLogo")

        if (document.documentElement.scrollTop > 50) {
            navBar.classList.add("pa-fixed-header");

            // Change the color of links on scroll
            for (let i = 0; i < links.length; i++) {
                const element = links[i];
                element.classList.add('text-white');
                element.classList.remove('text-black');
            }
            for (let i = 0; i < secButton.length; i++) {
              const element = secButton[i];
              element.classList.add('bg-black');
              element.classList.add('text-white');
              element.classList.add('border-white');
              element.classList.add('hover:bg-white');
              element.classList.add('hover:text-black');
            }
            for (let i = 0; i < mainButton.length; i++) {
                const element = mainButton[i];
                element.classList.remove('hover:text-black');
                element.classList.remove('bg-[#073231]');
                element.classList.remove('border-[#073231]');
                element.classList.add('text-black');
                element.classList.add('bg-white');
                element.classList.add('border-white');
                element.classList.add('hover:bg-black');
                element.classList.add('hover:text-white');
            }
            for (let i = 0; i < icon.length; i++) {
                const element = icon[i];
                element.classList.add('whiteColorIcon');
            }
            for (let i = 0; i < blackLogo.length; i++) {
                const element = blackLogo[i];
                element.classList.add('hidden');
            }
            for (let i = 0; i < whiteLogo.length; i++) {
                const element = whiteLogo[i];
                element.classList.remove('hidden');
            }
            
        } else {
            navBar.classList.remove("pa-fixed-header");
            
            // Change the color of links back to default
            for (let i = 0; i < links.length; i++) {
                const element = links[i];
                element.classList.add('text-black');
                element.classList.remove('text-white');
            }
            for (let i = 0; i < secButton.length; i++) {
              const element = secButton[i];
                element.classList.remove('bg-black');
                element.classList.remove('text-white');
                element.classList.remove('border-white');
                element.classList.remove('hover:bg-white');
                element.classList.remove('hover:text-black');
            }
            for (let i = 0; i < mainButton.length; i++) {
                const element = mainButton[i];
                element.classList.add('hover:text-black');
                element.classList.add('bg-[#073231]');
                element.classList.add('border-[#073231]');
                element.classList.remove('text-black');
                element.classList.remove('bg-white');
                element.classList.remove('border-white');
                element.classList.remove('hover:bg-black');
                element.classList.remove('hover:text-white');
            }
            for (let i = 0; i < icon.length; i++) {
                const element = icon[i];
                element.classList.remove('whiteColorIcon');
            }
            for (let i = 0; i < blackLogo.length; i++) {
                const element = blackLogo[i];
                element.classList.remove('hidden');
            }
            for (let i = 0; i < whiteLogo.length; i++) {
                const element = whiteLogo[i];
                element.classList.add('hidden');
            }
        }
    }

//=============================================================//

// ========================== ACTIVE NAVBAR ==================//

// 

// ============================================================//

export default {
  name: "Navbar",
  components: {
    'inertia-link': Link,
    FontAwesomeIcon
  },
  data() {
    return {
      toggleNavbar: false
    };
  },
  methods: {
    handleToggleNavbar() {
      if (this.toggleNavbar == false) {
        this.toggleNavbar = true;
      } else if (this.toggleNavbar == true) {
        this.toggleNavbar = false
      }
    }
  },
}
</script>

<style>

  .collapses {
    transition: height 600ms cubic-bezier(0.3, 0, 0.6, 1);
  }

  .whiteColorIcon {
    color: white;
    fill: white;
  }

  .pa-fixed-header {
    background-color: #000000 !important;
    -webkit-transition: background-color 1s ease-out;
    -moz-transition: background-color 1s ease-out;
    -o-transition: background-color 1s ease-out;
    transition: background-color 0.2s ease-out;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

</style>