<template>
  <div class="Navbar">
    <ul>
      <li>Josefine Magnussen</li>
      <li class="Navlink">
        <router-link to="#">Contact</router-link>
      </li>
      <li class="Navlink">|</li>
      <li class="Navlink">
        <router-link to="#">Work</router-link>
      </li>
    </ul>
  </div>
  <!-- <div class="menu" v-if="!isLoggedIn">
  <div class="link">-->
  <!-- <img class="logo" src="/api/Image/2"> 
        <router-link v-if="isLoggedIn" class="button" to="/natur">Natur</router-link>
        <router-link v-if="!isLoggedIn" class="button" to="/natur">Natur</router-link>
         <a href="#">Reklame - funker ikke</a>
        <a href="#">Bedrifter - funker ikke</a>
        <router-link v-if="!isLoggedIn" class="button" to="/family">Familie</router-link>
        <router-link v-if="!isLoggedIn" class="button" to="/about">Om</router-link>
  <router-link v-if="!isLoggedIn" class="button" to="/contact">Bestill time</router-link>-->
</template>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  line-height: 42px;
  padding: 20px 40px 0px 40px;
  font-size: 35px;
  float: left;
}

li a {
  display: block;
}
/* mouse over link */
li a:hover {
  letter-spacing: 3px;
  transition: 0.5s;
}
/* unvisited link */
a:link {
  color: black;
}

.Navlink {
  float: right;
}
</style>