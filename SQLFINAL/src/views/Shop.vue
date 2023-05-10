<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const movies = ref([])

async function getMovies() {
  const { data } = await supabase.from('movie').select()
  movies.value = data
}

onMounted(() => {
  getMovies()
})
</script>

<template class="template">
  <div id="moviesContainer">
    <div v-for="movie in movies" :key="movies.id" class="individualMovie">
      <div>
        <h2>
          {{ movie.name }}
        </h2>
        <img :src="movie.poster" width="200" />
        <p>{{ movie.weekly_rent }}</p>
        <p>{{ movie.genre }}</p>
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
  width: 30%;
  text-align: center;
}
</style>
