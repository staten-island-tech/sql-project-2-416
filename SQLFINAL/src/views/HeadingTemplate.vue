<template>
  <div class="router">
    <router-link class="link" to="/">Store</router-link>
    <span>
      <router-link class="link" to="Cart">Cart</router-link>
    </span>
    <router-link class="link" to="Login">Login</router-link>
    <button class="link" @click.prevent="logOut">
      <!-- ${USER } -->
      Sign Out
    </button>
    <h2 class="displayLog">Logged in: {{ userInfo.user.email }}</h2>
  </div>
</template>

<script>
import { supabase } from '../lib/supabaseClient.js'
import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  name: 'HeadingTemplate',
  async mounted() {
    console.log(userInfo.user)
    if (localStorage.getItem('loggedIn') == 'true') {
      console.log('true')
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userInfo.user.email,
        password: userInfo.user.password
      })
    } else {
      console.log('false')
    }
    console.log(userInfo.user)
  },
  methods: {
    async logOut() {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.log(error)
      } else {
        console.log('Success')
        userInfo.user = {}
        localStorage.clear()
        localStorage.setItem('loggedIn', false)
      }
    },
    async autoLogIn(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
    }
  }
}
</script>

<script setup>
import DefaultView from './DefaultView.vue'
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap');

html,
body,
* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: 'Raleway', sans-serif;
}
.link {
  margin-left: 10rem;
  margin: 2rem;
  font-size: 3rem;
}

.router {
  border: solid black 1px;
  border-radius: 10px;
}

.displayLog {
  font-size: 2rem;
}
</style>
