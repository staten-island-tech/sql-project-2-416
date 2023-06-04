import { defineStore } from 'pinia' //defines the file for devtools
import { supabase } from '../lib/supabaseClient'

export const shop = defineStore('shop', () => {
  async function addToCart(name, image, gameSeries, price, character, amiiboSeries, email) {
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
  }

  return { addToCart }
})
// ----------------------------
// Vue version of inserting data into the cards
export const useAmiiboStore = defineStore('AmiiboStore', {
  state: () => {
    return {
      amiibos1: [] //Defines array and returns it (will be used in the DefaultView file)
    }
  },
  actions: {
    async fill() {
      const { data } = await supabase.from('amiibo').select() //Gets array and puts it into data
      this.amiibos1 = data //data is put into this.amiibos1
      console.log(this.amiibos1)
    }
  }
})
