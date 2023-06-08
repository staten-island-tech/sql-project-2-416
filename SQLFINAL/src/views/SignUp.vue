<template>
  <HeadingTemplate></HeadingTemplate>
  <form class="sign">
    <label for="email">Username</label>
    <input id="email" type="text" v-model="email" />
    <label for="password">Password</label>
    <input id="password" type="text" v-model="password" />
    <label for="confirm">Confirm Password</label>
    <input id="confirm" type="text" v-model="confirm" />
    <button v-if="samePassword() && this.password != ''" @click.prevent="createUser">Create</button>
    <button v-else @click.prevent="createUser" disabled>Create</button>
  </form>
  <!-- <div v-if="userCheck(this.$refs.username.value)">Same</div> -->
</template>

<script>
import HeadingTemplate from './HeadingTemplate.vue'
import { defineComponent, ref } from 'vue'
import { supabase } from '../lib/supabaseClient'

export default {
  data() {
    return {
      email: ref(''),
      password: ref(''),
      confirm: ref('')
    }
  },
  components: {
    HeadingTemplate
  },
  methods: {
    async createUser(userEmail, userPassword) {
      const { data, error } = await supabase.from('shopping_cart').select().eq('email', userEmail)

      const signUpData = await supabase.auth.signUp({
        email: this.email,
        password: this.password
      })
      await supabase
        .from('shopping_cart')
        .insert([{ email: this.email, amiibo: [], respectiveCount: [] }])
      if (signUpData.error) {
        console.log(signUpData.error)
      } else {
        console.log(signUpData.data)
      }
    },
    samePassword() {
      return this.password == this.confirm
    }
  }
}
</script>

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
.sign {
  font-size: 3rem;
}
</style>
