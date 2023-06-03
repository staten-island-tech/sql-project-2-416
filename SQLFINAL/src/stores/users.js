import { defineStore } from 'pinia'

export const userInformation = defineStore('settings', {
  state: () => {
    return {
      user: {},
      loggedIn: false
    }
  }
})
