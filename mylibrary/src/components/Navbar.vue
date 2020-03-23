<template>
  <div>
    <ul>
      <li @click="login">
          <router-link to="/library"> Login </router-link>
      </li>
      <li v-if="isLoggedIn"><a href="">Ditt bibliotek</a></li>
      <li @click="logout()">
          <router-link to="/"> Logout </router-link>
      </li>
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
    },

    logout: function () {
      this.isLoggedIn = false
    }
  }
}
</script>
<style>
@import "../assets/navbar-style.css";
</style>
