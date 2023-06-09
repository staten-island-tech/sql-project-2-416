<template>
  <!-- <div>{{ realShoppingCart[index] }}</div> -->
  <br />
  <hr />
  <div class="individualAmiibo">
    <h2 class="amiiboRegister">
      {{ name }}
    </h2>
    <img class="amiiboImage" :src="image" width="200" />
    <h3 class="amiiboSeries">{{ gameSeries }}</h3>
    <h3 class="amiiboSeries">$ {{ price }}.00</h3>
    <h3 class="amiiboName">{{ character }}</h3>
    <!-- <h3>Quantity: {{ count }}</h3> -->
  </div>
</template>

<script setup>
import { userInformation } from '@/stores/users'
const userInfo = userInformation()
const realShoppingCart = userInfo.realShoppingCart
</script>

<script>
import { supabase } from '../lib/supabaseClient'
import { useAmiiboStore } from '../stores/shop.js'
const AmiiboStore = useAmiiboStore()

import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  name: 'Cart',
  props: {
    character: String,
    gameSeries: String,
    image: String,
    name: String,
    price: Number
  },
  async mounted() {}
}
</script>

<style lang="scss" scoped></style>
