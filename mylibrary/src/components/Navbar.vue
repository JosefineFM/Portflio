<template>
  <div>
    <ul>
      <li @click="login"><a href="">Login</a></li>
      <li v-if="isLoggedIn"><a href="">Ditt bibliotek</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      isLoggedIn: false
    }
  },

  methods: {
    login: function () {
      this.isLoggedIn = true
    }
  }
}
</script>
<style>
@import "../assets/navbar-style.css";
</style>
