<template>
  <div class="body">
    <header>
      <div class="header__bg"></div>
      <h1 class="header"> Fix på bestillinger </h1>
    </header>
    <section>
      <div class="edit">
        <router-link to="/admin"> Tilbake </router-link>
        <div class="input">
          <input type="text" v-model="name">
        </div>
        <div class="input">
          <textarea v-model="message"></textarea>
        </div>
        <div class="input">
          <input type="date" v-model="date">
        </div>
        <div class="input">
          <input type="text" v-model="price">
        </div>
        <div class="input">
          <input type="text" v-model="email">
        </div>
      </div>
      <button @click="editOrder()">Submit</button>
      <button @click="deleteOrder()">Delete</button>
    </section>
  </div>
</template>
<script>
import firebase from "firebase";
import db from "@/fb";

export default {
  name: "edit",
  data() {
    return {
      name: null,
      message: null,
      date: null,
      price: null,
      email: null
    };
  },

  beforeRouteEnter(to, from, next) {
    db.collection("order")
      .where("name", "==", to.params.name)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.name = doc.data().name;
            vm.message = doc.data().message;
            vm.date = doc.data().date;
            vm.price = doc.data().price;
            vm.email = doc.data().email;
          });
        });
      });
  },

  methods: {
    deleteOrder() {
      if (alert("Er du sikker!")) {
        db.collection("order")
          .where("name", "==", this.$route.params.name)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/admin");
            });
          });
      }
    },
    fetdata() {
      db.collection("order")
        .where("name", "==", this.$route.params.name)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.name = doc.data().name;
            this.message = doc.data().message;
            this.date = doc.data().date;
            this.price = doc.data().price;
            this.email = doc.data().email;
          });
        });
    },

    editOrder() {
      db.collection("order")
        .where("name", "==", this.$route.params.name)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                name: this.name,
                message: this.message,
                date: this.date,
                price: this.price,
                email: this.email
              })
              .then(() => {
                this.$router.push({
                  name: "edit",
                  params: { name: this.name }
                });
              });
          });
        });
    }
  }
};
</script>

<style scoped>
  @import "../assets/main.css";
  @import "../assets/adminHeader.css";
  input, textarea {
    padding-top: 30px;
    font-family: "Quicksand", sans-seri;
  }
  .body {
    margin: 0;
  }
  section {
    padding: 150px 0px 20px 30px;
  }
  button {
    display: inline;
    padding-left: 20px;
  }
</style> 
