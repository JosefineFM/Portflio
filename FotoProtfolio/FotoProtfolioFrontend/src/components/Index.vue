<template>
  <div class="container">
    <div class="categoryOne">
        <router-link to="Natur">
      <img align="right" class="navImg" src="../assets/Img/Nature.png">
      </router-link>
    </div>
    <div class="categoryTwo">
      <p>categoryTwo</p>
    </div>
    <div class="categoryThree">
      <p>categoryThree</p>
    </div>
    <div class="categoryFour">
      <p>categoryFour</p>
    </div>
        <div class="categoryFive">
      <p>categoryFive</p>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  created: function(){
    axios.get('https://localhost:44353/weatherforecast')
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
  }
};
</script>

<style scoped>
@import "../assets/Style";
.container {
  padding-top: 10%;
  font-size: 1.5em;
  min-height: 300px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    "categoryOne categoryTwo"
    "categoryThree categoryFour"
    "categoryFive categoryFive";
}

.categoryOne {
  grid-area: categoryOne;
  
}

.categoryTwo {
  background: LightSalmon;
  grid-area: categoryTwo;
}

.categoryThree {
  background: PaleTurquoise;
  grid-area: categoryThree;
  grid-template-columns: auto 1fr;
  display: grid;
}

.categoryFour {
  background: lightpink;
  grid-area: categoryFour;
}

.categoryFive{
  grid-area: categoryFive;
  background-color: lightcoral;
  height: 100px;
}

img{
  width: 80%;
    display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>