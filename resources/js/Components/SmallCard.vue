
<template>
  <div class="grid grid-cols-6 mb-4 border-b border-gray-300 md:border-0 pb-5">
    <div class="col-span-2">
      <inertia-link :href="`/artikel/${id}`">
        <img class="rounded-2xl w-5/6 h-4/6 sm:h-5/6 md:h-5/6 lg:h-full object-cover" :src="image"/>
      </inertia-link>
    </div>
    <div class="col-span-4">
      <div class="">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <p class="text-sm md:text-base">Desember 14, 2020</p>
          <button class="text-white bg-green-500 px-4 py-1 rounded text-xs h-fit w-fit mt-2 md:mt-0 mr-0 ml-0 md:ml-auto md:mr-0" >{{ category }}</button>
        </div>
        <inertia-link :href="`/artikel/${id}`">
          <h6 class="my-3 text-md md:text-xl font-semibold">{{ title }}</h6>
        </inertia-link>
        <inertia-link :href="`/artikel/${id}`" class="font-semibold text-sm text-gray-800 underline underline-offset-1">
          Selengkapnya
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-1"/>
        </inertia-link>
      </div>
    </div>
  </div>
</template>

<script>

import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "SmallCard",
  components: {
      'inertia-link': Link,
      FontAwesomeIcon
    },

    props: [
      'id',
      'title',
      'content',
      'image',
      'category',
      'ditulis_oleh',
      'ditinjau_oleh'
    ]


}

</script>

<style></style>