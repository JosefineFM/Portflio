<style>
@import "./style/menu.css";
</style>

<template>
  <div>

    <!-- Min meny -->
    <div class="header">
      <a id="logo">Girl Camp</a>

      <input type="checkbox" id="chk" />
      <label for="chk" class="show-menu-btn">
        <svg width="30" height="30">
          <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
          <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
          <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
        </svg>
      </label>

      <ul class="menu">
        <li>
          <router-link class="NavLink" to="/">HOME</router-link>
        </li>
        <li>
          <router-link class="NavLink" to="/OurActivitys">OUR ACTIVITY</router-link>
        </li>
        <li>
          <router-link class="NavLink" to="/Register">REGISTER</router-link>
        </li>

        <li>
          <router-link class="NavLink" to="/Order">ORDER</router-link>
        </li>
        <label for="chk" class="hide-menu-btn">
          <a class="close">Close X</a>
        </label>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async openSlideMenu() {
      console.log("Testen funka");
      // document.getElementById('side-menu').style.width = '250px';
      // document.getElementById('main').style.marginLeft = '250px';
    },

    async closeSlideMenu() {
      console.log("Du lukka menyen");
      // document.getElementById('side-menu').style.width = '0px';
      // document.getElementById('main').style.marginLeft = '0px';
    }
  }
};
</script>

<style>
@import "./style/menu.css";
</style>

