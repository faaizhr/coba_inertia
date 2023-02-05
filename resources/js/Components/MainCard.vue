<template>
  <div class="border-b border-gray-300 pb-5 md:border-0">
    <div>
      <img class="rounded" :src="image"/>
    </div>
    <div>
      <div class="flex justify-between mt-4">
        <p class="inline">Desember 14, 2020</p>
        <button class="text-white bg-green-500 px-4 py-1 rounded text-sm">{{ category }}</button>
      </div>
      <div class="mt-2">
        <h6 class="my-3 text-xl font-semibold">{{ title }}</h6>
        <inertia-link href="/posts/detail" class="font-bold text-gray-500">
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
  name: "MainCard",
  components: {
    'inertia-link': Link,
  },

  props: [
      'title',
      'content',
      'image',
      'category'
    ]
}

</script>

<style></style>