import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'
import { ref } from 'vue'

export const userSettingsStore = defineStore('settings', {
  state: () => {
    return {
      users: []
    }
  },
  actions: {
    async getUsers() {
      const { data } = await supabase.from('user_stats').select()
      this.users.value = data
    },
    async check() {
      console.log(await supabase.from('user_stats').select().eq('username', 'TestUser')) //Gets TestUser information from Supabase
    }
  }
})
