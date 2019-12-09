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
              <p>Handball</p>
              <label class="switch">
                <input
                  type="checkbox"
                  name="activites"
                  value="Handball"
                  :disabled="person.activities.length >= 2 && !person.activities.includes('Handball')"
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

        <p v-if="errors.lengt" >
          <h3>Please select an activity:</h3>
          <ul>
            <li v-for="error in errors">{{error}}</li>
          </ul>
        </p>

        <button id="saveButton" @click="save()">SAVE</button>
        <button class="goToActivity"  v-show="isEditing"  @click="goToActivity()">SE YOUR ORDER</button>
      </div>
    </section>
    <footer></footer>
  </div>
</template>
<script>
export default {
  name: "LoadData",
  props: ["personprop"],
  data() {
    return {
      errors: [],
      isEditing: false,
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
        this.errors.push('Select an activity!')
      } else {
        this.isEditing = true;
      }
    },
        goToActivity(){
      this.$router.push("Order");

    }
  }
};
</script>

<style>
@import "../assets/style/checkbox.css"; 
</style>

<style scoped>
button{
   margin-right: 30px;
}
.goToActivity{
margin-top: 20px;
}
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-left: 20px;
  }
.childeName {
  padding-left: 15px;
  font-weight: bold;
}

.activity td {
  padding: 0px 50px 30px 0px;
}
@media only screen and (max-width: 1000px) {
  button{
     margin-right: auto;
  }
  .childeName{
    padding-right: 30px;
  }
}
</style>


