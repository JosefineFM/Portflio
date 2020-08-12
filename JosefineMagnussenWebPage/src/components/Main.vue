<template>
  <main class="container">
    <div class="grid-item">
      <img class="image" src="../assets/images/Josefine Magnussen.jpg" alt="Josefine Magnussen" />
    </div>
    <div class="grid-text">
      <h2>Hei</h2>
      <p>Mitt navn er Josefine.</p>
      <p>
        Jeg er en IT-Utvikler fra Larvik, Norge. For det meste bruker jeg tiden
        foran pc der jeg koder for det mest frontend men også en del backend.
        Jeg er altså en full-stack utvikler som er kreativ, nyskjerig og brenner
        for faget sitt.
      </p>
      <div class="vl list">
        <ul style="float: left;">
          <h3>Frontend</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JSON</li>
          <li>Vue.js</li>
        </ul>

        <ul style="float: left;">
          <h3>Backend</h3>
          <li>C#</li>
          <li>ASP.Net core</li>
          <li>PHP</li>
          <li>API i php, asp og json</li>
          <li>SQL</li>
        </ul>
      </div>
      <div class="container-text">
        <div class="contact-button">
          <a href="mailto:josefine.magnussen@hotmail.com" target="_top">Kontakt meg gjerne på mail</a>
        </div>
        <!-- <div class="contact-button">
          <router-link class="link" to="/Projects">
            <span @click="showNavbar = false">Eller se prosjektene mine her.</span>
          </router-link>
        </div> -->
      </div>
      <div class="footer"></div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding-bottom: 20px;
}
.container {
  min-height: 300px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "image content";
  margin-bottom: 150px;
}

.grid-item {
  grid-area: image;
}

.grid-text {
  grid-area: content;
  color: #2b1621;
  height: 300px;
  padding-right: 60px;
  margin-bottom: 200px;
}
.container-text {
  padding-top: 30px;
}

img {
  padding: 3%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

p {
  line-height: 32px;
}
h2 {
  padding-top: 5%;
}
ul {
  list-style-type: none;
}
li {
  padding-top: 10px;
}
.vl {
  border-left: 2px solid #402131;
  height: 300px;
}


@media only screen and (max-width: 800px) {
  .footer {
    padding-bottom: 150px;
  }
  body {
    background-color: lightblue;
  }
  .container {
    margin-bottom: 150px;
    min-height: 300px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "image"
      "content";
  }
  .grid-text {
    grid-area: content;
    color: #2b1621;
    height: 300px;
    margin-bottom: 200px;
    padding-left: 60px;
  }
  .image {
    display: initial;
    margin: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  p {
    padding: 0;
  }
  .vl {
    border-left: 2px solid #402131;
    height: 550px;
  }
}
</style>
