<template>
  <div id="app">
    <router-view @loggedin="loggedIn" @loggedut="loggedUt"/>
    <div class="menu" v-if="!isLoggedIn">
      <div class="link">
        <!-- <img class="logo" src="/api/Image/2"> -->

        <router-link v-if="isLoggedIn" class="button" to="/natur">Natur</router-link>
        <router-link v-if="!isLoggedIn" class="button" to="/natur">Natur</router-link>
        <!-- <a href="#">Reklame - funker ikke</a>
        <a href="#">Bedrifter - funker ikke</a>-->
        <router-link v-if="!isLoggedIn" class="button" to="/family">Familie</router-link>
        <router-link v-if="!isLoggedIn" class="button" to="/about">Om</router-link>
        <router-link v-if="!isLoggedIn" class="button" to="/contact">Bestill time</router-link>
      </div>
      <!-- <div class="sosialMedia">
        <p>Sosiale medier:</p>
        <a href="https://www.facebook.com/josefineblogg/" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/josefi.nne/" target="_blank">Instagram</a>

        
      </div> -->
      <!-- <router-link class="button-admin" to="/adminLogin">Admin</router-link> -->
    </div>
  </div>
</template>

<script>

export default {
  name: "App",

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
