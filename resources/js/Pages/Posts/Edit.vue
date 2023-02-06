<template>

  <div>
      <div class="px-6 sm:px-8 md:px-8 xl:px-72 2xl:px-96">
          <div class="">
              <h1 class="text-3xl font-bold text-center md:text-left mb-5">EDIT POST</h1>
              <form @submit.prevent="updatePost">
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
                    <tr>
                        <td class="text-lg font-semibold pr-5">Ditulis Oleh</td>
                        <td>
                            <input type="text" class="border-b border-gray-300 w-5/6 px-1 py-1" v-model="post.ditulis_oleh" placeholder="Masukkan Content Post">
                            <div v-if="errors.content" class="">
                                {{ errors.content }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-lg font-semibold pr-5">Ditinjau Oleh</td>
                        <td>
                            <input type="text" class="border-b border-gray-300 w-5/6 px-1 py-1" v-model="post.ditinjau_oleh" placeholder="Masukkan Content Post">
                            <div v-if="errors.content" class="">
                                {{ errors.content }}
                            </div>
                        </td>
                    </tr>
                </table>
              </div>
                  <div class="mt-10">
                      <button type="submit" class="bg-black text-white text-lg font-semibold rounded-xl px-16 py-2 mr-5">UPDATE</button>
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
          post: Object,
          errors: Object
      },

      //define Composition Api
      setup(props) {

          //state posts
          const post = reactive({
              title: props.post.title,
              content: props.post.content,
              image: props.post.image,
              category: props.post.category,
              ditulis_oleh: props.post.ditulis_oleh,
              ditinjau_oleh: props.post.ditinjau_oleh,
          })

          //function updatePost
          function updatePost() {
              
              //define variable 
              let title   = post.title
              let content = post.content
              let image = post.image
              let category = post.category
              let ditulis_oleh = post.ditulis_oleh
              let ditinjau_oleh = post.ditinjau_oleh

              //send data
              Inertia.put(`/posts/${props.post.id}`, {
                  title: title,
                  content: content,
                  image: image,
                  category: category,
                  ditulis_oleh: ditulis_oleh,
                  ditinjau_oleh: ditinjau_oleh,
              })
           
          }

          return {
              post,
              updatePost
          }

      }
  }
</script>