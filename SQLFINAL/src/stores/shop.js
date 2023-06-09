import { defineStore } from 'pinia' //defines the file for devtools
import { supabase } from '../lib/supabaseClient'

import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export const shop = defineStore('shop', () => {
  async function addToCart(id, price) {
    if (userInfo.user.loggedIn == true) {
      const checkIfSame = await supabase
        .from('amiibo_cart')
        .select()
        .eq('email', userInfo.user.email)
        .eq('amiibo_id', id)
      if (checkIfSame.data.length > 0) {
        await supabase
          .from('amiibo_cart')
          .update({
            count: checkIfSame.data[0].count + 1
          })
          .eq('email', userInfo.user.email)
          .eq('amiibo_id', id)
      } else {
        const { data, error } = await supabase
          .from('amiibo_cart')
          .insert({ email: userInfo.user.email, amiibo_id: id, price: price, count: 1 })
          .select()
      }
    } else {
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
    }
  }
})
