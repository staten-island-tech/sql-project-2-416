<!-- <script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const movies = ref([])

async function getMovies() {
  const { data } = await supabase.from('movie').select()
  movies.value = data
}

onMounted(() => {
  getMovies()
})
</script>

<template>
  <ul>
    <div v-for="movie in movies" :key="movies.id">
      <h2>
        {{ movie.name }}
      </h2>
      <p></p>
    </div>
  </ul>
</template>
 -->
