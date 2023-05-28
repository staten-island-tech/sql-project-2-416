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

//The code below does not work. I attempted to convert it into vue options code, but all it returns at the moment is an empty page when you go to the store. When you inspect and go to Vue, it shows the "amiibos" array as empty. I will keep looking into this.

/* export const useShop = defineStore('shop', {
  methods: {},
  state: () => {
    //state that all other components use. Returns to global.
    return {
      amiibos: []
    }
  },
  actions: {
    async getAmiibos() {
      const amiibos = ref([])
      const { data } = await supabase.from('amiibo').select()
      amiibos.value = data
    },
    async addToCart(amiiboSeries, name, gameSeries, character, image, price) {
      const { upload } = await supabase.from('shopping_cart').insert({
        amiiboSeries: `${amiiboSeries}`,
        name: `${name}`,
        gameSeries: `${gameSeries}`,
        character: `${character}`,
        image: `${image}`,
        price: `${price}`
      })
    }
  }
}) */
