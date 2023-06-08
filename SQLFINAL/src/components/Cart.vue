<template>
  <div>{{ id }}</div>
  <div>{{ count }}</div>
</template>

<script>
import { useAmiiboStore } from '../stores/shop.js'
const AmiiboStore = useAmiiboStore()
export default {
  name: 'Cart',
  props: {
    id: Number,
    count: Number
  }
}
</script>

<style lang="scss" scoped></style>
