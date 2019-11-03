<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-2">
          <div class="register card-panel gray white-text center">
            <h3>Register</h3>
            <form>
              <div class="input-field">
                <i class="material-icons prefix">Email</i>
                <input type="text" id="email" v-model="email" />
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password" />
                <label for="password">Password</label>
              </div>
              <button @click.prevent="register()" class="button">Register</button>
            </form>
          </div>
        </div>
      </div>
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
            this.$router.go({path: this.$router.path});
          },
          err => {
            alert("err.message");
          }
        );
    }
  }
};
</script>