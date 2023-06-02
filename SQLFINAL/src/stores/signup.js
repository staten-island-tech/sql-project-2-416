import { defineStore } from 'pinia'
import { supabase } from '../lib/supabaseClient'

export const users = defineStore('settings', {
  state: () => {
    return {}
  },
  actions: {
    async userCreate(userEmail, userPassword) {
      const { data, error } = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword
      })
    }
  }
})
