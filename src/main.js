// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Indonesia from '~/layouts/Indonesia.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('ID', Indonesia)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@200;400;700&display=swap'
  })

  if(process.isClient){
    AOS.init()
  }
}
