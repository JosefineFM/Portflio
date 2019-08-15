<template>
  <div id="wrapper">
    <section>
      <div id="main">
        <h3>Your activiti information</h3>
        <p>First Name: {{personprop.firstname}}</p>
        <p>Last Name: {{personprop.lastname}}</p>
        <p>Email: {{personprop.email}}</p>
        <hr>
        <p>Address: {{personprop.address}}</p>
        <p>Gender: {{personprop.gender}}</p>
        <p>Purpose: {{personprop.purpose}}</p>
        <p>Activities: {{personprop.activities.toString()}} (Go back to page 2 to alter choices)</p>
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
        firstname: this.personprop.firstname,
        lastname: this.personprop.lastname,
        email: this.personprop.email,
        address: this.personprop.address,
        gender: this.personprop.gender,
        purpose: this.personprop.purpose,
        activities: this.personprop.activities
      }
    };
  },

  created: function() {
    this.person.firstname = this.personprop.firstname;
    this.person.lastname = this.personprop.lastname;
    this.person.email = this.personprop.email;
    this.person.address = this.personprop.address;
    this.person.gender = this.personprop.gender;
    this.person.purpose = this.personprop.purpose;
    this.person.activities = this.personprop.activities;
  },

  methods: {
  
  }
};
</script>
<style scoped>
h3 {
  font-family: "Hind", sans-serif;
  margin-top: -20px;
  background-color: white;
  width: 200px;
  padding: 10px;
  margin-left: 35%;
}

@media only screen and (max-width: 600px) {
  h3 {
    margin-left: 15%;
  }
}
</style>

