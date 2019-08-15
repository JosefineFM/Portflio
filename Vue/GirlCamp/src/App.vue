<template>
  <div id="app">
    <header>

      <NavBar></NavBar>
    </header>
    <router-view :personprop="person" @save="save"/>
  <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../src/Assets/Nav.vue";
import Footer from "../src/Assets/Footer";

 export default {
   name: "App",
   components:{
     'NavBar': NavBar,
     'Footer': Footer
   },
   data: function() {
     return {
      person: {
        FullName: "",
        email: "",
        address: "",
        gender: "",
        purpose: "",
        activities: []
      }
    };
  },
  methods: {
    save: function(fromComponent) {
      this.person.FullName = fromComponent.FullName;
      this.person.email = fromComponent.email;
      this.person.address = fromComponent.address;
      this.person.gender = fromComponent.gender;
      this.person.purpose = fromComponent.purpose;
      this.person.activities = fromComponent.activities;
    },
    // async indexPage(){
    //    this.$emit("save", this.person);
    //   this.$router.push("/");
    // },

    async OurActivitys(){
      this.$emit("save", this.person);
      this.$router.push("OurActivitys");
    },
    
    async goPage1() {
      this.$emit("save", this.person);
      this.$router.push("Register");
    },


    async goPage2() {
      this.$emit("save", this.person);
      this.$router.push("Activity");
    },

    async goPage3() {
      this.$emit("save", this.person);
      this.$router.push("Order");
    }
  }
};
 </script>

<style>
@import "./Assets/style/main";
</style>
