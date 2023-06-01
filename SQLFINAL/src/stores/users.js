import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

export const userSettingsStore = defineStore('settings', {
  state: () => {
    return {
      users: []
    }
  },
  actions: {
    async getUsers(parameter, callback) {
      const { data } = await supabase.from('user_stats').select().eq('username', `${parameter}`)
      this.users.value = data
      callback()
    }
  }
})
