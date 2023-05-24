import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

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
    async check(username) {
      return (await supabase.from('user_stats').select('username')) == username
    }
  }
})
