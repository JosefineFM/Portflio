<template>
  <div id="wrapper">
    <section>
      <div id="main">
        <router-link class="backToPage" to="register">Back</router-link>

        <h2>Edit your information</h2>

        <table>
          <tr>
            <td>
              <p>The childe that you are chosing the activity for:</p>
            </td>
            <td>
              <p class="childeName">{{personprop.ChildeFullName}}</p>
            </td>
          </tr>
        </table>

        <hr />

        <p>Choose one or two activites.</p>

        <table class="activity">
          <tr>
            <td>
              <p>Football:</p>
              <label class="switch">
                <input
                  type="checkbox"
                  value="Football"
                  :disabled="person.activities.length >= 2 && !person.activities.includes('football')"
                  v-model="person.activities"
                />
                <span class="slider round"></span>
              </label>
            </td>
            <td>
              <p>Basketball</p>
              <label class="switch">
                <input
                  type="checkbox"
                  name="activites"
                  value="Basketball"
                  :disabled="person.activities.length >= 2 && !person.activities.includes('basketball')"
                  v-model="person.activities"
                />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <p>Tennis</p>
              <label class="switch">
                <input
                  type="checkbox"
                  name="activites"
                  value="Tennis"
                  :disabled="person.activities.length >= 2 && !person.activities.includes('tennis')"
                  v-model="person.activities"
                />
                <span class="slider round"></span>
              </label>
            </td>
            <td>
              <p>E-sport</p>
              <label class="switch">
                <input
                  type="checkbox"
                  name="activites"
                  value="E-sports"
                  :disabled="person.activities.length >= 2 && !person.activities.includes('e-sports')"
                  v-model="person.activities"
                />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
        </table>

        <br />
        <button id="saveButton" @click="save()">Save</button>
      </div>
    </section>
    <footer></footer>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "LoadData",
  props: ["personprop"],
  data() {
    return {
      person: {
        FullName: this.personprop.FullName,
        Email: this.personprop.Email,
        Address: this.personprop.Address,
        ZipCode: this.personprop.ZipCode,
        City: this.personprop.City,
        Country: this.personprop.Country,

        ChildeFullName: this.personprop.ChildeFullName,
        ChildeEmail: this.personprop.ChildeEmail,
        Gender: this.personprop.Gender,
        Age: this.personprop.Age,
        Message: this.personprop.Message,

        activities: []
      }
    };
  },
  created: function() {
    this.person.FullName = this.personprop.FullName;
    this.person.lastname = this.personprop.lastname;
    this.person.email = this.personprop.email;
    this.person.address = this.personprop.address;
    this.person.gender = this.personprop.gender;
    this.person.purpose = this.personprop.purpose;
  },

  methods: {
    save(error) {
      this.$emit("save", this.person);

      if (this.person.activities.length == 0) {
        alert("You have to select atleast one activity.");
      } else {
        alert("Your information has been saved!");
      }
    }
  }
};
</script>

<style>
@import "../Assets/style/checkbox";
</style>

<style scoped>
.childeName {
  padding-left: 15px;
}
/* .activity p{
  color: pink;
} */
.activity td {
  color: pink;
  padding: 0px 50px 30px 0px;
}
</style>


