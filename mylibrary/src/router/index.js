import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: HelloWorld
    }
  ]
})
