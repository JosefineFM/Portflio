<template>
  <div class="body">
    <header>
      <div class="header__bg"></div>
      <h1 class="header"> Velkomen </h1>
    </header>
    <section>

      <table>
        <button @click="logout">Logut</button>
        <p>Dinne siste bestillinger:</p>
        <tr class="toppTable">
          <th>Name</th>
          <th>Notater</th>
          <th>Dato</th>
          <th>Pakke</th>
          <th>Email</th>
          <th></th>
        </tr>
        <tr v-for="order in orders" v-bind:key="orders.name">
          <td>
            <p>{{order.name}}</p>
          </td>
          <td>
            <p>{{order.message}}</p>
          </td>
          <td>
            <p>{{order.date}}</p>
          </td>
          <td>
            <p>{{order.price}}</p>
          </td>
          <td>
            <p class="email">{{order.email}}</p>
          </td>
          <td>
            <router-link class="editOrder" v-bind:to="{name:'edit', params:{name: order.name}}">Edit</router-link>
          </td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/fb";

export default {
  name: "admin",
  data() {
    return {
      orders: []
    };
  },

  created() {
    db.collection("order")
      .orderBy("date")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            name: doc.data().name,
            message: doc.data().message,
            date: doc.data().date,
            price: doc.data().price,
            email: doc.data().email
          };
          this.orders.push(data);
        });
      });
  },

  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("adminLogin");
          this.$emit("loggedut");
        });
    }
  }
};
</script>


<style scoped>
@import "../assets/adminHeader.css";
  h1 {
    font-size: 38px;
  }
  editOrder {
    font-family: "Quicksand", sans-seri;
    font-size: 18px;
  }
  botten {
    display: inline-block;
  }

  .body {
    margin: 0;
  }

p {
  font-family: "Quicksand", sans-seri;
  font-size: 18px;
}
.toppTable {
  text-align: left;
  font-size: 20px;
}

table,
th,
td {
  border-bottom: 1px solid #ddd;
  padding: 20px;
}

select {
  width: 100%;

  border: none;
  font-family: "Quicksand", sans-seri;
  font-size: 18px;
}
.preview-content {
  border: 1px solid #999;
  display: inline-block;
}

  
</style>
