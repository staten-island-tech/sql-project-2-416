import { defineStore } from 'pinia' //defines the file for devtools
import { supabase } from '../lib/supabaseClient'
import { ref } from 'vue'

export const shop = defineStore('shop', () => {
  const amiibos = ref([])

  async function getAmiibos() {
    const { data } = await supabase.from('amiibo').select()
    amiibos.value = data
  }

  getAmiibos()

  async function addToCart(amiiboSeries, name, gameSeries, character, image, price) {
    const { upload } = await supabase.from('shopping_cart').insert({
      amiiboSeries: `${amiiboSeries}`,
      name: `${name}`,
      gameSeries: `${gameSeries}`,
      character: `${character}`,
      image: `${image}`,
      price: `${price}` //Components that are inserted into the card (These need to match with those in Default.view)
    })
  }

  return { amiibos, addToCart }
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
