<template>
  <div class="wrapper">
    <div class="main">
      <div id="body">
        <!--:loop="true"-->
        <carousel :per-page="1" :autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true">
          <slide>
            <img id="carousel" src="/api/Image/1">
          </slide>
          <slide>
            <img id="carousel" src="/api/Image/3">
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
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400");

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
