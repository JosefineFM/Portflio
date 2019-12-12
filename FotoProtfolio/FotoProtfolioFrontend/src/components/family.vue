<template>
  <div class="wrapper">
    <div class="menu">
      <!--<router-link id="back" class="button" to="/"> Tilbake </router-link>-->
    </div>

    <div class="main">
      <router-link id="back" class="button" to="/">Tilbake</router-link>
      <ol>
        <li v-for="id in imageIds">
          <img height="400" v-bind:src="'/api/Image/' + id">
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      category: "dyr",
      imageIds: [],
      selectedImageUrl: null
    };
  },
  methods: {
    selectImage: function(id) {
      console.log(id);
      this.selectedImageUrl = "/api/Image/" + id;

      console.log(this.selectedImageUrl);
    }
  },
  created: function() {
    console.log("start");
    const self = this;

    axios
      .get("/api/category/" + this.category)
      .then(function(response) {
        self.imageIds.length = 0;
        for (let img of response.data) {
          self.imageIds.push(img.id);
        }
      })
      .catch(function(error) {
        // handle error
        console.log("Kunne ikke henta data: " + error);
      });
  }
};
</script>
<style scoped>
/* li {
  list-style: none;
  padding-top: 10px;
  padding-left: 20px;
  float: left;
} */
</style>
