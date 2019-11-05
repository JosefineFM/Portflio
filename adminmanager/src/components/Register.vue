<template>
  <div>
    <div>
      <form>
        <h1>Register</h1>
        <div class="input-field">
          <img class="imgIcons" src="../assets/img/message.png" alt="Lock" />
          <input type="text" id="email" v-model="email" placeholder="Email" />
        </div>
        <div class="input-field">
          <img class="imgIcons" src="../assets/img/lock.png" alt="Lock" />
          <input type="password" id="password" v-model="password" placeholder="Password" />
        </div>
        <button @click.prevent="register()" class="button login">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "register",
  data: function() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert("err.message");
          }
        );
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
  width: 40%;
  padding: 10px;
  outline: none;
  
}
.imgIcons {
  width: 40px;
  padding: 10px;
  background: dodgerblue;
  color: white;
  /* min-width: 50px; */
    margin-top: 15%;
  text-align: center;
  margin: 0;
}
img {
  margin-top: 3%;
  margin-left: 20px;
  width: 50vmax;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
form{
  margin-left: 32%;
    margin-top: 15%;
}
</style>