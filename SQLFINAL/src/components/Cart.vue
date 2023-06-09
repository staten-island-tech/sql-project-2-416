<template>
  <div class="individualAmiibo" data-aos="fade-up" data-aos-duration="1000">
    <h2 class="amiiboRegister">
      {{ name }}
    </h2>
    <img class="amiiboImage" :src="image" width="200" />
    <h3 class="amiiboSeries">{{ gameSeries }}</h3>
    <h3 class="amiiboSeries">$ {{ price }}.00</h3>
    <h3 class="amiiboName">{{ character }}</h3>
    <button class="deleteButton" @click="deleteFromStore">Delete</button>
    <h3 class="amiiboSeries">Quantity</h3>
    <div class="alterQuantity">
      <!-- <button class="amiiboSeries" @click="increase">+</button> -->
      <h3 class="amiiboSeries">{{ count }}</h3>
      <!-- <button class="amiiboSeries">-</button> -->
    </div>
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
import AOS from 'aos'
import 'aos/dist/aos.css'
import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  mounted() {
    AOS.init()
  },
  name: 'Cart',
  props: {
    index: Number,
    character: String,
    gameSeries: String,
    image: String,
    name: String,
    price: Number,
    amiibo_id: Number,
    count: Number
  },
  methods: {
    async deleteFromStore() {
      userInfo.totalCount--
    //  console.log(userInfo.totalCount)
      const { error } = await supabase
        .from('amiibo_cart')
        .delete()
        .eq('email', userInfo.user.email)
        .eq('amiibo_id', this.amiibo_id)
      userInfo.realShoppingCart.splice(this.index, 1)
    },
    async increase() {
      const { data, error } = await supabase
        .from('amiibo_cart')
        .update({ count: this.count + 1 })
        .eq('email', userInfo.user.email)
        .eq('amiibo_id', this.amiibo_id)
    //  console.log(userInfo.realShoppingCart[this.index].count)
      userInfo.realShoppingCart[this.index].count += 1
    }
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap');

html,
body,
* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: 'Raleway', sans-serif;
}
.amiiboRegister {
  font-size: 2rem;
}

#amiibosContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.amiiboName {
  font-size: 1.5rem;
}

.amiiboSeries {
  font-size: 3rem;
  margin: 1rem;
}

.amiiboImage {
  transition: all 0.25s;
}

.amiiboImage:hover {
  transform: scale(1.13);
  margin: 5px;
  transition: all 0.25s;
}

.individualAmiibo:hover {
  border: red solid 5px;
  border-radius: 60px;
  transition: all 0.25s;
}

.individualAmiibo {
  border: solid 5px rgb(26, 26, 26);
  border-radius: 5px;
  width: 27.5%;
  text-align: center;
  margin: 1rem;
  transition: all 0.25s;
  background-color: white;
}

.deleteButton {
  font-size: 50px;
}

.alterQuantity {
  display: inline-flex;
}

.deleteButton{
  background-color: white;
  border: black;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.25s;
}

.deleteButton:hover {
  transform: scale(1.08);
  transition: all 0.25s;
  background-color: red;
  color: white;
  border: red;
}
</style>
