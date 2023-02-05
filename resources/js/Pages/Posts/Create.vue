<template>

  <div>
      <div class="">
          <div class="px-6 sm:px-8 md:px-8 xl:px-72">
              <h1 class="text-3xl font-bold text-center md:text-left mb-5">TAMBAH ARTIKEL</h1>
              <!-- <form @submit.prevent="storePost">
                  <div class="">
                      <label class="">JUDUL ARTIKEL</label>
                      <input type="text" class="" v-model="post.title" placeholder="Masukkan Title Post">
                      <div v-if="errors.title" class="">
                          {{ errors.title }}
                      </div>
                  </div>
                  <div class="mb-3">
                      <label class="form-label">GAMBAR ARTIKEL</label>
                      <input type="text" class="" v-model="post.image" placeholder="Masukkan Content Post">
                      <div v-if="errors.content" class="">
                        {{ errors.content }}
                      </div>
                    </div>
                  <div class="mb-3">
                      <label class="form-label">KATEGORI</label>
                      <input type="text" class="" v-model="post.category" placeholder="Masukkan Content Post">
                      <div v-if="errors.content" class="">
                        {{ errors.content }}
                    </div>
                    </div>
                <div class="mb-3">
                    <label class="form-label">ISI ARTIKEL</label>
                    <textarea class="" rows="5" v-model="post.content" placeholder="Masukkan Content Post"></textarea>
                    <div v-if="errors.content" class="">
                        {{ errors.content }}
                    </div>
                </div>
                  <div class="mb-3">
                      <button type="submit" class="">SIMPAN</button>
                      <button type="reset" class="">RESET</button>
                  </div>
              </form> -->

              <form @submit.prevent="storePost">
              <div class="bg-white p-5 rounded-xl">
                <table class="bg-white min-w-full table-auto">
                    <tr class="">
                        <td class="text-lg font-semibold pb-5 pr-5">JUDUL ARTIKEL</td>
                        <td class="pb-5">
                            <input type="text" class="border-b border-gray-300 w-5/6 px-1 py-1" v-model="post.title" placeholder="Masukkan Title Post">
                            <div v-if="errors.title" class="mt-2 alert alert-danger">
                                {{ errors.title }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-lg font-semibold pb-5 pr-5">KATEGORI</td>
                        <td class="pb-5">
                            <input type="text" class="border-b border-gray-300 w-5/6 px-1 py-1" v-model="post.category" placeholder="Masukkan Content Post">
                            <div v-if="errors.content" class="">
                                {{ errors.content }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-lg font-semibold pb-5 pr-5">CONTENT</td>
                        <td class="pb-5">
                            <textarea class="w-full h-56" v-model="post.content" placeholder="Masukkan Content Post"></textarea>
                            <div v-if="errors.content" class="mt-2 alert alert-danger">
                                {{ errors.content }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-lg font-semibold pr-5">Upload Gambar</td>
                        <td>
                            <input type="text" class="border-b border-gray-300 w-5/6 px-1 py-1" v-model="post.image" placeholder="Masukkan Content Post">
                            <div v-if="errors.content" class="">
                                {{ errors.content }}
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
          errors: Object
      },

      //define Composition Api
      setup() {

          //state posts
          const post = reactive({
              title: '',
              content: '',
              image: '',
              category: ''
          })

          //function storePost
          function storePost() {
              
              //define variable 
              let title   = post.title
              let content = post.content
              let image = post.image
              let category = post.category

              //send data
              Inertia.post('/posts/', {
                  title: title,
                  content: content,
                  image: image,
                  category: category
              })
           
          }

          return {
              post,
              storePost
          }

      }
  }
</script>