<script setup>
import { storeToRefs } from 'pinia'
import { shop } from '@/stores/shop'
import HeadingTemplate from './HeadingTemplate.vue'
const store = shop()
const { amiibos } = storeToRefs(store)
</script>

<template class="template">
  <HeadingTemplate></HeadingTemplate>
  <div id="amiibosContainer">
    <div v-for="amiibo in amiibos" :key="amiibo.id" class="individualAmiibo">
      <div>
        <h2 class="amiiboRegister">
          {{ amiibo.name }}
        </h2>
        <img class="amiiboImage" :src="amiibo.image" width="200" />
        <h3 class="amiiboSeries">{{ amiibo.gameSeries }}</h3>
        <!--         <h3 class="amiiboName">{{ amiibo.character }}</h3> -->
        <div class="buttondiv">
          <button
            class="buttonout"
            type="button"
            @click="
              store.addToCart(
                amiibo.amiiboSeries,
                amiibo.name,
                amiibo.gameSeries,
                /*               amiibo.character, */
                amiibo.image
              )
            "
          >
            <button type="button" class="buttonin">Add to Cart</button>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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

.amiiboSeries {
  font-size: 3rem;
  margin: 1rem;
}

.buttonin {
  font-size: 2.5rem;
  background-color: red;
  color: white;
  border: solid 3px red;
  padding: 10px;
  border-radius: 4rem;
  transition: all 0.2s;
}

.buttonout {
  font-size: 2.5rem;
  background-color: white;
  border: solid 0.5px red;
  border-radius: 4rem;
  transition: all 0.2s;
}

.buttonin:hover {
  background-color: white;
  color: red;
}

.buttonout:hover {
  border: solid 0.1px red;
  padding: 10px;
  transform: scale(1.05);
  border: 1px solid rgba(0, 0, 0, 0);
}

.buttondiv {
  margin: 5rem;
}

.individualAmiibo:hover {
  border: solid 1px rgb(57, 6, 6);
}

.individualAmiibo {
  border: solid 1px rgb(26, 26, 26);
  border-radius: 3px;
  width: 27.5%;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  transition: all 0.25s;
}
</style>
