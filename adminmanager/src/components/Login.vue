<template>
  <div class="grid-container">
    <div class="img-container">
      <img src="../assets/img/loginImg.png" alt="LoginImg" />
    </div>
    <div class="login-container">
      <h1>Login</h1>
      <form>
        <div class="input-field">
          <img class="imgIcons" src="../assets/img/message.png" alt="Lock" />
          <input type="text" id="email" v-model="email" placeholder="Email" />
          <!-- <label for="email">Email</label> -->
        </div>
        <div class="input-field">
          <img class="imgIcons" src="../assets/img/lock.png" alt="Lock" />
          <input type="password" id="password" v-model="password" placeholder="Password" />
          <!-- <label for="password">Password</label> -->
        </div>
        <button @click="login(e)" class="button login">Login</button>
      </form>
    </div>
    <!-- <div class="footer-container"></div> -->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data: function() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.go({ path: this.$router.path });
          },

          err => {
            alert("err.message");
          }
        );
      console.log(user);
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.login {
  background-color: #049ff9;
  margin: 0;
}
.input-field {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

input {
   font-size: 20px;
  width: 50%;
  padding: 10px;
  outline: none;
}
.imgIcons {
  width: 40px;
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
}
img {
  padding-top: 20px;
  padding-left: 20px;
  width: 50vmax;
}

.grid-container {
  display: grid;
  grid-template-columns: 60% auto;
}

.img-container {
  /* border: solid black 1px; */
  grid-column: 1;
}

.login-container {
  /* border: solid red 1px; */
  grid-column: 2;
}

.footer-container {
  padding: 30px;
  grid-column: 1 / span 2;
}
</style>