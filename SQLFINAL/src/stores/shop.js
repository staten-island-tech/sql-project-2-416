import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const shop = defineStore('shop', {
  setup() {
    const amiibos = ref([])
    onMounted(() => {
      async function getAmiibos() {
        const { data } = await supabase.from('amiibo').select()
        amiibos.value = data
      }
      getAmiibos()
    })
  },
  state: () => {
    return {
      amiibos
    }
  },
  getters: {},
  actions: {}
})
