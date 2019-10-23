<template>
  <div class="FoodTable-wrapper">
    <section id="foodtable">
      <div id="navbar">
        <a
          @click="foods(foodItem.foodID)"
          v-for="(foodItem, foodID) in category"
          v-bind:key="foodID"
        >{{foodItem.food_Item}}</a>
      </div>

      <div class="searchForFood">
        <img class="search-png" src="../assets/img/search.png">
        <input type="text" v-model="search" placeholder="Search" class="search-input">
      </div>

      <div id="tablefood">
        <p
          @click="foodInfo(foodItem.foodID)"
          v-for="(foodItem, foodID) in filteredFoods"
          v-bind:key="foodID"
        >{{foodItem.food_Item}}</p>
      </div>
    </section>
    <footer></footer>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      category: [],
      foodID: "",
      foodList: [],
      search: ""
    };
  },
  created() {
    const self = this;

    axios
      .get("/api/FoodCategory")
      .then(function(response) {
        self.category.push(...response.data);

        console.log(response.data);
        // console.log(self.category[0].foodID);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  },
  methods: {
    foods(foodID) {
      this.foodList.length = 0;
      const self = this;
      // console.log("click: " + foodID);

      axios
        .get("api/Food/" + foodID)
        .then(function(response) {
          // console.log("Data: " + response.data);

          self.foodList.push(...response.data);

          // console.log("FoodListInfo: " + JSON.stringify(self.foodList));
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
    },

    foodInfo(foodID) {
      // console.log("FoodInfo: " + foodID);
      this.$router.push({ name: "foodInfo", params: { foodID: foodID } });
      // console.log("The id is: " + this.$route.params.foodID);
    }
  },
  computed: {
    filteredFoods: function() {
      return this.foodList.filter(foodItem => {
        return foodItem.food_Item.match(this.search);
      });
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400&display=swap");

.searchForFood {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  /* display: flex; */
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.search-input {
  padding: 10px;
  font-size: 17px;
  border: none;
  border-bottom: #094c59 1px solid;
  width: 300px;
  display: inline-block;
}

.search-png {
  display: inline-block;
  width: 20px;
  padding: 10px;
  font-size: 17px;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
  vertical-align: middle;
}

a {
  margin-left: 0.5px;
}

#tablefood {
  cursor: pointer;
}
#navbar {
  width: 100%;
  padding: 10px;
  font-family: "PT Sans", sans-serif;
  text-align: left;
  padding: 10px;
  padding-left: 30px;
  text-decoration: none;
}
#navbar a {
  border-top-left-radius: 10px;
  padding: 5px 10px 5px 10px;
  font-size: 20px;
  border: solid #094c59 1.5px;
  color: #094c59;
  font-family: "PT Sans", sans-serif;
  font-size: 15px;
}

#navbar a:hover {
  color: #094c59;
  text-shadow: 2px 2px 4px #094c59;
  background-color: transparent;
}

#nav a {
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #094c59;
  text-decoration: none;
}
</style>
