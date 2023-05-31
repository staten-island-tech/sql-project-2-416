<script setup>
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { shop } from '@/stores/shop'
const store = shop()
const { amiibos } = storeToRefs(store)
import HeadingTemplate from './HeadingTemplate.vue'
import AmiiboCard from '../components/AmiiboCard.vue'
import { useAmiiboStore } from '../stores/shop.js'
const AmiiboStore = useAmiiboStore() //AmiiboStore is defined with the useAmiiboStore const
AmiiboStore
</script>

<template class="template">
  <HeadingTemplate></HeadingTemplate>
  <!--Replace amiibos with Amiibostore.amiibos1 to continue working on issue-->
  <div id="amiibosContainer">
    <AmiiboCard
      v-for="amiibo in AmiiboStore.amiibos1"
      :key="amiibo.id"
      :name="amiibo.name"
      :image="amiibo.image"
      :gameSeries="amiibo.gameSeries"
      :price="amiibo.price"
      :character="amiibo.character"
    />
  </div>
  <!-- 
  <div id="amiibosContainer">
    <div v-for="amiibo in amiibos" :key="amiibo.id" class="individualAmiibo">
      <div>
        <h2 class="amiiboRegister">
          {{ amiibo.name }}
        </h2>
        <img class="amiiboImage" :src="amiibo.image" width="200" />
        <h3 class="amiiboSeries">{{ amiibo.gameSeries }}</h3>
        <h3 class="amiiboSeries">$ {{ amiibo.price }}.00</h3>
        <h3 class="amiiboName">{{ amiibo.character }}</h3>
        <div class="buttondiv">
          <button
            class="buttonout"
            type="button"
            @click="
              store.addToCart(
                amiibo.amiiboSeries,
                amiibo.name,
                amiibo.gameSeries,
                amiibo.character,
                amiibo.image,
                amiibo.price //Components from shop.js that the function looks for
              )
            "
          >
            <button type="button" class="buttonin">Add to Cart</button>
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style>
#amiibosContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
