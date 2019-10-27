<template>
  <div class="edit-employee">
    <h3>Edit Employee</h3>
    <div class="row">
      <form @submit.prevent="updateEmployee()">
        <div class="row">
          <div class="input-field">
            <input disabled type="text" v-model="employee_id" placeholder="Employee ID" required />
          </div>
        </div>

        <div class="row">
          <div class="input-field">
            <input type="text" v-model="name" placeholder="Full Name" required />
          </div>
        </div>

        <div class="row">
          <div class="input-field">
            <input  type="date" v-model="startDate" placeholder="Start Date" required />
          </div>
        </div>

        <div class="row">
          <div class="input-field">
            <input type="text" v-model="dept" placeholder="Department" required />
          </div>
        </div>

        <div class="row">
          <div class="input-field">
            <input type="text" v-model="position" placeholder="Position" required />
          </div>
        </div>

        <div style="margin-top:30px;">
          <button type="submit" class="button save">Submit</button>
          <router-link to="/" class="button cancel">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "../Firebase/firebaseInit";

export default {
  name: "edit-employee",
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null,
      startDate: null
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
                        vm.startDate = doc.data().startDate;

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
             this.startDate = doc.data().startDate;
          });
        });
    },
    updateEmployee() {
      db.collection("employees")
        .where("employee_id", "==", this.$route.params.employee_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                employee_id: this.employee_id,
                name: this.name,
                dept: this.dept,
                position: this.position,
                 startDate: this.startDate
              })
              .then(() => {
                this.$router.push({
                  name: "view-employee",
                  params: { employee_id: this.employee_id }
                });
              });
          });
        });
    }
  }
};
</script>

<style scoped>
h3{
  font-size: 30px; 
}
input{
  width: 100%;
  border: none;
  border-bottom: darkslategray solid 1px;
  margin-right: 10px;
  margin-top: 20px;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=text]:focus {
  background-color: lightblue;
}

.edit-employee{
  padding: 0px 50px 0px 50px;
}
.cancel {
  background-color: #049ff9;
  display: inline-block;
}
.save {
  background-color: green;
  display: inline-block;
}
</style>