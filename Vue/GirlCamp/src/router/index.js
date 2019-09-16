import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Activity from '@/components/Activity'
import Order from '@/components/Order'
import Index from '@/components/Index'
import OurActivitys from'@/components/OurActivitys'
import OrderSendt from '@/components/OrderSendt'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      props: true
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
