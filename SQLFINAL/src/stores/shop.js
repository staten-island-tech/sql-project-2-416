import { defineStore } from 'pinia'
import { ref } from 'vue'

export const shop = defineStore('shop', () => {
  const amiibos = ref([])

  async function getAmiibos() {
    const { data } = await supabase.from('amiibo').select()
    amiibos.value = data
  }

  getAmiibos()

  return { amiibos }
})
