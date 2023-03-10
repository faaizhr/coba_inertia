require('./bootstrap');

import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faArrowLeft, faArrowRight, faBarsStaggered, faChevronDown, faChevronLeft, faCirclePlus, faEye, faHouse, faLink, faMinus, faPlus, faPlusCircle, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'


library.add(faUser, faEye, faLink, faFacebook, faTwitter, faWhatsapp, faChevronDown, faBarsStaggered, faXmark, faArrowRight, faArrowLeft, faInstagram, faYoutube, faChevronDown, faPlus, faMinus, faHouse, faChevronLeft)

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();


const el = document.getElementById('app')

createApp({
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => require(`./Pages/${name}`).default,
  })
}).use(plugin).mount(el).component("font-awesome-icon", FontAwesomeIcon)