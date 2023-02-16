<template>

  <div class="mb-5">
    <div>
      <inertia-link :href="`/artikel/${item.id}`" class="">
        <img class="rounded w-full h-auto md:h-56 object-cover" :src="`../storage/${item.image}`"/>
      </inertia-link>
    </div>
    <div class="pt-3">
      <div v-if="item.category.length > 0" class="flex justify-end">
        <button 
          v-if="(item.category[0].category == 'Diet Program')"
          class="text-white bg-green-500 px-4 py-1 rounded text-xs"  
        >{{ item.category[0].category }}</button>
        <button 
          v-else-if="(item.category[0].category == 'Sleep')"
          class="text-white bg-amber-700 px-4 py-1 rounded text-xs"  
        >{{ item.category[0].category }}</button>
        <button 
          v-else-if="(item.category[0].category == 'Healthy Eating')"
          class="text-white bg-teal-600 px-4 py-1 rounded text-xs"  
        >{{ item.category[0].category }}</button>
        <button 
          v-else-if="(item.category[0].category == 'Mindfullness & Stress')"
          class="text-white bg-orange-700 px-4 py-1 rounded text-xs"  
        >{{ item.category[0].category }}</button>
        <button 
          v-else-if="(item.category[0].category == 'Weight Management')"
          class="text-white bg-red-700 px-4 py-1 rounded text-xs"  
        >{{ item.category[0].category }}</button>
        <button 
          v-else-if="(item.category[0].category == 'Active Lifestyle')"
          class="text-white bg-emerald-700 px-4 py-1 rounded text-xs"  
        >{{ item.category[0].category }}</button>
        <button 
          v-else-if="(item.category[0].category == 'Cardiovascular')"
          class="text-white bg-cyan-600 px-4 py-1 rounded text-xs"  
        >{{ item.category[0].category }}</button>
        <button v-else class="text-white bg-violet-600 px-4 py-1 rounded text-xs">Unknown</button>
      </div>
      <div v-if="item.category.length == 0" class="flex justify-end">
        <button class="text-white bg-yellow-600 px-4 py-1 rounded text-xs">Uncategorized</button>
      </div>
      <div class="mt-2">
        <inertia-link :href="`/artikel/${item.id}`" class="">
          <h6 class="my-3 text-lg font-semibold  text-black capitalize">{{ item.title }}</h6>
        </inertia-link>
        <inertia-link :href="`/artikel/${item.id}`" class="font-bold text-black text-sm underline underline-offset-1">
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
    name: "BasicCardHome",
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