<script setup>
import HeadingTemplate from './HeadingTemplate.vue'
import Cart from '../components/Cart.vue'
import { supabase } from '../lib/supabaseClient.js'
import { userInformation } from '@/stores/users'
const userInfo = userInformation()
// console.log(userInfo.user)
</script>

<script>
import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  components: {
    HeadingTemplate,
    Cart
  },
  methods: {
    bunchOfStuff() {
      for (let i = 0; i < userInfo.user.respectiveCount.length; i++) {
        let divvy = document.createElement('div')
        divvy.innerHTML = `${userInfo.user.shoppingCart[i]} ${userInfo.user.respectiveCount[i]}`
        document.getElementById('test').appendChild(divvy)
      }
    }
  }
}
</script>

<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="test">{{ bunchOfStuff() }}</div>
  <!-- <Cart
    v-for="amiibo in userInfo.user.respectiveCount"
    :id="amiibo.shoppingCart"
    :count="amiibo.respectiveCount"
  ></Cart> -->
</template>

<style lang="css" scoped></style>
