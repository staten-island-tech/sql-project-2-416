import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const userInformation = defineStore('settings', {
  mounted() {
    this.user.value = {
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password')
    }
  },
  state: () => {
    return {
      user: {}
    }
  }
})
