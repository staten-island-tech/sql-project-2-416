<template>
  <HeadingTemplate></HeadingTemplate>
  <form id="createAccount">
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

<style lang="scss" scoped></style>
