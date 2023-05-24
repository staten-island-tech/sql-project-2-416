<template>
  <HeadingTemplate></HeadingTemplate>
  <form class="sign">
    <label for="username">Username</label>
    <input id="username" type="text" />
    <label for="password">Password</label>
    <input id="password" type="text" />
    <label for="confirm">Confirm Password</label>
    <input id="confirm" type="text" />
    <!-- <h2 v-if="test">Same</h2> -->
    <button type="submit">Create</button>
  </form>
</template>

<script>
import HeadingTemplate from './HeadingTemplate.vue'
import { defineComponent } from 'vue'
import { userSettingsStore } from '@/stores/users'
const settingsStore = userSettingsStore()
const userlist = settingsStore.getUsers()

console.log(settingsStore.users)

export default defineComponent({
  components: {
    HeadingTemplate
  }
})
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
.sign {
  font-size: 3rem;
}
</style>
