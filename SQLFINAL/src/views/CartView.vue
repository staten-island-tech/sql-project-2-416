<script setup>
import HeadingTemplate from './HeadingTemplate.vue'
import Cart from '../components/Cart.vue'
import { supabase } from '../lib/supabaseClient.js'
import { userInformation } from '@/stores/users'
const userInfo = userInformation()
</script>

<script>
import { userInformation } from '@/stores/users'
const userInfo = userInformation()

export default {
  components: {
    HeadingTemplate,
    Cart
  },
  methods: {}
}
</script>

<template>
  <HeadingTemplate></HeadingTemplate>
</template>

<style lang="css" scoped></style>
