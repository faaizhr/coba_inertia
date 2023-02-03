
<template>
  <div class="grid grid-cols-6 mb-4 border-b border-gray-300 md:border-0 pb-5">
    <div class="col-span-2">
      <img class="rounded w-5/6 h-4/6 sm:h-5/6 md:h-5/6 lg:h-full object-cover" src="https://media.discordapp.net/attachments/915505289174847510/1070955652391895091/shopping-concept-portrait-attractive-korean-girl-yellow-sweater-showing-promotion-offer-copy-space-pointing-looking-left-with-pleased-smile-blue-background_1.jpg?width=824&height=549"/>
    </div>
    <div class="col-span-4">
      <div class="">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <p class="text-sm md:text-base">Desember 14, 2020</p>
          <button class="text-white bg-green-500 px-4 py-1 rounded text-sm w-fit mt-2 md:mt-0" >Healthy Eating</button>
        </div>
        <h6 class="my-3 text-md md:text-xl font-semibold">Apa Itu Sugar Craving dan Cara Mengelolanya?</h6>
        <inertia-link href="/detail" class="font-semibold text-sm md:text-base text-gray-500">
          Selengkapnya
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-1"/>
        </inertia-link>
      </div>
    </div>
  </div>
</template>

<script>

import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia'

export default {
name: "SmallCard",
components: {
      'inertia-link': Link,
    },
}

</script>

<style></style>