<template>
  <div class="dashboard">
        <h2>Employees</h2>
        <table>
            <tr>
  <th>Department</th>
  <th>Id</th>
  <th>Name</th>
  <th></th>
  </tr>
  <tr v-for="employee in employees" v-bind:key="employee.id">
  <td class="chip">{{employee.dept}}</td>
  <td>{{employee.employee_id}}</td>
  <td> {{employee.name}}</td>
  <td>
    <router-link class="button" v-bind:to="{name: 'view-employee', params: {employee_id: employee.employee_id}}">
     Edit
    </router-link>
    
    </td>
  </tr>
        </table>
      <router-link to="/new">
        <img src="../assets/img/plus.png" class="plus" />
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../Firebase/firebaseInit.js";

export default {
  name: "dashboard",
  data() {
    return {
      employees: []
    };
  },

  created() {
    db.collection("employees")
     .orderBy("dept")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          //  console.log(doc.data());
          const data = {
            id: doc.id,
            employee_id: doc.data().employee_id,
            name: doc.data().name,
            dept: doc.data().dept,
            position: doc.data().position
          };
          this.employees.push(data);
          // console.log(this.employees);
        });
      });
  }
};
</script>
<style scoped>
/* Img on the button on the page */
.chip {
  margin-top: 10px;
  display: inline-block;
  padding: 0 20px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #8ca3a3;
  color: white;
}
.edit:hover{
  background-color: #049ff9;
  box-shadow: 0px 0px 9px #0425f9;
}
.button{
  margin-left: 10%;
  background-color: #049ff9;
}
/* .plus {
  height: 60px;
  position: absolute;
  bottom: 8px;
  right: 16px;
} */
table {
  width: 99%;
    border-collapse: collapse;
    margin-right: 20px;
}
th {
  height: 50px;
  padding: 15px;
  text-align: left;
   border-bottom: 1px solid #ddd;
}
tr:hover {background-color: #f5f5f5;}
</style>