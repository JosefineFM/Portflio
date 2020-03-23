import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/index.vue'
import library from '@/views/library.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/library',
      name: 'library',
      component: library
    }
  ]
})
