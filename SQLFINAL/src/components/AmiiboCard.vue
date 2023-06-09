<template>
  <div class="individualAmiibo"
    data-aos="fade-up"
     data-aos-duration="1000" >
    <h2 class="amiiboRegister">
      {{ name }}
    </h2>
    <img class="amiiboImage" :src="getImage" width="200" />
    <h3 class="amiiboSeries">{{ gameSeries }}</h3>
    <h3 class="amiiboSeries">$ {{ price }}.00</h3>
    <h3 class="amiiboName">{{ character }}</h3>
    <!-- <AmiiboButton
      @click="store.addToCart(name, image, gameSeries, price, character, amiiboSeries)"
    ></AmiiboButton> -->
    <AmiiboButton @click="store.addToCart(id, price)"></AmiiboButton>
  </div>
</template>

<script setup>
import AmiiboButton from '../components/AmiiboButton.vue'
import { shop } from '@/stores/shop'
const store = shop()
import AmiiboCard from '../components/AmiiboCard.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
</script>

<script>
import { userInformation } from '@/stores/users'
const userInfo = userInformation()
export default {
  mounted() {
    AOS.init()
  },
  data() {
    return {
      title: 'AmiiboCard'
    }
  },
  props: {
    id: Number,
    name: String,
    image: String,
    gameSeries: String,
    price: Number,
    character: String,
    amiiboSeries: String
  },
  computed: {
    getImage: function () {
      return this.image
    }
  }
}
</script>

<style lang="css" scoped >
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

.amiiboImage{
  transition: all .25s;
}

.amiiboImage:hover{
  transform: scale(1.13);
  margin: 5px;
  transition: all .25s;
}

.individualAmiibo:hover {
border: red solid 5px;
border-radius: 60px;
transition: all .25s;
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
</style>
