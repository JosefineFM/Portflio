import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About.vue'
import Foodtable from '@/components/Foodtable.vue'
import FoodInfo from '@/components/FoodInfo.vue'
import Admin from '@/components/Admin.vue'
import Edit from '@/components/Edit.vue'
import Condition from "@/components/Condition.vue"
import FoodListEdit from "@/components/FoodListEdit.vue"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/foodtable',
      name: 'foodtable',
      component: Foodtable
    },
    {
      path: '/foodInfo',
      name: 'foodInfo',
      component: FoodInfo,
      params: true

    },
    {
      path: '/condition',
      name: 'condition',
      component: Condition,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit,
      props: true
    },
    {
      path: '/foodListEdit',
      name: 'foodListEdit',
      component: FoodListEdit,
      props: true
    },

  ]
})
