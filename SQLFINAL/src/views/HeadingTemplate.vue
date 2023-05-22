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

<style lang="css" scoped>
.link {
  font-size: 3rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
