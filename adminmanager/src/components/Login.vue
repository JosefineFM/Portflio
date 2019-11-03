<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-2">
          <div class="login card-panel green white-text center">
            <h3>Login</h3>
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
              <button @click="login(e)" class="button">Login</button>
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
            this.$router.go({ path: this.$router.path })
       
          },

          err => {
            alert("err.message");
          },
        );     console.log(user);
      e.preventDefault();
    }
  }
};
</script>