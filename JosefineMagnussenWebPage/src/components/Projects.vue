<template>
  <div class="prosject-container">
    <h1>Mine Prosjekter</h1>
    <section class="card">
      <img src="../assets/images/GirlCamp.png" alt />
      <div>
        <h3>Girl Camp</h3>
        <p>Frontend prosjekt der jeg i hovedsak kun har bruk rammeverket Vue.js.</p>
        <p>Webpage med responsive design.</p>
        <a
          class="links"
          href="https://github.com/JosefineFM/Portflio/tree/master/Vue/girlcamp"
        >Code på GitHub</a>
        <br />
        <a class="links" href="https://girlcamp01.firebaseapp.com/#/">Live Demo</a>
      </div>
    </section>

    <section class="card tablet">
      <img class="img-tablet" src="../assets/images/vue-prod.png"/>
      <div>
        <h3>Employee Manager</h3>
        <p>Webapplikasjon med responsive design</p>
        <p>HTML, CSS, JavaScript og Firebase som database</p>
        <p>
          <span style="font-weight: bold;">Test bruker email:</span>
          test@test.no
        </p>
        <p>
          <span style="font-weight: bold;">Test passord:</span>
          test123
        </p>

        <a
          class="links"
          href="https://github.com/JosefineFM/Portflio/tree/master/adminmanager"
        >Code på GitHub</a>
        <br />
        <a
          class="links"
          href="https://vue-prod-3615c.firebaseapp.com/#/login?redirect=%2F"
        >Live Demo</a>
      </div>
    </section>

    <section class="card">
      <!-- <img src="../assets/images/vue-prod.png" style="width: 400px; padding-top: 15%;" /> -->
      <div>
        <h3>Matvaretabellen</h3>
        <p>Dette jobber jeg med akkurat nå.</p>
        <p>
          <span style="font-weight: bold;">Frontend:</span>
          HTML, CSS og rammeverket Vue.js.
        </p>
        <p>
          <span style="font-weight: bold;">Backend:</span>
          Asp.Net Core og SQL Server.
        </p>
        <a
          class="links"
          href="https://github.com/JosefineFM/Portflio/tree/master/Food%20Tabel"
        >Code på GitHub</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import "../assets/Style/projects.css";
</style>
