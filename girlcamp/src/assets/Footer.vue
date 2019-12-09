<template>
  <div class="footer">
    <p>Copy: Josefine Magnussen - 2019</p>
    <ul>
      <li>
        <a href="#">Facebook</a>
      </li>
      <li class="divider">|</li>
      <li>
        <a href="#">Instagram</a>
      </li>
      <li class="divider">|</li>
      <li>
        <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">Contact Us</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
a {
  color: aliceblue;
  text-decoration: none;
}
a:visited {
  color: aliceblue;
  text-decoration: none;
}
a:hover {
  color: darkgray;
}
ul {
  margin-left: 20px;
}
li {
  /* display: block; */
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  margin-left: 5px;
}
.footer {
  margin-top: 20px;
  border-top: solid lightgray 1px;
}

@media only screen and (max-width: 1000px) {
  li {
    display: block;
  }
  .divider {
    display: none;
  }
}
</style>