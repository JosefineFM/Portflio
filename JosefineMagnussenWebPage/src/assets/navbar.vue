<template>
  <nav class="navbar">
  <img @click="backToMain()" class="image" src="../assets/images/J.png" alt="Menu">
<img class="menu" src="../assets/images/icons8-menu-240.png" alt="Menu" @click="showNavbar = !showNavbar">

    <div v-if="showNavbar" id="myNav" class="overlay">
      <img class="menuClose" @click="showNavbar = false" src="../assets/images/icons8-delete-240.png" alt="Close">
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
