<script setup>
import { onMounted } from 'vue'
import HeadingTemplate from './HeadingTemplate.vue'
import AmiiboCard from '../components/AmiiboCard.vue'
import { useAmiiboStore } from '../stores/shop.js'
const AmiiboStore = useAmiiboStore() //AmiiboStore is defined with the useAmiiboStore const
onMounted(() => {
  AmiiboStore.fill()
})
</script>

<script>
export default{
}
</script>

<template class="template">
  <HeadingTemplate></HeadingTemplate>
  <!--Replace amiibos with Amiibostore.amiibos1 to continue working on issue-->
  <header></header>
  <div id="amiibosContainer" >
    <AmiiboCard
      v-for="amiibo in AmiiboStore.amiibos"
      :name="amiibo.name"
      :image="amiibo.image"
      :gameSeries="amiibo.gameSeries"
      :price="amiibo.price"
      :character="amiibo.character"
      :amiiboSeries="amiibo.amiiboSeries"
      :id="amiibo.id"
    />
  </div>
  <footer></footer>
</template>

<style lang="css">
#amiibosContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

</style>
