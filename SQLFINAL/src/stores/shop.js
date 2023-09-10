import { defineStore } from 'pinia' //defines the file for devtools
import { supabase } from '../lib/supabaseClient' //imports supabase data

import { userInformation } from '@/stores/users' 
const userInfo = userInformation()

//This file (built on pinia) houses a function to add amiibos to the cart.

export const shop = defineStore('shop', () => {
  async function addToCart(id, price) { // Function of adding the id (to which all the other amiibo qualities are linked to) and the price to the cart
    if (userInfo.user.loggedIn == true) { // Checks if the user is logged in
          userInfo.totalCount++ //Raises the count of the amount of items in the Cart by 1
      const checkIfSame = await supabase //Checks if the same amiibo is already in the cart 
        .from('amiibo_cart')
        .select()
        .eq('email', userInfo.user.email)
        .eq('amiibo_id', id)
      if (checkIfSame.data.length > 0) { //If the same amiibo IS in the cart, ((length of data) being over 0), then the count of that specific item in the cart is incremented by 1
        await supabase
          .from('amiibo_cart')
          .update({
            count: checkIfSame.data[0].count + 1
          })
          .eq('email', userInfo.user.email)
          .eq('amiibo_id', id)
      } else { //If the same amiibo is not in the cart, then the count of that specific amiibo is set to 1.
        const { data, error } = await supabase 
          .from('amiibo_cart')
          .insert({ email: userInfo.user.email, amiibo_id: id, price: price, count: 1 })
          .select()
      }
      const userShoppingCart = await supabase.from('amiibo_cart').select() //the users Shopping Cart is selected.
      const userCart = await supabase
        .from('amiibo_cart')
        .select(`amiibo_id, amiibo(character, gameSeries, image, name, price)`) // The cart (a seperate variable from userShoppingCart) retrieves the appropriate data
      userInfo.realShoppingCart = userCart.data
      for (let i = 0; i < userShoppingCart.data.length; i++) {
        Object.defineProperties(userInfo.realShoppingCart[i], {
          count: { value: userShoppingCart.data[i].count }  //Should give every item in realShoppingCart the property "count", which notes the count of each item in the cart.
        })
      }
    } else {
      location.replace(`${location.href}Login`) //If the user is not logged in, then they are brought back to the login page.
    }
  }
  return { addToCart } //returns all of the data
})
// ----------------------------
// Vue version of inserting data into the cards
export const useAmiiboStore = defineStore('AmiiboStore', { //pinia state management for the all of the amiibos.
  state: () => {
    return {
      amiibos: [] //Defines for the amiibos and returns it (will be used in the DefaultView file)
    }
  },
  actions: {
    async fill() {
      // Gets all amiibos
      const { data } = await supabase.from('amiibo').select() // Gets array and puts it into data
      this.amiibos = data //data is put into this.amiibos
    }
  }
})
