<script>
import HeadingTemplate from './HeadingTemplate.vue'
import logOut from './HeadingTemplate.vue'
import { defineComponent, ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  name: 'Login',
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
        //console.log(error)
        alert(
          'Please re-enter (or finish entering) your login credentials. If you do not have an account, please create one.'
        )
      } else if (userInfo.user.email == this.email) {
        alert("You're . . . already logged in?")
      } else if (userInfo.user.loggedIn == 'true') {
        alert('Someone else is logged in. Please log out of this account before you sign in!')
      } else {
        userInfo.user.email = this.email
        userInfo.user.loggedIn = true
        this.email = ''
        this.password = ''
        location.replace(`/`)
      //  console.log(userInfo.user)
      }
    }
  }
}
</script>

<script setup></script>

<template>
  <HeadingTemplate></HeadingTemplate>
  <header>Top of the Login Page</header>
  <div class="containerDiv">
    <form class="userheaders">
      <div class="field">
        <label id="username" for="email">Email</label>
        <input id="emailInput" type="text" v-model="email" />
      </div>
      <div class="field">
        <label id="password" for="password">Password</label>
        <input id="passwordInput" type="password" v-model="password" />
      </div>
      <button class="login" type="submit" @click.prevent="getUsers">Login</button>
      <router-link class="login" id="loginClick" to="SignUp">Sign Up</router-link>
    </form>
  </div>
  <footer>Bottom of the Login page</footer>
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
  font-size: 7rem;
}

.userheaders {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.field {
  display: flex;
  font-size: 3rem;
  margin: 0.5rem;
}

.login {
  font-size: 3rem;
  padding: 8rem;
  border: black solid 3px;
  background-color: white;
  border-radius: 55px;
  margin: 5px;
  transition: all 0.6s;
  text-decoration: none;
  color: black;
  justify-content: center;
  padding: 0.8rem;
  font-size: 4rem;
}

.login:hover {
  border-radius: 5px;
  transition: all 0.5s;
  transform: scale(1.02);
  background-color: black;
  color: white;
}

#loginClick {
  margin-top: 20rem;
  font-size: 2.2rem;
}

#loginClick:hover {
  box-shadow: 10px 5px 5px;
}
</style>
