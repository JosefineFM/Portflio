<template>
  <div id="app">
    <header class="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="-16,-30 30,100 110,-30 100,100 0,100" class="svg--lg"></polygon>
      </svg>

      <div id="nav">
        <router-link id="router-link" to="/">Home</router-link>
        <router-link id="router-link" to="/Condition">Condition</router-link>

        <router-link id="router-link" to="/foodtable">Matvaretabellen</router-link>
        <p id="logo">Food</p>
      </div>
    </header>
    <section>
      <router-view/>
    </section>
    <footer></footer>
  </div>
</template>

<style >
@import url("https://fonts.googleapis.com/css?family=PT+Sans&display=swap");
@import "assets/css/wave.css";
footer {
  height: 100px;

  bottom: 0;
}
body {
  margin: 0;
}

p {
  padding-left: 33px;
  font-family: "Montserrat", sans-serif;
  line-height: 150%;
  font-size: 16px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  font-family: "PT Sans", sans-serif;
  border: #235d3a solid 1px;
  border-bottom-left-radius: 20px;
  text-align: left;
  padding: 10px;
  padding-left: 30px;
  text-decoration: none;
}
#nav a:hover {
  color: #ffffff;
  text-shadow: 2px 2px 4px #235d3a;
  background-color: transparent;
}

#nav a {
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #235d3a;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

#logo {
  font-family: "PT Sans", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #cde0c9;
  float: right;
  display: block;
  margin-block-start: 0px;
  padding-right: 30px;
}
</style>
