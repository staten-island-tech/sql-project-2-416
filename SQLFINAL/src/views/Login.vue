<template>
  <HeadingTemplate></HeadingTemplate>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import HeadingTemplate from './HeadingTemplate.vue'

const users = ref([])

async function getUsers() {
  const { data } = await supabase.from('user_stats').select()
  user.value = data
  console.log(user)
}
</script>

<style scoped></style>
