import Vue from 'vue';
import Router from 'vue-router';
import Index from "@/components/Index";

import natur from '@/components/nature';
import family from '@/components/family';
import contact from '@/components/contact';
import about from '@/components/about';
import edit from '../Edit/Edit.vue';

import adminLogin from '@/components/adminLogin';
import admin from '@/components/admin';

import firebase from 'firebase';

// use router
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/natur",
      name: "natur",
      component: natur
      //meta: {
      //  requiresGuest: true
      //}
    },
    {
      path: "/family",
      name: "family",
      component: family,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: about,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/adminLogin",
      name: "adminLogin",
      component: adminLogin,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: admin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit/:name",
      name: "edit",
      component: edit,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  //check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //check if NOT logged in
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: 'adminLogin',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    //check if logged in
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // proceed to route
      next();
    }

  } else {
    // proceed to route
    next();
  }
});

export default router;
