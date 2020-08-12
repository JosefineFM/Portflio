import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },

    {
      path: '/about',
      Name: 'About',
      component: About
    },

    {
      path: '/Projects',
      Name: 'Projects',
      component: Projects
    },

    {
      path: '/Contact',
      Name: 'Contact',
      component: Contact
    }

  ]
})
