<template>
  <HeadingTemplate></HeadingTemplate>
  <div class="containerDiv">
    <form class="userheaders">
      <label id="username" for="username">Username</label>
      <input id="usernameInput" type="text" />
      <label id="password" for="password">Password</label>
      <input id="passwordInput" type="text" />
      <button id="login" type="submit">Login</button>
    </form>
    <router-link id="login" class="link" to="/SignUp">Sign Up</router-link>
  </div>
</template>

<script>
import HeadingTemplate from './HeadingTemplate.vue'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { defineStore } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    HeadingTemplate
  }
})

export const useSettingsStore = defineStore('settings', {
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap');

html,
body,
* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: 'Raleway', sans-serif;
}

.containerDiv {
  font-size: 4.5rem;
}
</style>
