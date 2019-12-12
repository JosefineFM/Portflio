<template>
  <div id="app">
    <Navbar/>
    <router-view/>

      <!-- <div class="sosialMedia">
        <p>Sosiale medier:</p>
        <a href="https://www.facebook.com/josefineblogg/" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/josefi.nne/" target="_blank">Instagram</a>

        
      </div> -->
      <!-- <router-link class="button-admin" to="/adminLogin">Admin</router-link> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar'

export default {
  name: "App",
  components: {
    Navbar
  },

  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  methods: {
    loggedIn() {
      this.isLoggedIn = true;
    },
    loggedUt() {
      this.isLoggedIn = false;
    }
  }
};
</script>

<style>
@import "./assets/Style";
</style>
