<template>
  <nav>
    <div class="nav-wrapper">
      <ul>
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
          <a @click="logout()">Logout</a>
        </li>
        <li class="userName" v-if="isLoggedIn">
          <span>{{currentUser}}</span>
        </li>
        <li style="float:left">
          <router-link to="/">Employeer Manager</router-link>
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
  background-color: #049ff9;
  box-shadow: 0px 0px 9px #0425f9;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
}
li {
  float: right;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
  word-spacing: 5px;
}
li a:hover:not(.active) {
  background-color: #0425f9;
}

.userName {
  color: white;
  padding-top: 14px;
  font-size: 25px;
  margin-right: 30%;
}
</style>>
