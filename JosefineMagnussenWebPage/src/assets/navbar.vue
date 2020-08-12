<template>
  <nav class="navbar">
    <p @click="backToMain()" class="firstName">
      Josefine
      <span class="lastName">Magnussen</span>
    </p>
<img class="menu" src="../assets/images/menu.png" alt="Menu" @click="showNavbar = !showNavbar">
      <!-- <a class="menu" @click="showNavbar = !showNavbar" >Menu</a> -->

    <div v-if="showNavbar" id="myNav" class="overlay">
      <img class="menuOpen" @click="showNavbar = false" src="../assets/images/close.png" alt="Close">
      <!-- <a class="menuOpen" @click="showNavbar = false"> Close </a> -->
      <div class="overlay-content">
        <br />
        <router-link class="link" to="/">
          <span @click="showNavbar = false">Home</span>
        </router-link>
        <router-link class="link" to="/About">
          <span @click="showNavbar = false">About</span>
        </router-link>

        <router-link class="link" to="/Projects">
          <span @click="showNavbar = false">Projects</span>
        </router-link>
      <a class="link" href="mailto:josefine.magnussen@hotmail.com" target="_top">Send mail</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      showNavbar: false
    }
  },

  methods: {

    backToMain  () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
@import './Style/navbar.css';
</style>
