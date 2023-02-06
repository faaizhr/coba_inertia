<template>
  <div class="mb-5">
    <div>
      <inertia-link :href="`/artikel/${id}`" class="">
        <img class="rounded" :src="image"/>
      </inertia-link>
    </div>
    <div class="pt-3">
      <div class="flex justify-end">
        <button :v-if="container == 'Sleep'" class="text-white bg-green-500 px-4 py-1 rounded text-xs">{{ category }}</button>
      </div>
      <div class="mt-2">
        <inertia-link :href="`/artikel/${id}`" class="">
          <h6 class="my-3 text-lg font-semibold  text-white">{{ title }}</h6>
        </inertia-link>
        <inertia-link :href="`/artikel/${id}`" class="font-bold text-white text-sm underline underline-offset-1">
          Selengkapnya
          <font-awesome-icon icon="fa-arrow-right" class="ml-1"/>
        </inertia-link>
      </div>
    </div>
  </div>
</template>

<script>

import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  export default {
    name: "BasicCard",
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
    ],

    // data() {
    //   return {
    //     getColor: this.post.category
    //   }
    // },
    // computed: {
    //   getCatColor: function() {
    //     return this.getColor
    //   }
    // }
  }

</script>