<template>
  <div id="headingDiv">
    <nav>
      <router-link to="/">Shop</router-link>
      <router-link to="Login">Login</router-link>
      <router-link to="Cart">Login</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeadingTemplate'
}
</script>

<style scoped>
#headingDiv {
  padding: 2rem 0rem;
  border: solid black;
  font-size: 2rem;
}
</style>
