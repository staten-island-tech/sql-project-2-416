<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const amiibos = ref([])

async function getAmiibos() {
  const { data } = await supabase.from('amiibo').select()
  amiibos.value = data
}

async function addToCart(amiiboSeries, name, gameSeries, character, image) {
  const { upload } = await supabase.from('shopping_cart').insert({
    amiiboSeries: `${amiiboSeries}`,
    name: `${name}`,
    gameSeries: `${gameSeries}`,
    character: `${character}`,
    image: `${image}`
  })
}

// const movieload = ref('')
// async function getDog() {
//   let res = await fetch(`https://amiiboapi.com/api/amiibo/`)
//   let datamovie = await res.json()
//   movieload.value = datamovie
//   movieload._rawValue.amiibo.forEach(async function (element) {
//     const { upload } = await supabase.from('amiibo').insert({
//       amiiboSeries: `${element.amiiboSeries}`,
//       name: `${element.name}`,
//       type: `${element.type}`,
//       gameSeries: `${element.gameSeries}`,
//       character: `${element.character}`,
//       image: `${element.image}`
//     })
//   })
// }

//https://amiiboapi.com/api/amiibo/

onMounted(() => {
  // getDog()
  getAmiibos()
})
</script>
<HeadingTemplate></HeadingTemplate>
<template class="template">
  <div id="moviesContainer">
    <div v-for="amiibo in amiibos" :key="amiibo.id" class="individualMovie">
      <div>
        <h2>
          {{ amiibo.name }}
        </h2>
        <img :src="amiibo.image" width="200" />
        <p>{{ amiibo.gameSeries }}</p>
        <p>{{ amiibo.character }}</p>
        <button
          @click="
            addToCart(
              amiibo.amiiboSeries,
              amiibo.name,
              amiibo.gameSeries,
              amiibo.character,
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
#moviesContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.individualMovie {
  border: solid black;
  width: 27.5%;
  text-align: center;
}
</style>
