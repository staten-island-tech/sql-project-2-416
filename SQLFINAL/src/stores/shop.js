import { defineStore } from 'pinia' //defines the file for devtools
import { supabase } from '../lib/supabaseClient'

import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export const shop = defineStore('shop', () => {
  async function addToCart(cart, respectiveCount, itemToAdd) {
    if (userInfo.user.loggedIn == 'true') {
      if (cart.length == 0) {
        const { data, error } = await supabase // Updates the database
          .from('shopping_cart')
          .update({
            amiibo: [itemToAdd],
            respectiveCount: [1]
          })
          .eq('email', userInfo.user.email)
        console.log(`error: ${error}, data: ${data}`)
        cart.push(itemToAdd) // Updates locally so that on the next click, it will not run this if statement again
        respectiveCount.push(1) // Adds an element, "1" to the count array
      } else {
        if (cart.indexOf(itemToAdd) != -1) {
          // Checks if the item is already in the cart

          let indexOfItem = cart.indexOf(itemToAdd) // Checks for the index of the item
          let itemCount = userInfo.user.respectiveCount[indexOfItem] // Stores its value
          userInfo.user.respectiveCount.splice(indexOfItem, 1, itemCount + 1) // Updates the count array
          const { data, error } = await supabase // Updates the database
            .from('shopping_cart')
            .update({
              amiibo: cart,
              respectiveCount: userInfo.user.respectiveCount
            })
            .eq('email', userInfo.user.email)
        } else {
          cart.push(itemToAdd) // Adds the new item to the cart array
          userInfo.user.respectiveCount.push(1) // Adds an element, "1" to the count array
          const { data, error } = await supabase // Updates the database
            .from('shopping_cart')
            .update({
              amiibo: cart,
              respectiveCount: userInfo.user.respectiveCount
            })
            .eq('email', userInfo.user.email)
          console.log(`error: ${error}, data: ${data}`)
        }
      }
    } else if (userInfo.user.loggedIn == 'false' || undefined) {
      // Relocates to login page, also why doesn't "else" work?
      location.replace(`${location.href}Login`)
    }
  }

  return { addToCart }
})
// ----------------------------
// Vue version of inserting data into the cards
export const useAmiiboStore = defineStore('AmiiboStore', {
  state: () => {
    return {
      amiibos: [] //Defines array and returns it (will be used in the DefaultView file)
    }
  },
  actions: {
    async fill() {
      // Gets all amiibos
      const { data } = await supabase.from('amiibo').select() // Gets array and puts it into data
      this.amiibos = data //data is put into this.amiibos1
      // console.log(this.amiibos)
    }
  }
})
