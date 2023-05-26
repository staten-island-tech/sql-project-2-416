import { defineStore } from 'pinia'
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
      price: `${price}`
    })
  }

  return { amiibos, addToCart }
})
