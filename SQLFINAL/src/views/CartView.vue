<script setup>
import HeadingTemplate from './HeadingTemplate.vue'
import Cart from '../components/Cart.vue'
import { supabase } from '../lib/supabaseClient.js'
import { userInformation } from '@/stores/users'
const userInfo = userInformation()
</script>

<script>
import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  components: {
    HeadingTemplate,
    Cart
  },
  methods: {}
}
</script>

<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="cartContainer">
  <Cart
    v-for="item in userInfo.user.shoppingCart"
    :count="item.count"
    :price="item.price"
    :amiibo_id="item.amiibo_id"
  ></Cart>
  </div>
</template>

<style lang="css" scoped>
#cartContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}</style>
