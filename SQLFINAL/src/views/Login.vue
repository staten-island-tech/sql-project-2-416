<template>
  <HeadingTemplate></HeadingTemplate>
  <form>
    <label for="username">Username</label>
    <input id="username" type="text" />
    <label for="password">Password</label>
    <input id="password" type="text" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import HeadingTemplate from './HeadingTemplate.vue'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  // data() {
  //   return {
  //     name: '',
  //     components: {
  //       HeadingTemplate
  //     }
  //   }
  // },
  state: () => ({
    async getUsers() {
      const { data } = await supabase.from('user_stats').select()
      user.value = data
      console.log(user)
    }
  }),
  actions: {}
})
// const users = ref([])

// async function getUsers() {
//   const { data } = await supabase.from('user_stats').select()
//   user.value = data
//   console.log(user)
// }
</script>

<style scoped></style>
