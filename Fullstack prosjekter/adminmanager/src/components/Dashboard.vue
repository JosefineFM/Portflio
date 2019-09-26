<template>
  <div class="dashboard">
    <h3>Dashboard</h3>

    <div class="fixed-action">
      <router-link to="/new" class="btn-floating btn-large red">
        <img src="../assets/img/plus.png" alt />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {};
  }
};
</script>
<style scoped>
/* Img on the button on the page */
img {
  height: 60px;
  position: absolute;
  bottom: 8px;
  right: 16px;
}
</style>