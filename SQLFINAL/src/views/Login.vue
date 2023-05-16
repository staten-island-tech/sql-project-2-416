<template>
  <HeadingTemplate></HeadingTemplate>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const users = ref([])

async function getUsers() {
  const { data } = await supabase.from('user_stats').select()
  user.value = data
  console.log(user)
}
</script>

<style lang="scss" scoped></style>
