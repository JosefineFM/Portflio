<template>
  <div class="about">
    <h1>This is a startpage</h1>

    <router-link id="router-link" to="/about">About Us</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    created() {
    axios.get(`https://localhost:44367/api/values`)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response.data)
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
}
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
