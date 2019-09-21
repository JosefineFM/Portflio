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
          <path d="M0,5 30,5" stroke="#181d45" stroke-width="5" />
          <path d="M0,14 30,14" stroke="#181d45" stroke-width="5" />
          <path d="M0,23 30,23" stroke="#181d45" stroke-width="5" />
        </svg>
      </label>

      <ul class="menu">
        <li>
          <router-link class="NavLink" to="/"> 
                    <span @click="showNavbar = false">HOME</span>

          </router-link>
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
  data() {
    return {

    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap');

ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
  display: inline;
}
.header{
  height: 100px;
  padding: 0 20px;
}
#logo {
  /*font*/
  padding-right: 20px;
  float: left;
  color: #181d45;
  font-family: 'Titillium Web', sans-serif;
  font-size: 45px;
  letter-spacing: -2px;
  text-shadow: 1px 1px 2px #181d45;
}

.menu{
  color: #181d45;
  text-shadow: 1px 1px 2px #125458;
  font-weight: bold;
  float: left;
  padding-top: 20px;
}

.menu .NavLink{
 color: #181d45;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 10px; 
  font-size: 25px;
  padding-top: 25px;
}

.NavLink:hover {
  font-weight: bold;

  text-shadow: 1px 1px 2px #1d8186;
  color: #297b80;
}

.show-menu-btn, .hide-menu-btn{
  padding-top: 4%;
  transition: 0.4s;
  font-size: 30px;
  cursor: pointer;
  display: none;
}

.show-menu-btn{
  float: right;
}

.show-menu-btn svg{
line-height: 100px;
}



#chk{
  margin-top: 10px;
  position: absolute;
  visibility: hidden;
  z-index: -1111;
}

@media screen and (max-width:1000px) {

.show-menu-btn,.hide-menu-btn{
  display: block;
}
.menu .NavLink{
  color: white;
 }
 .NavLink:hover {
  font-weight: bold;
  text-shadow: 1px 1px 2px #1d8186;
  color: #297b80;
}
.menu{
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(24,29,69,);
  background-color: rgba(24,29,69, 0.9);
  right: -100%;
  top: 0;
  text-align: center;
  padding: 80px 0;
  line-height: normal;
  transition: 0.7s;
}

.menu a{
  color: white;
 display: block;
 padding: 20px;
}

.hide-menu-btn{
  position: absolute;
  top: 40px;
  right: 40px;
  
}

#chk:checked ~ .menu{
  right:0;
}
}

</style>

