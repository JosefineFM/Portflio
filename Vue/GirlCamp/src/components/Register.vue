<template>
  <div id="wrapper">
    <div id="main">
      <h1>Register</h1>
      <p>Enter your information here and your child's information.</p>
      <!-- <button id="loadData" @click="showData()">Load Data</button> -->
      <div class="Parentinfo">
      <p>Parents Information:</p>

      <label class="FullName">Full Name:</label>
      <input id="FullName" type="text" v-model="person.FullName">

      <label for="Email">Email:</label>
      <input id="email" type="text" v-model="person.email">

<label> Adress: </label>
<label> ZipCode</label>
<label> Country</label>
      </div>
      
      <hr>

      <div class="Childesinfo">

      <p>Your Childe Information:</p>
      <p>Full Name :</p>
      <input id="ChildeFullName" type="text" v-model="person.ChildeFullName">

      <p>Age:</p>
      <select name="" id="">
        <option value="">13</option>
        <option value="">14</option>
        <option value="">15</option>
        <option value="">16</option>
        <option value="">17</option>
        <option value="">18</option>
      </select>

      <p>If ther is any other information we should know please inform us:</p>
      <textarea name="extraInfo" class="extraInfo" cols="50" rows="10"></textarea>
      </div>
      <br>
      <button id="saveButton" @click="save()">Save</button>
    </div>
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
        FullName: null,
        email: null
        
      }
    };
  },
  created: function() {
    this.person.FullName = this.personprop.FullName;
    this.person.email = this.personprop.email;
  },
  methods: {
    // async showData() {
    //   const url = "https://api.myjson.com/bins/rhfcg";
    //   const response = await Axios.get(url);
    //   this.person = response.data;
    // },

    save(error) {
      alert("Your information has been saved!");
      console.log(this.person);
      this.$emit("save", this.person);
    }
  }
};
</script>
<style >
</style>
<style scoped >
.Childesinfo{
  border: 1px white solid;
}
.Parentinfo{
  border: 1px white solid;
}
</style>

