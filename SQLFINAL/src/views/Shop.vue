<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

// const movies = ref([])

// async function getMovies() {
//   const { data } = await supabase.from('movie').select()
//   movies.value = data
// }

// async function addToCart(name, price, genre, poster) {
//   const { upload } = await supabase.from('shopping_cart').insert({
//     name: `${name}`,
//     price: `${price}`,
//     genre: `${genre}`,
//     poster: `${poster}`
//   })
// }

const movieload = ref('')
async function getDog() {
  let res = await fetch(`https://amiiboapi.com/api/amiibo/`)
  let datamovie = await res.json()
  movieload.value = datamovie
  const { upload } = await supabase.from('amiibo')
  movieload.amiibo.forEach(function (element) {
    upload.insert({
      name: `${element.name}`,
      type: `${element.type}`,
      gameSeries: `${element.gameSeries}`
    })
  })
}

//https://amiiboapi.com/api/amiibo/

onMounted(() => {
  getDog()
  // getMovies()
})
</script>

<template class="template">
  <!-- <div id="moviesContainer">
    <div v-for="movie in movies" :key="movies.id" class="individualMovie">
      <div>
        <h2>
          {{ movie.name }}
        </h2>
        <img :src="movie.poster" width="200" />
        <p>{{ movie.weekly_rent }}</p>
        <p>{{ movie.genre }}</p>
        <button @click="addToCart(movie.name, movie.price, movie.genre, movie.poster)">
          Add to Cart
        </button>
      </div>
    </div>
  </div> -->
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
