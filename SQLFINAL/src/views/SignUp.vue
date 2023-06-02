<template>
  <HeadingTemplate></HeadingTemplate>
  <form class="sign">
    <label for="email">Username</label>
    <input id="email" type="text" ref="email" />
    <label for="password">Password</label>
    <input id="password" type="text" ref="password" />
    <label for="confirm">Confirm Password</label>
    <input id="confirm" type="text" ref="confirm" />
    <button type="submit" @click.prevent="userCreate(this.$refs.email, this.$refs.password)">
      Create
    </button>
  </form>
  <!-- <div v-if="userCheck(this.$refs.username.value)">Same</div> -->
</template>

<script>
import HeadingTemplate from './HeadingTemplate.vue'
import { defineComponent } from 'vue'
import { users } from '@/stores/signup'
import { supabase } from '../lib/supabaseClient'

export default {
  components: {
    HeadingTemplate
  },
  methods: {}
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
