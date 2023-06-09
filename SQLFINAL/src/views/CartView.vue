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
  methods: {}
}
</script>

<template>
  <HeadingTemplate></HeadingTemplate>
  <Cart
    v-for="item in userInfo.realShoppingCart"
    :name="item.amiibo.name"
    :image="item.amiibo.image"
    :gameSeries="item.amiibo.gameSeries"
    :price="item.amiibo.price"
    :character="item.amiibo.character"
  ></Cart>
</template>

<style lang="css" scoped></style>
