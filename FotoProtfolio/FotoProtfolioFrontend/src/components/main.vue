<template>
  <div class="wrapper">
    <div class="main">
      <div id="body">
        <carousel :per-page="1" :autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true">
          <slide>
            <img id="carousel" src="https://localhost:44353/api/Image/2">
            <p class="description">Natur</p>
          </slide>
          <slide>
            <img id="carousel" src="https://localhost:44353/api/Image/3">
            <p class="description">Ølberg islet - Larvik, Norway</p>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>

.description {
  font-size: 23px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#carousel {
  width: auto;
  height: 730px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}
.main {
  width: 75%;
  padding-right: 10px;
  float: right;
  padding: 15px;
  height: 100%;
  top: 0;
}
</style>
