<template>
  <div class="grid-container">
    <header class="main-header">
      <h1>Our Activities</h1>
    </header>
    <main class="container">
      <section class="card">
        <img src="../Assets/img/football.jpg" alt />
        <div class="info">
          <h3>
            Football
            <span>Training Camp</span>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ex facere modi eaque tempore
            distinctio assumenda aliquid natus incidunt.
            Minus adipisci, dolor voluptatibus est deserunt fugit itaque optio non rem.
          </p>
          <p>
            <span>Price:</span> 5000
          </p>

          <p>
            <span>Where:</span> Sweden
          </p>
          <button>Order</button>
        </div>
      </section>

      <section class="card" data-aos="fade-left" data-aos-duration="3000">
        <img src="../Assets/img/Basketball.jpg" alt />
        <div>
          <h3>
            Basketball
            <span>Traning Camp</span>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ex facere modi eaque tempore
            distinctio assumenda aliquid natus incidunt.
            Minus adipisci, dolor voluptatibus est deserunt fugit itaque optio non rem.
          </p>
          <p>
            <span>Price:</span> 5000
          </p>

          <p>
            <span>Where:</span> Sweden
          </p>
          <button>Order</button>
        </div>
      </section>

      <section class="card" data-aos="fade-right">
        <img src="../Assets/img/Handball.jpg" alt />
        <div class="info">
          <h3>
            Handball
            <span>Training Camp</span>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ex facere modi eaque tempore
            distinctio assumenda aliquid natus incidunt.
            Minus adipisci, dolor voluptatibus est deserunt fugit itaque optio non rem.
          </p>
          <p>
            <span>Price:</span> 5000
          </p>

          <p>
            <span>Where:</span> Sweden
          </p>
          <button>Order</button>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src="../Assets/img/Esport.jpg" alt />
        <div>
          <h3>
            E-sport
            <span>Training Camp</span>
            <br />
            <span class="new">NEW!</span>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ex facere modi eaque tempore
            distinctio assumenda aliquid natus incidunt.
            Minus adipisci, dolor voluptatibus est deserunt fugit itaque optio non rem.
          </p>
          <p>
            <span>Price:</span> 5000
          </p>
          <p>
            <span>Where:</span> Sweden
          </p>
          <button>Order</button>
        </div>
      </section>
    </main>

    <footer>

    </footer>

  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  created() {
    console.log("On create");
    AOS.init({
      offset: 400,
      duration: 1000
    });
  },

  methods: {
    async goPage1() {
      this.$router.push("Register");
    }
  }
};
</script>
<style scoped>
.new {
  font-size: 22px;
}

img {
  /* height: auto; */
  width: auto;
}

a {
  color: #333;
  text-decoration: none;
}

.container {
  max-width: 80%;
  margin: auto;
  overflow: auto;
}

.main-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rm;
}

.main-header h1 {
  font-size: 4rm;
  margin-bottom: 2rm;
  line-height: 1.2;
}

p span {
  color: #b50d10;
  font-weight: bold;
}

.main-header h1 span {
  color: #b50d10;
}

.main-header p {
  font-size: 2rm;
}

.card {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-gap: 2rem;
  /* background: #f1f1f1; */
  margin-bottom: 4rem;
}

/* .card h3 {
  margin-bottom: 2rem;
} */

.card h3 span {
  color: #b50d10;
}

.card img {
  height: 400px;
}

.card > div {
  padding: 2rem;
}

.btn {
  display: inline-block;
  background: black;
  color: #fff;
  padding: 0.8rem 1.8rem;
  margin-top: 2rem;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.8;
}

@media (max-width: 1000px) {
  .card {
    display: block;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

