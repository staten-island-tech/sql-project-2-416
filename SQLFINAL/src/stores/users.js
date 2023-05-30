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
    async getUsers(parameter) {
      const { data } = await supabase.from('user_stats').select().eq('username', `${parameter}`)
      this.users.value = data
    }
    // async check(parameter) {
    //   const { data } = await supabase.from('user_stats').select().eq('username', `${parameter}`) //Gets TestUser information from Supabase
    //   this.users.value = data
    // }
  }
})
