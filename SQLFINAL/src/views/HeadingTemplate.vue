<template>
  <div class="router">
    <router-link class="link" to="/">Store</router-link>
    <router-link class="link" to="Login">Login</router-link>
    <span>
      <router-link class="link" to="Cart">Cart</router-link>
    </span>
    <button class="link" @click.prevent="logOut">
      <!-- ${USER } -->
      Sign Out
    </button>
  </div>
  <h2 v-if="userInfo.loggedIn">{{ userInfo.user.value.email }}</h2>
</template>

<script>
import { supabase } from '../lib/supabaseClient.js'
import { userInformation } from '@/stores/users'
const userInfo = userInformation()
// const loggedIn = window.localStorage.getItem("loggedIn")

export default {
  name: 'HeadingTemplate',
  methods: {
    async logOut() {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.log(error)
      } else {
        console.log('Success')
        userInfo.user = {}
        userInfo.loggedIn = false
        // window.localStorage.setItem('loggedIn', false)
      }
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
</style>
