<template>
  <div id="wrapper">
    <section>
      <div id="main">
        <router-link class="backToPage" to="Activity">Back</router-link>

        <h1>Your Order</h1>

        <h2>Parents Information:</h2>
        <hr>
        <p>Parent Name: {{personprop.FullName}}</p>
        <p>Email: {{personprop.Email}}</p>
        <p>Address: {{personprop.Address}}</p>
        <p>ZipCode: {{personprop.ZipCode}}</p>
        <p>City: {{personprop.City}}</p>
        <p>Country: {{personprop.Country}}</p>

        

        <hr>
        <h2>Your Childe Information:</h2>
        <p>FullName: {{personprop.ChildeFullName}}</p>
        <p>Email: {{personprop.ChildeEmail}}</p>
        <p>Gender: {{personprop.Gender}}</p>
        <p>Age: {{personprop.Age}}</p>
        <p>Additional Information: {{personprop.Message}}</p>
        <p>Activities: {{personprop.activities.toString()}}</p>
      
      <hr>
<button @click="seYourOrder()"> Send us you booking</button>
      </div>
    </section>
    <footer>
    </footer>
  </div>
</template>


<script>
import Axios from "axios";
export default {
  name: "LoadData",
  props: ["personprop"],
  data() {
    return {
      person: {
        FullName: this.personprop.FullName,
        Email: this.personprop.Email,
        Address: this.personprop.Address,
        ZipCode: this.personprop.ZipCode,
        City: this.personprop.City,
        Country: this.personprop.Country,
        ChildeFullName: this.personprop.ChildeFullName,
        ChildeEmail: this.personprop.ChildeEmail,
        Gender: this.personprop.gender,
        Age: this.personprop.Age,
        Message: this.personprop.Message,
        activities: this.personprop.activities
      }
    };
  },
  methods: {
      seYourOrder(){
      console.log("New Page");
      this.$router.push("OrderSendt");

    }
  }
};
</script>
<style scoped>

</style>

