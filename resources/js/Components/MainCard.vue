<template>
  <div class="border-b border-gray-300 pb-5 md:border-0">
    <div>
      <inertia-link :href="`/artikel/${item.id}`">
        <img class="rounded-2xl" :src="`storage/${item.image}`"/>
      </inertia-link>
    </div>
    <div>
      <div class="flex justify-between mt-4">
        <p class="inline">{{ getMonthName }} {{ getDay }}, {{ getYear }}</p>
        <div v-if="item.category.length > 0" class="flex justify-end">
          <button 
            @click="$inertia.get(`/category/${item.category[0].slug}`)"
            v-if="(item.category[0].category == 'Diet Program')"
            class="text-white bg-green-500 px-4 py-1 rounded text-xs"  
          >{{ item.category[0].category }}</button>
          <button
            @click="$inertia.get(`/category/${item.category[0].slug}`)" 
            v-else-if="(item.category[0].category == 'Sleep')"
            class="text-white bg-amber-700 px-4 py-1 rounded text-xs"  
          >{{ item.category[0].category }}</button>
          <button
            @click="$inertia.get(`/category/${item.category[0].slug}`)" 
            v-else-if="(item.category[0].category == 'Healthy Eating')"
            class="text-white bg-teal-600 px-4 py-1 rounded text-xs"  
          >{{ item.category[0].category }}</button>
          <button
            @click="$inertia.get(`/category/${item.category[0].slug}`)" 
            v-else-if="(item.category[0].category == 'Mindfullness & Stress')"
            class="text-white bg-orange-700 px-4 py-1 rounded text-xs"  
          >{{ item.category[0].category }}</button>
          <button
            @click="$inertia.get(`/category/${item.category[0].slug}`)" 
            v-else-if="(item.category[0].category == 'Weight Management')"
            class="text-white bg-red-700 px-4 py-1 rounded text-xs"  
          >{{ item.category[0].category }}</button>
          <button
            @click="$inertia.get(`/category/${item.category[0].slug}`)" 
            v-else-if="(item.category[0].category == 'Active Lifestyle')"
            class="text-white bg-emerald-700 px-4 py-1 rounded text-xs"  
          >{{ item.category[0].category }}</button>
          <button
            @click="$inertia.get(`/category/${item.category[0].slug}`)" 
            v-else-if="(item.category[0].category == 'Cardiovascular')"
            class="text-white bg-cyan-600 px-4 py-1 rounded text-xs"  
          >{{ item.category[0].category }}</button>
          <button v-else class="text-white bg-violet-600 px-4 py-1 rounded text-xs">Unknown</button>
        </div>
        <div v-if="item.category.length == 0" class="flex justify-end">
          <button class="text-white bg-yellow-600 px-4 py-1 rounded text-xs">Uncategorized</button>
        </div>
      </div>
      <div class="mt-2">
        <inertia-link :href="`/artikel/${item.id}`">
          <h6 class="my-3 text-xl font-semibold capitalize">{{ item.title }}</h6>
        </inertia-link>
        <inertia-link :href="`/artikel/${item.id}`" class="font-semibold text-sm text-gray-800 underline underline-offset-1">
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

  props: {
      item: Object
    },

    data() {
      return {
        // getColor: this.item.category[0].category,

        getYear: this.item.updated_at.substring(0, 4),
        getMonth: this.item.updated_at.substring(5, 7),
        getDay: this.item.updated_at.substring(8, 10),
        getTime: this.item.updated_at.substring(11, 16),
      }
    },
    computed: {
      // getCatColor: function() {
      //   return this.getColor
      // },

      getMonthName: function() {
        if (this.getMonth == "01") {
          return "Januari"
        } 
        else if(this.getMonth == "02") {
          return "Februari"
        }
        else if(this.getMonth == "03") {
          return "Maret"
        }
        else if(this.getMonth == "04") {
          return "April"
        }
        else if(this.getMonth == "05") {
          return "Mei"
        }
        else if(this.getMonth == "06") {
          return "Juni"
        }
        else if(this.getMonth == "07") {
          return "Juli"
        }
        else if(this.getMonth == "08") {
          return "Agustus"
        }
        else if(this.getMonth == "09") {
          return "September"
        }
        else if(this.getMonth == "10") {
          return "Oktober"
        }
        else if(this.getMonth == "11") {
          return "November"
        }
        else if(this.getMonth == "12") {
          return "Desember"
        }
      }
    }
}

</script>

<style></style>