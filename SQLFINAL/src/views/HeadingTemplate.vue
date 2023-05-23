<template>
  <div>
    <router-link class="link" to="/">Store</router-link>
    <router-link class="link" to="Login">Login</router-link>
    <span>
      <router-link class="link" to="Cart">Cart</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HeadingTemplate'
}
</script>

<style lang="css">
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
  font-size: 3rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
