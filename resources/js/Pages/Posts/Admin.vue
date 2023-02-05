  <template>

    <h1>HALOOO</h1>

  </template>
  
  <script>
    //import layout
    import LayoutApp from '../../Layouts/App.vue'
    
    //import Link dari inertia
    import { Link } from '@inertiajs/inertia-vue3';
    import { Inertia } from '@inertiajs/inertia'
  
    //import component

  
    
  
    export default {
  
      layout: LayoutApp,
        
      components: {
          'inertia-link': Link,
      },
  
    }
  </script>
  
  <style>
      a {
          text-decoration: none;
          color: black;
      }
  </style>