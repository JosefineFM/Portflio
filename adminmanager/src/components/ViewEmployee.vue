<template>
  <div class="view-employee">
    <h2 style=" margin-left: 10%;">View Employee</h2>
    <table>
      <tr>
        <th>Name:</th>
        <td>{{name}}</td>
      </tr>
      <tr>
        <th>Employee ID:</th>
        <td>{{employee_id}}</td>
      </tr>
      <tr>
        <th>Department:</th>
        <td>{{dept}}</td>
      </tr>
      <tr>
        <th>Position:</th>
        <td>{{position}}</td>
      </tr>
    </table>
    <div class="buttons">
      <router-link to="/" class="button back">Back</router-link>
      <button class="delete" @click="deleteEmployee()">Delete</button>

      <router-link v-bind:to="{name: 'edit-employee', 
      params:{employee_id:employee_id}}">
        <img src="../assets/img/user.png" class="plus" />
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../Firebase/firebaseInit";

export default {
  name: "view-employee",
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null
    };
  },

  beforeRouteEnter(to, from, next) {
    db.collection("employees")
      .where("employee_id", "==", to.params.employee_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.employee_id = doc.data().employee_id;
            vm.name = doc.data().name;
            vm.dept = doc.data().dept;
            vm.position = doc.data().position;
          });
        });
      });
  },

  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("employees")
        .where("employee_id", "==", this.$route.params.employee_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.employee_id = doc.data().employee_id;
            this.name = doc.data().name;
            this.dept = doc.data().dept;
            this.position = doc.data().position;
          });
        });
    },

    deleteEmployee() {
      if (confirm("Are you sure?")) {
        db.collection("employees")
          .where("employee_id", "==", this.$route.params.employee_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/");
            });
          });
      }
    }
  }
};
</script>

<style scoped>
.back {
  background-color: #049ff9;
  margin-left: 10%;
}

table {
  margin-bottom: 5%;
  margin-left: 10%;
  margin-right: 30%;
  text-align: left;
  width: 20%;
  border-collapse: collapse;
  margin-right: 20px;
}
tr {
  border-bottom: 1px solid #ddd;
}

th {
  height: 50px;
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
tr:hover {
  background-color: #f5f5f5;
}
</style>