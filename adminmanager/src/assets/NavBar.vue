<template>
  <nav>
    <div class="nav-wrapper">
      <!-- <div class="container"> -->
      <router-link to="/" class="brand-logo">Employeer Manager</router-link>
      <ul class="right">
        <li v-if="isLoggedIn"> <span>{{currentUser}}</span></li>
        <li v-if="isLoggedIn">
          <router-link to="/">Dashboard</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>

        <li v-if="!isLoggedIn">
          <router-link to="/register">Register</router-link>
        </li>
        <li v-if="isLoggedIn">
          <button @click="logout()" class="btn black">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";

export default {
  name: "navbar",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Be+Vietnam&display=swap");

.nav-wrapper {
  text-align: center;
  background-color: #049ff9;
  box-shadow: 0px 0px 9px #0425f9;
  padding: 10px;
}

.brand-logo {
  font-size: 25px;
  text-decoration: none;
  /* text-transform: uppercase; */
  word-spacing: 5px;
  padding-left: 10px;
  color: white;
}
</style>>
