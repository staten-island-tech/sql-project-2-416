<script>
import HeadingTemplate from './HeadingTemplate.vue'
import { defineComponent } from 'vue'

import { userSettingsStore } from '@/stores/users'
const settingsStore = userSettingsStore()
// const userlist = settingsStore.getUsers()

export default {
  components: {
    HeadingTemplate
  },
  methods: {
    getUsers(username) {
      settingsStore.getUsers(username)
    }
  }
}
</script>
<template>
  <HeadingTemplate></HeadingTemplate>
  <div class="containerDiv">
    <form class="userheaders" @submit.prevent @click="getUsers(this.$refs.username.value)">
      <label id="username" for="username">Username</label>
      <input id="usernameInput" type="text" ref="username" />
      <label id="password" for="password">Password</label>
      <input id="passwordInput" type="text" ref="password" />
      <button id="login" type="submit">Login</button>
    </form>
    <router-link id="login" class="link" to="/SignUp">Sign Up</router-link>
  </div>
  <!-- <h2 v-if=""></h2> -->
</template>

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
