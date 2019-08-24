<template>
  <div id="app">
    <header>
      <NavBar></NavBar>
    </header>
    <router-view :personprop="person" @save="save" />
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../src/Assets/Nav.vue";
import Footer from "../src/Assets/Footer";

export default {
  name: "App",
  components: {
    NavBar: NavBar,
    Footer: Footer
  },
  data: function() {
    return {
      person: {
        FullName: "",
        Email: "",
        Address: "",
        ZipCode: "",
        City: "",
        Country: "",
        ChildeFullName: "",
        ChildeEmail: "",
        Gender: "",
        Age: "",
        Message: "",
        activities: []
      }
    };
  },
  methods: {
    save: function(fromComponent) {
      this.person.FullName = fromComponent.FullName;
      this.person.Email = fromComponent.Email;
      this.person.Address = fromComponent.Address;
      this.person.ZipCode = fromComponent.ZipCode;
      this.person.Country = fromComponent.Country;
      this.person.City = fromComponent.City;
      this.person.ChildeFullName = fromComponent.ChildeFullName;
      this.person.ChildeEmail = fromComponent.ChildeEmail;
      this.person.Gender = fromComponent.Gender;
      this.person.Age = fromComponent.Age;
      this.person.Message = fromComponent.Message;
      this.person.activities = fromComponent.activities;
    }
  }
};
</script>

<style>
@import "./Assets/style/main";
</style>
