<template>
  <div class="grid-container">
    <div class="grid-img">
      <img class="svgImage" src="../assets/img/undraw_super_woman_dv0y.svg" /> 
    </div>
    <div class="grid-info">
      <h1>Welcome our Girl Camp</h1>
      <p>
        We teach them growth mindset. That failure is an opportunity to grow. That we can learn to do anything we want, different challenges help them to grow, that effort and attitude determine their abilities, end that feedback is constructive end the best ting is to try out new things.
        So, they will have the opportunity these three weeks and try other activities than just the one they are here for.
      </p>
      <p>
        So take a look at our
        <u style="cursor:pointer" @click="goToOutActivitys()">activities.</u>
      </p>
      <button @click="goPage1()">REGISTER</button>
    </div>
    <div class="grid-blogg">
      <h1>OUR BLOG</h1>
      <div class="blog-content">
        <!-- Første blogg innlegg -->
        <h1>See our campus and the city of Stockholm</h1>
        <p>
          <img src="../assets/img/desktop_Desktop_347815.png" alt="Stockholm" /> 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore veritatis voluptate voluptas sunt accusantium, autem eius assumenda fugit perspiciatis? Laudantium dicta incidunt quia tempora nostrum? Sunt quas laboriosam ad quaerat similique error quidem, adipisci sit fugiat, eius, dolores eveniet nihil minus commodi dicta animi explicabo ipsum. Nesciunt iusto autem libero accusamus tempora eveniet vel velit? Molestias maiores iusto dolore sapiente non animi odit debitis quisquam laborum esse, ea id ut quis molestiae beatae sint accusantium sed nostrum. A officiis eius pariatur accusantium. Iure vitae et nulla, voluptatum dolores vel beatae quasi! Vero, dolorem culpa dolorum quis reprehenderit nulla aperiam. Debitis.
        </p>
        <button @click="goPage1()">Book Now</button>

        <!-- Andre blogg innlegg -->
        <div class="blog-content2">
          <h1>Se the city at night</h1>
          <p>
            <img src="../assets/img/ubisoftstockholm_lifequality-614x800.jpg" alt="Night Out" /> 
            The easiest way to get around the city is so clearly on a bike. Since our campus is located in the heart of stocholm it is very easy to get around.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, commodi excepturi magni unde pariatur alias nemo officia sed consequuntur itaque ipsam reprehenderit maxime corrupti. Nulla a necessitatibus eligendi, inventore tempore vero, id aperiam eum corrupti voluptate maiores, voluptatem neque asperiores molestiae! Ipsa voluptatum doloribus nisi quam tempore optio molestiae illo!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat id nulla eveniet doloremque aliquam soluta, laboriosam qui officia repellendus nam aliquid asperiores vel alias, odit, optio excepturi? Alias, explicabo.
          </p>

          <button @click="goPage1()">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    async goPage1() {
      this.$router.push("Register");
    },
    async goToOutActivitys() {
      this.$router.push("OurActivitys");
    }
  }
};
</script>
<style>
@import "../assets/style/main.css"; 
</style>
<style scoped >
img {
  float: left;
  height: 30%;
  padding-right: 20px;
}
.blog-content2 {
  padding-top: 5%;
}
h1 {
  text-align: center;
  font-size: 50px;
}
.blog-header {
  text-align: center;
}
.grid-container {
  display: grid;
  grid-template-columns: 550px auto;
  grid-gap: 10px;
}
.grid-info {
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 0px 70px 0px 100px;
}
.grid-img {
  grid-column: 1;
  grid-row: 1;
}
.grid-blogg {
  padding-top: 100px;
  grid-column: 1 / span 2;
  grid-row: 2;
}
.svgImage {
  padding: 20px 20px 10px 50px;
  width: 100%;
}

.blog-content {
  padding-top: 20px;
  padding: 30px;
}
@media only screen and (max-width: 1000px) {
  img {

    width: 100%;
  }
  h1 {
    text-align: center;
    font-size: 25px;
  }
  .blog-header {
    text-align: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
  }
  .grid-info {
    grid-column: 1;
    grid-row: 2;
    padding: 0;
  }
  .grid-img {
    grid-column: 1;
    grid-row: 1;
  }
  .grid-blogg {
    grid-column: 1;
    grid-row: 3;
  }
  .svgImage {
    width: 85%;
  }

  .blog-content {
    padding-top: 20px;
    padding: 0px;
  }
}
</style>

