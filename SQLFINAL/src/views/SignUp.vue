<template>
  <HeadingTemplate></HeadingTemplate>
  <form>
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
import { defineStore } from 'pinia'

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
  getters: {
    test() {
      return document.getElementById('password').value === document.getElementById('confirm').value
    }
  }
})
</script>

<style lang="scss" scoped></style>
