<template>
  <div class="individualAmiibo">
    <h2 class="amiiboRegister">
      {{ this.name }}
    </h2>
    <img class="amiiboImage" :src="this.image" width="200" />
    <h3 class="amiiboSeries">{{ this.gameSeries }}</h3>
    <h3 class="amiiboSeries">$ {{ this.price }}.00</h3>
    <h3 class="amiiboName">{{ this.character }}</h3>
  </div>
</template>

<script>
import { supabase } from '../lib/supabaseClient'
import { useAmiiboStore } from '../stores/shop.js'
const AmiiboStore = useAmiiboStore()

import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  name: 'Cart',
  data() {
    return {
      amiiboSeries: '',
      character: '',
      gameSeries: '',
      image: '',
      name: ''
    }
  },
  props: {
    amiibo_id: Number,
    count: Number,
    price: Number
  },
  async mounted() {
    const { data } = await supabase.from('amiibo').select().eq('id', this.amiibo_id)
    console.log('stuff')
    this.amiiboSeries = data[0].amiiboSeries
    this.character = data[0].character
    this.gameSeries = data[0].gameSeries
    this.image = data[0].image
    this.name = data[0].name
  }
  // mounted: {
  //   async match(id) {
  //     const { data } = await supabase.from('amiibo').select().eq('id', id)
  //     userInfo.user.shoppingCart = data
  //   }
  // }
}
</script>

<style lang="scss" scoped></style>
