<template>
  <div class="grid-container">
    <div class="grid-img">
      <img class="svgImage" src="../Assets/img/undraw_activity_tracker_1l9o.svg" alt="activity" />
    </div>
    <div class="grid-info">
      <h1>Welcome our La Girl Camp</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quasi animi rerum maiores nobis hic, a odio cum fuga aut molestiae, ipsam quibusdam iste debitis ducimus, officia earum accusantium.</p>
      <button @click="goPage1()">REGISTER</button>
    </div>
    <div class="grid-blogg">
      <h1 class="blog-header">BLOG COMING SOON</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, aliquid, perferendis necessitatibus nisi dolor sunt saepe at enim quos reiciendis dolores adipisci sit. Deserunt dolorum aliquid eveniet vero, odit modi.</p>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  created(){
    const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.myjson.com/bins/jmzl1')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  },
  methods: {
    async goPage1() {
      this.$router.push("Register");
    }
  }
};
</script>
<style>
@import "../Assets/style/main";
</style>
<style scoped >
.blog-header{
  text-align: center;
}
.grid-container {
  display: grid;
  grid-template-columns: 550px auto;
  grid-gap: 10px;
}
.grid-info {
  grid-column: 3;
  grid-row: 1 / span 2;
  padding-right: 10px;
}
.grid-img {
  grid-column: 1 / span 2;
  grid-row: 1;
}
.grid-blogg{
  grid-column: 1/ span 3;
  grid-row: 2;
} 
.svgImage {
  padding: 20px 20px 10px 20px;
  width: 100%;
}
@media only screen and (max-width: 1000px) {
  .svgImage {
padding: 0;
  width: 100%;
}
  h1{
    text-align: center
  }
  .grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
}
  .grid-img {
  grid-column: 1;
  grid-row: 1;
}
  .grid-info {
  grid-column: 1;
  grid-row: 2;
  
}
.grid-blogg{
  grid-column: 1;
  grid-row: 3;
} 
}
</style>

