import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Index.vue'
import OurActivitys from'./components/OurActivitys.vue'
import Register from './components/Register.vue'
import Activity from './components/Activity.vue'
import Order from '@/components/Order'
import OrderSendt from '@/components/OrderSendt'


Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/OurActivitys',
      name: 'OurActivitys',
      component: OurActivitys,
      props: true
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      props: true
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity,
      props: true
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      props: true
    },
    {
      path: '/OrderSendt',
      name: 'OrderSendt',
      component: OrderSendt
    }
  ]
})
