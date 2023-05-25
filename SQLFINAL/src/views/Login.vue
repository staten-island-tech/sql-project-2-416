<template>
  <HeadingTemplate></HeadingTemplate>
  <div class="containerDiv">
    <form class="userheaders" @submit.prevent @click="check">
      <label id="username" for="username" ref="username">Username</label>
      <input id="usernameInput" type="text" />
      <label id="password" for="password" ref="password">Password</label>
      <input id="passwordInput" type="text" />
      <button id="login" type="submit">Login</button>
    </form>
    <router-link id="login" class="link" to="/SignUp">Sign Up</router-link>
  </div>
</template>

<script>
import HeadingTemplate from './HeadingTemplate.vue'
import { defineComponent } from 'vue'

import { userSettingsStore } from '@/stores/users'
const settingsStore = userSettingsStore()
const userlist = settingsStore.getUsers()
const check = settingsStore.check()

console.log(settingsStore)

export default defineComponent({
  components: {
    HeadingTemplate
  }
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
