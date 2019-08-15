<template>
  <div id="wrapper">
    <section>
      <div id="main">
        <h3>Edit your information</h3>
        <p>
        Name: {{personprop.FullName}}
        </p>
        <p>
          Email:
          {{personprop.email}}
        </p>
        <hr>
        <p>Address:</p>
        <input
          id="address"
          type="text"
          v-model="person.address"
          maxlength="50"
          placeholder=" Max 50 characters"
        >
        <p>Gender:</p>
        <input type="radio" name="gender" value="Male" v-model="person.gender"> Male
        <input type="radio" name="gender" value="Female" v-model="person.gender">
        Female
        <p>Purpose:</p>
        <select v-model="person.purpose">
          <option value="Business">Business</option>
          <option value="Pleasure">Pleasure</option>
          <option value="Both">Both</option>
        </select>

        <p>Choose one or two activites.</p>
        <input
          type="checkbox"
          name="activites"
          value="Football"
          :disabled="person.activities.length >= 2 && !person.activities.includes('football')"
          v-model="person.activities"
        >
        <label>Football</label>
        <input
          type="checkbox"
          name="activites"
          value="Basketball"
          :disabled="person.activities.length >= 2 && !person.activities.includes('basketball')"
          v-model="person.activities"
        >
        <label>Basketball</label>
        <input
          type="checkbox"
          name="activites"
          value="Tennis"
          :disabled="person.activities.length >= 2 && !person.activities.includes('tennis')"
          v-model="person.activities"
        >
        <label>Tennis</label>
        <input
          type="checkbox"
          name="activites"
          value="E-sports"
          :disabled="person.activities.length >= 2 && !person.activities.includes('e-sports')"
          v-model="person.activities"
        >
        <label>E-sports</label>
        <br>
        <button id="saveButton" @click="save()">Save</button>
      </div>
    </section>
    <footer>
    </footer>
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
        lastname: this.personprop.lastname,
        email: this.personprop.email,
        address: null,
        gender: null,
        purpose: null,
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
<style scoped>
.gender {
  display: inline;
  margin-left: -90px;
  margin-right: -90px;
}

input[type="radio" i] {
  margin: 0px 0px 0px 0px;
}
input[type="checkbox" i] {
  width: 20px;
}
h3 {
  margin-left: 35%;
}

@media only screen and (max-width: 600px) {
  h3 {
    margin-left: 15%;
  }
  input[type="text" i] {
    width: 200px;
    margin-left: 20px;
  }

  #facebook {
    display: none;
  }
  input[type="checkbox" i] {
    margin: 0px 0px 0px 0px;
    width: 20px;
  }
}
</style>


