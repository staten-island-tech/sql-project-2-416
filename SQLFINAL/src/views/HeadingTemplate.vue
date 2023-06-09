<template>
  <div class="router">
    <button class="buttonout" type="button">
      <button type="button" class="buttonin">
        <router-link class="link" to="/">Store</router-link>
      </button>
    </button>

    <button class="buttonout" type="button" v-if="userInfo.user.loggedIn">
      <button type="button" class="buttonin" v-if="userInfo.user.loggedIn">
        <router-link class="link" to="Cart">Cart</router-link>
      </button>
    </button>

    <button class="buttonout" type="button">
      <button type="button" class="buttonin" @click.prevent="logOut" v-if="userInfo.user.loggedIn">
        <router-link class="link" to="Login">Sign out</router-link>
      </button>
      <button type="button" class="buttonin" v-else>
        <router-link class="link" to="Login">Login</router-link>
      </button>
    </button>

    <h2 class="displayLog" v-if="userInfo.user.loggedIn == true">
      Logged in: {{ userInfo.user.email }}
    </h2>
  </div>
</template>

<script>
import { supabase } from '../lib/supabaseClient.js'
import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  name: 'HeadingTemplate',
  async mounted() {
    const { data, error } = await supabase.auth.getSession()
    if (data.session) {
      userInfo.user.loggedIn = true
      userInfo.user.email = data.session.user.email
    }
    const userShoppingCart = await supabase.from('amiibo_cart').select()

    const userCart = await supabase
      .from('amiibo_cart')
      .select(`amiibo_id, amiibo(character, gameSeries, image, name, price)`)
    userInfo.realShoppingCart = userCart.data
      for (let i = 0; i < userShoppingCart.data.length; i++) {
     // console.log(userInfo.totalCount)
    //  console.log(userShoppingCart.data[i].count)
      Object.defineProperties(userInfo.realShoppingCart[i], {
        count: { value: userShoppingCart.data[i].count }
      })
    }

   // console.log(userInfo.realShoppingCart)
  },
  methods: {
    async logOut() {
      const { error } = await supabase.auth.signOut()
      if (error) {
      } else {
        userInfo.user.email = null
        userInfo.user.loggedIn = false
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
  text-decoration: none;
  color: black;
  font-size: 3rem;
}

.link:visited {
  text-decoration: none;
  color: black;
}

.button {
  align-items: center;
  justify-content: center;
  margin: 5px;
}

.router {
  border: solid black 5px;
  border-radius: 10px;
  padding: 0.5rem;
}

.displayLog {
  font-size: 2rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.buttonin {
  font-size: 3rem;
  color: black;
  border: solid 3px black;
  padding: 10px;
  background-color: white;
  border-radius: 4rem;
  transition: all 0.2s;
}

.buttonout {
  font-size: 2.5rem;
  margin: 2rem;
  background-color: white;
  border: solid 0.5px black;
  border-radius: 4rem;
  transition: all 0.2s;
}

.buttonin:hover {
  background-color: white;
  color: black;
}

.buttonout:hover {
  border: solid 6px black;
  padding: 10px;
  transform: scale(1.05);
  border: 1px solid rgba(0, 0, 0, 0);
  margin: 1.36rem;
}
</style>
