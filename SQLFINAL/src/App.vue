<script setup>
import { storeToRefs } from 'pinia'
import { shop } from '@/stores/shop'
import HeadingTemplate from './views/HeadingTemplate.vue'
const store = shop()
const { amiibos } = storeToRefs(store)
</script>

<template class="template">
  <div id="amiibosContainer">
    <div v-for="amiibo in amiibos" :key="amiibo.id" class="individualAmiibo">
      <div>
        <h2 class="amiiboRegister">
          {{ amiibo.name }}
        </h2>
        <img class="amiiboImage" :src="amiibo.image" width="200" />
        <h3 class="amiiboSeries">{{ amiibo.gameSeries }}</h3>
        <!--         <h3 class="amiiboName">{{ amiibo.character }}</h3> -->
        <button
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
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.amiiboRegister {
  font-size: 2rem;
}

#amiibosContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.individualAmiibo {
  border: solid black;
  width: 27.5%;
  text-align: center;
  margin: 1rem;
}
</style>
