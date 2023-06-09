import { defineStore } from 'pinia'

export const userInformation = defineStore('settings', {
  state: () => {
    return {
      user: {
        email: null,
        loggedIn: false
      },
      shoppingCart: []
    }
  }
})
