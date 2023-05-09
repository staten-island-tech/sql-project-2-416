<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const movies = ref([])

async function getMovies() {
  const { data } = await supabase.from('Cinema Rental Store').select()
  movies.value = data
}

onMounted(() => {
  getMovies()
})
// const countries = ref([])

// async function getCountries() {
//   const { data } = await supabase.from('countries').select()
//   countries.value = data
// }

// onMounted(() => {
//   getCountries()
// })
</script>

<template>
  <ul>
    <li v-for="movie in movies" :key="movie.id">{{ movie.movie_name }}</li>
  </ul>
</template>
