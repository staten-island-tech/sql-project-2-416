import { defineStore } from 'pinia' //defines the file for devtools
import { supabase } from '../lib/supabaseClient'

import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export const shop = defineStore('shop', () => {
  async function addToCart(name, image, gameSeries, price, character, amiiboSeries, email) {
    if (userInfo.user.loggedIn == 'true') {
      const { upload } = await supabase.from('shopping_cart').insert({
        name: `${name}`,
        image: `${image}`,
        gameSeries: `${gameSeries}`,
        price: `${price}`,
        character: `${character}`,
        amiiboSeries: `${amiiboSeries}`,
        email: `${email}`
        //Components that are inserted into the card (These need to match with those in Default.view)
      })
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
      const { data } = await supabase.from('amiibo').select() //Gets array and puts it into data
      this.amiibos = data //data is put into this.amiibos1
      // console.log(this.amiibos)
    }
  }
})
