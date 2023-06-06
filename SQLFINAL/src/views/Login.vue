<script>
import HeadingTemplate from './HeadingTemplate.vue'
import logOut from './HeadingTemplate.vue'
import { defineComponent, ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  data() {
    return {
      email: ref(''),
      password: ref('')
    }
  },
  components: {
    HeadingTemplate
  },
  methods: {
    async getUsers() {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password
      })
      if (error) {
        console.log(error)
      } else {
        console.log(data)
        userInfo.user = { email: this.email, password: this.password, loggedIn: true }
        localStorage.clear()
        localStorage.setItem('loggedIn', true)
        localStorage.setItem('email', this.email)
        localStorage.setItem('password', this.password)
        console.log(userInfo.user)
      }
    }
  }
}
</script>

<script setup></script>

<template>
  <HeadingTemplate></HeadingTemplate>
  <div class="containerDiv">
    <form class="userheaders">
      <label id="username" for="email">Email</label>
      <input id="emailInput" type="text" v-model="email" />
      <label id="password" for="password">Password</label>
      <input id="passwordInput" type="text" v-model="password" />
      <button id="login" type="submit" @click.prevent="getUsers">Login</button>
    </form>
    <!--     <h2 class="loginClick" v-if="(this.userInfo.user = true)">TEST</h2> -->
    <router-link id="login" class="loginClick" to="/SignUp">Sign Up</router-link>
  </div>
  <!-- <h2 v-if=""></h2> -->
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap');

html,
body,
* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: 'Raleway', sans-serif;
}

.containerDiv {
  font-size: 4.5rem;
}

.loginClick {
  font-size: 4rem;
}
</style>
