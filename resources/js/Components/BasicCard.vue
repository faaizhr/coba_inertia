<template>
  <div class="mb-5">
    <div>
      <inertia-link href="/artikel/detail" class="">
        <img class="rounded" :src="image"/>
      </inertia-link>
    </div>
    <div class="pt-3">
      <div class="flex justify-end">
        <button class="text-white bg-green-500 px-4 py-1 rounded text-sm">{{ category }}</button>
      </div>
      <div class="mt-2">
        <inertia-link :href="`/artikel/${id}`" class="">
          <h6 class="my-3 text-lg font-semibold  text-white">{{ title }}</h6>
        </inertia-link>

        <h6 class="my-3 text-lg font-semibold  text-white">{{ id }}</h6>
        <inertia-link href="/artikel/detail" class="font-bold text-white text-sm md:text-base">
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
import { title } from 'process';

  export default {
    name: "BasicCard",
    components: {
      'inertia-link': Link,
    },

    props: [
      'id',
      'title',
      'content',
      'image',
      'category'
    ]
  }

</script>