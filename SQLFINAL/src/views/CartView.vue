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
console.log(userInfo.realShoppingCart)

export default {
  components: {
    HeadingTemplate,
    Cart
  },
  methods: {
    purchase: function () {

    }
  }
}
</script>

<template>
  <HeadingTemplate></HeadingTemplate>
  <button @click="purchase">Purchase (Can only be made after reactive is implemented)</button>
  <div id="cartContainer">
  <Cart
    v-for="item in userInfo.realShoppingCart"
    :name="item.amiibo.name"
    :image="item.amiibo.image"
    :gameSeries="item.amiibo.gameSeries"
    :price="item.amiibo.price"
    :character="item.amiibo.character"
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
