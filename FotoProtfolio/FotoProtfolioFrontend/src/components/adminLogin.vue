<template>
  <div>
    <div class="login">
      <router-link class="button" to="/">Tilbake</router-link>
      <h2> Admin </h2>
      <p> E-mail:</p>
      <input v-model="email" type="text" placeholder="Email" />
      <p> Passord:</p>
      <input v-model="password" type="password" placeholder="Passord" />
      <br />
      <button @click="login"> Login </button>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
        isLoggedIn: true
      }
    },
    methods: {
      login: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace({ name: 'admin' })
            this.$emit('loggedin');
          },
          function (err) {
            alert('Opps. ' + err.message)
          });
      }
    }
  }

  
</script>

<style>
 
  .login {
    width: 75%;
    padding-right: 10px;
    float: right;
    padding: 15px;
    height: 100%;
    top: 0;
  }

  input {
    padding-top: 20px;
    padding-left: 10px;
  }
</style>
