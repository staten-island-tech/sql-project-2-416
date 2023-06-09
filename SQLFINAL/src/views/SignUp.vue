<template>
  <HeadingTemplate></HeadingTemplate>
  <form class="sign">
    <div class="field">
      <label for="email">Username</label>
      <input id="email" type="text" v-model="email" />
    </div>
    <div class="field">
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <div class="field">
      <label for="confirm">Confirm Password</label>
      <input id="confirm" type="password" v-model="confirm" />
    </div>
    <div class="field">
      <button
        type="button"
        class="create"
        v-if="samePassword() && this.password != ''"
        @click.prevent="createUser"
      >
        Create
      </button>
      <button
        type="button"
        class="create"
        v-else
        @click.prevent="createUser"
        disabled
        title="Please fill out all the fields above"
      >
        Create
      </button>
    </div>
  </form>
  <div id="result"></div>
  <h1 id="duplicateEmail" ref="duplicateEmail"></h1>
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
    async createUser() {
      const signUpData = await supabase.auth.signUp({
        email: this.email,
        password: this.password
      })
      console.log(signUpData)
      try {
        if (signUpData.data.user.identities.length == 0) {
          alert('Sorry, this email is already in use or is not real.')
        } else {
          if (signUpData.error) {
            console.log(signUpData.error)
            alert(
              'Please make sure you are entering a real email and that your password is over 6 characters.'
            )
          } else {
            console.log(signUpData.data)
            alert(
              'We have sent a verification email to you. Please click the link to verify your account.'
            )
          }
        }
      } catch (error) {
        alert('Password needs to be at least 6 characters')
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

.create {
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.25s;
}

.create:hover {
  transform: scale(1.08);
  transition: all 0.25s;
}
</style>
