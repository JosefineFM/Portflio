<template>
  <main class="container">
    <div class="grid-item">
      <img class="image" src="../assets/images/IMG_0846.jpg" alt="Josefine Magnussen" />
    </div>
    <div class="grid-text">
      <h2>Om Josefine</h2>
      <!-- <p>timeline</p> -->
      <p>
        I 2018 startet jeg på GET Academy i Larvik på kurset Start It for og lære meg programmering.
        Der programmerte jeg mest HTML, CSS og Javascript.
      </p>
      <p>
        Fra August 2018 til Juni 2019 ble jeg tilbud et års studie på GET Academy.
        Der jobbet jeg med både PHP, C#, ASP .Net core, SQL (PostgreSQL, MySQL og SQL Server).
        Jeg har også jobbet litt med Bootstrap og Vuetify.
        Rammeverk er jeg mest vant til å bruke Vue.js.
      </p>
      <p>
        For det meste har jeg brukt PHP og ASP.Net core til å lage RESTapiet og bruke
        Vue.js som frontend rammeverk.
      </p>
      <p>
        Grunnen til at jeg liker IT-Utvikling er at det er spennende, nytenkende og ikke mins så lærer man seg noe nytt vær dag.
        Jeg har alltid vært nysgjerrig og interessert i tek.
        Men mest av alt så for jeg jobbe med noe jeg liker og brenner for.
      </p>
      <a href="mailto:josefine.magnussen@hotmail.com" target="_top">Kontakt meg gjerne på mail.</a>
      <!-- <router-link class="link"  to="/projects"> Mine prosjekter</router-link> -->
    </div>
  </main>
</template>

<style scoped>

a{
  color: #402131;
  font-size: 20px;
}
a:hover{
  color: grey;
  font-size: 20px;
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

}
img {
   padding: 3%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
 a{
    padding-bottom: 100px;
    text-decoration: none;
    font-weight: bold;
 }
 a:hover{
   color: purple;
 }
@media only screen and (max-width: 800px) {
  .container {
    min-height: 300px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "image"
      "content";
       margin-bottom: 150px;
  }
  .grid-text {
    grid-area: content;
    color: #2b1621;
    height: 300px;
    margin-bottom: 150px;
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
 a{
    padding-bottom: 100px;
 }

}
</style>
