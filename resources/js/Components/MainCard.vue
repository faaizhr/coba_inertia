<template>
  <div class="border-b border-gray-300 pb-5 md:border-0">
    <div>
      <inertia-link :href="`/artikel/${id}`">
        <img class="rounded-2xl" :src="image"/>
      </inertia-link>
    </div>
    <div>
      <div class="flex justify-between mt-4">
        <p class="inline">Desember 14, 2020</p>
        <button class="text-white bg-green-500 px-4 py-1 rounded text-xs">{{ category }}</button>
      </div>
      <div class="mt-2">
        <inertia-link :href="`/artikel/${id}`">
          <h6 class="my-3 text-xl font-semibold">{{ title }}</h6>
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
  name: "MainCard",
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