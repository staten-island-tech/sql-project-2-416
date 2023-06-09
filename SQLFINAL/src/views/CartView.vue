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
  methods: {
    async totalpurchase() {
    }
  }
}
</script>

<template>
  <HeadingTemplate></HeadingTemplate>
  <button type="button" class="totalPurchase" v-if="userInfo.totalCount > 0" @click="totalpurchase">Purchase (${{userInfo.totalCount * 30}})</button>
  <h2 class="pleaseAdd" v-else>Please add something to your cart</h2>
  <div id="cartContainer">
    <Cart
      v-for="item in userInfo.realShoppingCart"
      :index="userInfo.realShoppingCart.indexOf(item)"
      :name="item.amiibo.name"
      :image="item.amiibo.image"
      :gameSeries="item.amiibo.gameSeries"
      :price="item.amiibo.price"
      :character="item.amiibo.character"
      :amiibo_id="item.amiibo_id"
      :count="item.count"
    />
  </div>
</template>

<style lang="css" scoped>
html,
body,
* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: 'Raleway', sans-serif;
}

#cartContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}


.totalPurchase {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-size: 3rem;
  padding: 8rem;
  border: black solid 3px;
  background-color: rgb(255, 255, 255);
  border-radius: 55px;
  margin: 5px;
  transition: all 0.6s;
  text-decoration: none;
  color: black;
  justify-content: center;
  padding: 0.8rem;
  font-size: 4rem;
  text-align: center;
}

.totalPurchase:hover {
  border-radius: 5px;
  transition: all 0.5s;
  transform: scale(1.02);
  background-color: rgb(7, 20, 8);
  box-shadow: 5px 2.5px 2.5px;
  color: white;
}


.pleaseAdd{
  display: flex;
  font-size: 3rem;
  margin: 0.5rem;
}
</style>
