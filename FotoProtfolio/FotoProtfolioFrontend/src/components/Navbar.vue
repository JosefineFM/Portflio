<template>
  <div class="Navbar">
    <ul>
      <li> <router-link to="/"> Josefine Magnussen </router-link></li>
      <li class="Navlink">
        <router-link to="/Contact">Contact</router-link>
      </li>
      <li class="Navlink">|</li>
      <li class="Navlink">
        <router-link to="/Work">Work</router-link>
      </li>
    </ul>
  </div>
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