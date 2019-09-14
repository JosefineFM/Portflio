<template>
  <div class="grid-container">
    <div class="grid-img">
      <img class="svgImage" src="../Assets/img/undraw_super_woman_dv0y.svg" alt="activity" />
    </div>
    <div class="grid-info">
      <h1>Our activitys</h1>
      <h2>Football</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quasi animi rerum maiores nobis hic, a odio cum fuga aut molestiae, ipsam quibusdam iste debitis ducimus, officia earum accusantium.</p>
      <table class="info">
        <tr>
          <td class="bold">Where:</td>
          <td>Sverige</td>
        </tr>
        <tr>
          <td class="bold">Price:</td>
          <td>3000kr pr uke</td>
        </tr>
      </table>

      <h2>Basketball</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quasi animi rerum maiores nobis hic, a odio cum fuga aut molestiae, ipsam quibusdam iste debitis ducimus, officia earum accusantium.</p>
      <table class="info">
        <tr>
          <td class="bold">Where:</td>
          <td>Sverige</td>
        </tr>
        <tr>
          <td class="bold">Price:</td>
          <td>3000kr pr uke</td>
        </tr>
      </table>
    </div>

    <div class="grid-MoreInfo">
      <h2>Handball</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quasi animi rerum maiores nobis hic, a odio cum fuga aut molestiae, ipsam quibusdam iste debitis ducimus, officia earum accusantium.</p>
      <table class="info">
        <tr>
          <td class="bold">Where:</td>
          <td>Sverige</td>
        </tr>
        <tr>
          <td class="bold">Price:</td>
          <td>3000kr pr uke</td>
        </tr>
      </table>

      <h2>E-sport</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quasi animi rerum maiores nobis hic, a odio cum fuga aut molestiae, ipsam quibusdam iste debitis ducimus, officia earum accusantium.</p>
      <table class="info">
        <tr>
          <td class="bold">Where:</td>
          <td>Sverige</td>
        </tr>
        <tr>
          <td class="bold">Price:</td>
          <td>3000kr pr uke</td>
        </tr>
      </table>
      <button @click="goPage1()">REGISTER</button>
    </div>

    <footer></footer>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  methods: {
    async goPage1() {
      this.$router.push("Register");
    }
  }
};
</script>
<style >
</style>

<style scoped >
button {
  border: none;
  width: 250px;
  font-size: 19px;
  border-radius: 2px;
  padding: 10px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  padding: 20px 10px 0px 20px;
}
.grid-info {
  grid-column: 1;
  grid-row: 1;
  width: 500px;
  height: 100%;
}

.grid-MoreInfo {
  grid-column: 1/ 3;
  grid-row: 2;
}
.grid-img {
  grid-column: 2;
  grid-row: 1;
}
.svgImage {
  width: 100%;
}
.info {
  color: white;
  font-size: 20px;
}
.bold {
  font-size: 20px;
  font-weight: bold;
  padding-right: 10px;
}
  button {
    margin: 30px 0px 30px 0px;
  }
@media only screen and (max-width: 1000px) {
  .svgImage {
    width: 100%;
  }
  h1 {
    text-align: center;
    margin: 0;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
  }
  .grid-img {
    grid-column: 1;
    grid-row: 1;
  }
  .grid-info {
    grid-column: 1;
    grid-row: 2;
    width: auto;
  }
  .grid-MoreInfo {
    grid-column: 1;
    grid-row: 3;
  }
  p {
    margin: 1px;
  }

}
</style>

