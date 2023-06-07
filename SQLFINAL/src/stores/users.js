import { defineStore } from 'pinia'

export const userInformation = defineStore('settings', {
  state: () => {
    return {
      user: {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        loggedIn: localStorage.getItem('loggedIn'),
        shoppingCart: {}
      }
    }
  }
})
