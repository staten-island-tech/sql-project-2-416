<template>
  <HeadingTemplate></HeadingTemplate>
  <form class="sign">
    <label for="username">Username</label>
    <input id="username" type="text" ref="username" />
    <label for="password">Password</label>
    <input id="password" type="text" ref="password" />
    <label for="confirm">Confirm Password</label>
    <input id="confirm" type="text" ref="confirm" />
    <button type="submit">Create</button>
    <h2 v-show="this.$refs.password === this.$refs.confirm">Same</h2>
  </form>
  <!-- <div v-if="userCheck(this.$refs.username.value)">Same</div> -->
</template>

<script>
import HeadingTemplate from './HeadingTemplate.vue'
import { defineComponent } from 'vue'
import { userSettingsStore } from '@/stores/users'
const settingsStore = userSettingsStore()
const userlist = settingsStore.getUsers()

export default {
  components: {
    HeadingTemplate
  },
  methods: {
    userCheck(username) {
      settingsStore.check(username)
    }
  }
}
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
