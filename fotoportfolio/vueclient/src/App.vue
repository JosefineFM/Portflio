<template>
  <div id="app">
    <router-view @loggedin="loggedIn" @loggedut="loggedUt"/>
    <div class="menu" v-if="!isLoggedIn">
      <div class="link">
        <img class="logo" src="/api/Image/2">

        <router-link v-if="isLoggedIn" class="button" to="/natur">Natur</router-link>
        <router-link v-if="!isLoggedIn" class="button" to="/natur">Natur</router-link>
        <!-- <a href="#">Reklame - funker ikke</a>
        <a href="#">Bedrifter - funker ikke</a>-->
        <router-link v-if="!isLoggedIn" class="button" to="/family">Familie</router-link>
        <router-link v-if="!isLoggedIn" class="button" to="/about">Om</router-link>
        <router-link v-if="!isLoggedIn" class="button" to="/contact">Bestill time</router-link>
      </div>
      <div class="sosialMedia">
        <p>Sosiale medier:</p>
        <a href="https://www.facebook.com/josefineblogg/" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/josefi.nne/" target="_blank">Instagram</a>

        
      </div>
      <router-link class="button-admin" to="/adminLogin">Admin</router-link>
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

@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400");

body {
    margin: 0;
  }
.login {
  margin-top: 20px;
  text-align: left;
}
.sosialMedia {
  padding-top: 60px;
  text-align: center;
  font-size: 20px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 70%;
}

.menu {
  text-align: left;
  width: 20%;
  padding: 15px;
  border-right: 1px solid;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-color: white;
}

.main {
  width: 75%;
  padding-right: 10px;
  float: right;
  padding: 15px;
  height: 100%;
  top: 0;
}

.link {
  padding-top: 50%;
}
.button-admin {
  text-align: center;
  padding-top: 30%;
}

a:link {
  text-align: left;
  text-decoration: none;
  color: black;
  font-family: "Quicksand", sans-serif;
  font-size: 25px;
  padding-left: 10px;
  display: block;
}

a:visited {
  text-decoration: none;
  color: black;
}

@media screen and (max-width: 400px) {
  .menu {
    border-bottom: solid #2c3e50 1px;
    height: 20px;
    width: 100%;
  }
  a:link {
    display: inline;
    font-size: 13px;
  }

  .menu a:hover {
    background-color: #ddd;
    color: black;
  }

  .logo {
    display: none;
  }
  .link {
    padding-top: 0%;
  }
  .main {
    height: 100%;
    width: auto;

    top: 0;
  }
}
</style>
