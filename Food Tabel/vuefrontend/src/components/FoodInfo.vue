<template>
  <section id="foodinfo">
    <!-- <p id="food_Item">Mat items</p> -->

    <table align="center">
      <p
        v-for="(foodItem, foodID, fat, index) in foodInfoList"
        v-bind:key="index"
        id="food_Item"
      >{{foodItem.food_Item}}</p>
      <tr align="center" v-for="(foodItem, fat, index) in foodInfoList" v-bind:key="index">
        <th>Fett</th>
        <td>{{foodItem.fat}}</td>
      </tr>
      <tr v-for="(foodItem, kilocalories, index) in foodInfoList" v-bind:key="index">
        <th>Kilocalories:</th>
        <td>{{foodItem.kilocalories}}</td>
      </tr>
      <tr v-for="(foodItem, transFa, index) in foodInfoList" v-bind:key="index">
        <th>TransFa:</th>
        <td>{{foodItem.transFa}}</td>
      </tr>
      <tr v-for="(foodItem, omega_3, index) in foodInfoList" v-bind:key="index">
        <th>Omega 3:</th>
        <td>{{foodItem.omega_3}}</td>
      </tr>
      <tr v-for="(foodItem, cholesterol, index) in foodInfoList" v-bind:key="index">
        <th>Cholesterol:</th>
        <td>{{foodItem.cholesterol}}</td>
      </tr>
      <tr v-for="(foodItem, carbo, index) in foodInfoList" v-bind:key="index">
        <th>Carbo:</th>
        <td>{{foodItem.carbo}}</td>
      </tr>
      <tr v-for="(foodItem, sugar, index) in foodInfoList" v-bind:key="index">
        <th>Sugar:</th>
        <td>{{foodItem.sugar}}</td>
      </tr>
      <tr v-for="(foodItem, protein, index) in foodInfoList" v-bind:key="index">
        <th>Protein:</th>
        <td>{{foodItem.protein}}</td>
      </tr>
      <p></p>
    </table>
    <p class="info">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sed est dolorum, autem nobis molestiae officia labore totam iure doloribus architecto consequuntur odio pariatur repellendus delectus ea ipsa minus nulla.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sed est dolorum, autem nobis molestiae officia labore totam iure doloribus architecto consequuntur odio pariatur repellendus delectus ea ipsa minus nulla.
    </p>

    <footer></footer>
  </section>
</template>
<script>
const axios = require("axios");

export default {
  props: ["foodID"],
  data() {
    return {
      foodInfoId: this.$route.params.foodID,
      foodInfoList: []
    };
  },
  created() {
    // console.log("FoodInfo page: " + this.$route.params.foodID);
    const self = this;
    axios
      .get("/api/FoodInfo/" + this.foodInfoId)
      .then(function(response) {
        self.foodInfoList.push(...response.data);

        console.log("FoodListInfo: " + JSON.stringify(self.foodInfoList));
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }
};
</script>
<style scoped>
.info {
  padding: 3% 20% 0% 20%;
}
table {
  border-collapse: collapse;
  margin-top: 50px;
  top: 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px grey;
  width: 40%;
  padding-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 20px;
}
#food_Item {
  font-size: 30px;

  text-transform: uppercase;
}

td {
  text-align: start;
  height: 20px;

  font-size: 18px;
}

th {
  text-align: left;
  padding: 15px;
  height: 20px;
  vertical-align: bottom;
  padding-left: 10%;
  font-size: 18px;
}
tr:hover {
  background-color: #f5f5f5;
}
</style>
