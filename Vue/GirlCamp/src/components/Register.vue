<template>
  <div id="wrapper">
    <div id="main">
      <h1>Register</h1>
      <p>Enter your information here and your child's information.</p>
      <!-- <button id="loadData" @click="showData()">Load Data</button> -->
      <div class="Parentinfo">
        <h2>Parents Information:</h2>

        <table>
          <tr>
            <td>
              <label class="FullName">Full Name:</label>
            </td>
            <td>
              <input type="text" v-model="person.FullName" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="Email">Email:</label>
            </td>
            <td>
              <input type="text" v-model="person.Email" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Adress:</label>
            </td>
            <td>
              <input type="text" v-model="person.Address" />
            </td>
          </tr>
          <tr>
            <td>
              <label>ZipCode:</label>
            </td>
            <td>
              <input type="text" v-model="person.ZipCode" />
            </td>
          </tr>
          <tr>
            <td>
              <label>City:</label>
            </td>
            <td>
              <input type="text" v-model="person.City" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Country:</label>
            </td>
            <td>
              <input type="text" v-model="person.Country" />
            </td>
          </tr>
        </table>
      </div>

      <hr />

      <div class="Childesinfo">
        <h2>Your Childe Information:</h2>
        <table>
          <tr>
            <td>
              <label>FullName:</label>
            </td>
            <td>
              <input type="text" v-model="person.ChildeFullName" required />
            </td>
          </tr>

          <tr>
            <td>
              <label>Email:</label>
            </td>
            <td>
              <input type="text" v-model="person.ChildeEmail" required />
            </td>
          </tr>

          <tr>
            <td>
              <label>Gender:</label>
            </td>
            <td>
              <select v-model="person.Gender">
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label>Age:</label>
            </td>
            <td>
              <div class="age-select" style="width:200px;">
              <select v-model="person.Age">
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
              </select>
              </div>
            </td>
          </tr>
        </table>

        <p>
          If ther is any other information we should know please
          inform us about diseases or allergies that we need to
          know:
        </p>
        <textarea v-model="person.Message" name="extraInfo" class="extraInfo" cols="50" rows="10"></textarea>
      </div>
      <br />

 <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

      <button id="saveButton" @click="save()">SAVE</button>
      <button v-show="isEditing" @click="goToActivity()">SELECT ACTIVITY</button>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "LoadData",
  props: ["personprop"],
  data: {
// isShowing:true,
  },
  data() {
    return {
        errors: [],
      isEditing: false,
      person: {
        FullName: null,
        Email: null,
        Address: null,
        ZipCode: null,
        City: null,
        Country: null,
        ChildeFullName: null,
        ChildeEmail: null,
        Gender: null,
        Age: null,
        Message: null
      }
    };
  },
  created: function() {
    this.person.FullName = this.personprop.FullName;
    this.person.Email = this.personprop.Email;
    this.person.Address = this.personprop.Address;
    this.person.ZipCode = this.personprop.ZipCode;
    this.person.City = this.personprop.City;
    this.person.Country = this.personprop.Country;
    this.person.ChildeFullName = this.personprop.ChildeFullName;
    this.person.ChildeEmail = this.personprop.ChildeEmail
    this.person.Gender = this.personprop.Gender;
    this.person.Age = this.personprop.Age;
    this.person.Message = this.personprop.Message;
  
  },
  methods: {
    // async showData() {
    //   const url = "https://api.myjson.com/bins/rhfcg";
    //   const response = await Axios.get(url);
    //   this.person = response.data;
    // },

    save(e) {
       if (this.person.FullName ) {
      console.log(this.person);
      this.$emit("save", this.person);
      this.isEditing = true;
      }

      this.errors = [];

      if (!this.person.FullName) {
        this.errors.push('Name required.');
      }



      
    }
     
    },

    goToActivity(){
      console.log("New Page");
      this.$router.push("Activity");

    }
  
};
</script>

<style scoped >
td,
th {
  text-align: left;
  padding: 5px 5px 5px 10px;
}
input[type=text]:focus {
  background-color: lightblue;
  
}
select {
  width: 150px;
  border: none;
  border-radius: 4px;
  padding: 5px;
  background-color: #f1f1f1;
}
</style>

