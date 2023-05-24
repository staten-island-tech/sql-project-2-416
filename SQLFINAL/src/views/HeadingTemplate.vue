<template>
  <div class="router">
    <router-link class="link" to="/">Store</router-link>
    <router-link class="link" to="Login">Login</router-link>
    <span>
      <router-link class="link" to="Cart">Cart</router-link>
    </span>
    <h1 class="link">
      <!-- ${USER } -->
      is logged in
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HeadingTemplate'
}
</script>

<script setup>
import DefaultView from './DefaultView.vue'
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap');

html,
body,
* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: 'Raleway', sans-serif;
}
.link {
  margin-left: 10rem;
  margin: 2rem;
  font-size: 3rem;
}

.router {
  border: solid black 1px;
  border-radius: 10px;
}
</style>
