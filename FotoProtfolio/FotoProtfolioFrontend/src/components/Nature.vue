<template>
  <div class="container">
    <router-link to="/" class="back"> Tilbake </router-link>
    <div class="categoryOne">
      <ol>
        <li v-for="id in imageIds">
          <img height="400" v-bind:src="'https://localhost:44353/api/natureImage/' + id">
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
      category: "natur",
      imageIds: [],
      selectedImageUrl: null
    };
  },

  created: function() {
    const self = this;

    axios
      .get("https://localhost:44353/api/natureImage")
      .then(function(response) {
        console.log(response);
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
.back{
  float: right;
  font-size: 25px;
  padding-top: 20px;
  padding-right: 40px;
  letter-spacing: 3px;
  transition: 0.5s;
}

.categoryOne{
  margin: 0;
  padding-top: 40px;
}
li {
  float: left;
  padding-left: 15px;
    list-style-type: none;

}


</style>
