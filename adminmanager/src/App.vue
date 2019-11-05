<template>
  <div id="app">
    <Navbar/>
    <div class="main-container">
    <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './assets/NavBar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Be+Vietnam&display=swap');
@import './assets/main.css';
/* .main-container{
  margin-left: 20px;
} */
* {
  margin: 0;
}
  body{
      font-family: 'Be Vietnam', sans-serif;
  }
</style>