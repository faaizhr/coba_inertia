<template>

  <div>
      <div class="">
          <div class="px-6 sm:px-8 md:px-8 xl:px-56 2xl:px-96">
              <h1 class="text-3xl font-bold text-center md:text-left mb-5">TAMBAH ARTIKEL</h1>
              <form @submit.prevent="storePost">
              <div class="bg-white p-5 rounded-xl">
                <table class="bg-white min-w-full table-auto">
                    <tr class="">
                        <td class="text-lg font-semibold pb-5 pr-5">JUDUL ARTIKEL</td>
                        <td class="pb-5">
                            <input type="text" class="border-b border-gray-300 w-5/6 px-1 py-1" v-model="post.title" placeholder="Masukkan Title Post">
                            <div v-if="errors.title" class="text-sm text-red-600 mt-1 ml-1">
                                {{ errors.title }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-lg font-semibold pb-5 pr-5">KATEGORI</td>
                        <td class="pb-5">
                            <div v-for="cat in category">
                                <input type="checkbox" :id="cat.category" :value="cat.id" v-model="post.category"/>
                                <label class="ml-3">{{ cat.category }}</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-lg font-semibold pb-5 pr-5">CONTENT</td>
                        <td class="pb-5">
                            <!-- <textarea class="w-full h-56 border-b border-gray-300 px-1 py-1" placeholder="Masukkan Content Post"></textarea> -->
                            <input id="content" type="hidden" name="content" @change="handleChange" value="">
                            <trix-editor input="content"></trix-editor>
                            <div v-if="errors.content" class="text-sm text-red-600 mt-1 ml-1">
                                {{ errors.content }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-lg font-semibold pb-5 pr-5">Upload Gambar</td>
                        <td>
                            <input 
                                type="file" 
                                accept="image/png, image/jpeg, image/jpg" 
                                id="image"
                                name="image"
                                @input="post.image = $event.target.files[0]"
                                @change="(event) => getImagePreview(event)"
                            >
                            <div id="preview" class="w-56 object-cover p-2 border border-gray-300 mt-2 rounded-lg"></div>
                            <div v-if="errors.image" class="text-sm text-red-600 mt-1 ml-1">
                                {{ errors.image }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-lg font-semibold pb-5 pr-5">Ditulis Oleh</td>
                        <td>
                            <input type="text" class="border-b border-gray-300 w-5/6 px-1 py-1" v-model="post.ditulis_oleh" placeholder="Masukkan Nama Penulis">
                            <div v-if="errors.ditulis_oleh" class="text-sm text-red-600 mt-1 ml-1">
                                {{ errors.ditulis_oleh }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-lg font-semibold pb-5 pr-5">Ditinjau Oleh</td>
                        <td>
                            <input type="text" class="border-b border-gray-300 w-5/6 px-1 py-1" v-model="post.ditinjau_oleh" placeholder="Masukkan Nama Peninjau">
                            <div v-if="errors.ditinjau_oleh" class="text-sm text-red-600 mt-1 ml-1">
                                {{ errors.ditinjau_oleh }}
                            </div>
                        </td>
                    </tr>
                </table>
              </div>
                  <div class="mt-10">
                      <button type="submit" class="bg-black text-white text-lg font-semibold rounded-xl px-16 py-2 mr-5">SIMPAN</button>
                      <button type="reset" class="bg-red-700 text-white text-lg font-semibold rounded-xl px-16 py-2">RESET</button>
                  </div>
              </form>

          </div>
      </div>
  </div>

</template>

<script>


  //import layout
  import LayoutApp from '../../Layouts/App.vue'

  import { reactive } from 'vue'
  import { Inertia } from '@inertiajs/inertia'


  export default {

      //layout
      layout: LayoutApp,

      //props
      props: {
          errors: Object,
          category: Array,
      },

      methods: {
        getImagePreview(event) {
            var image=URL.createObjectURL(event.target.files[0]);
            var imagediv= document.getElementById('preview');
            var newimg=document.createElement('img');
            imagediv.innerHTML='';
            newimg.src=image;
            imagediv.appendChild(newimg);
            console.log(event.target.files[0])
        },
        handleChange() {
            console.log(event.target.value)
        },
        setTextToTrix: function() {
            this.post.content = document.getElementById("content").value; 
        }
      },

    mounted() {
        document.addEventListener("trix-change", this.setTextToTrix); // Listen to the changes on the editor
    },

      //define Composition Api
      setup() {

          //state posts
          const post = reactive({
              title: '',
              content: '',
              image: '',
              category: [],
              ditulis_oleh: '',
              ditinjau_oleh: ''
          })


          //function storePost
          function storePost() {
              
              //define variable 
              let title   = post.title.toLowerCase()
              let content = post.content
              let image = post.image
              let category = post.category
              let ditulis_oleh = post.ditulis_oleh
              let ditinjau_oleh = post.ditinjau_oleh

              //send data
              Inertia.post('/posts/', {
                  title: title,
                  content: content,
                  image: image,
                  category: category,
                  ditulis_oleh: ditulis_oleh,
                  ditinjau_oleh: ditinjau_oleh
              })
           
          }

          return {
              post,
              storePost
          }

      }
  }
</script>