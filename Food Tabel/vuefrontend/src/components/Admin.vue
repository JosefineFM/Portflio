<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="email" placeholder="email" v-model="email">
    <input type="password" name="password" placeholder="Password" v-model="password">
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      admin: null

      // email: [],
      // password: [],
      // admin: []
    };
  },
  methods: {
    login: function() {
      var inputValues = {
        email: this.email,
        password: this.password
      };

      console.log("Input" + JSON.stringify(inputValues));

      const self = this;

      axios
        .post("/api/Login", inputValues)
        .then(function(response) {
          console.log("Response data: " + JSON.stringify(response.data));
        })
        .catch(function(error) {
          console.log(error);
        });

      //   axios
      //     .post("/api/Login/" + inputValues)
      //     .then(function(response) {
      //       console.log("Response data: " + JSON.stringify(response.data));

      //       self.admin = response.data;

      //       console.log("Response Admin: " + response.data.admin);
      //     })
      //     .catch(function(error) {
      //       // handle error
      //       console.log(error);
      //     })
      //     .finally(function() {
      //       // always executed
      //     });
    }
  }
};
</script>
<style scoped>
.login {
}
</style>
