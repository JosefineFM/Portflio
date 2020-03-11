<template>
  <div class="container">
    <router-link to="/" class="back"> Tilbake </router-link>
    <div class="categoryOne">
      <ol>

        <!-- Gets the ids that is stored in imageIds end gets the images from the restApi -->
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

/* -------------------------------------------------------------------------- */
/*      Call on the images ids and store them in imageIds in return data.     */
/* -------------------------------------------------------------------------- */

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
@import "../assets/Style.css";

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
