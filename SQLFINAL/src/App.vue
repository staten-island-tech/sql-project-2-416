<template>
  <!-- <Shop></Shop> -->
</template>

<script setup>
// import Shop from './views/Shop.vue'
import { storeToRefs } from 'pinia'
import { shop } from '@/stores/shop'
const store = shop()
const { amiibos } = storeToRefs(store)
</script>

<style scoped></style>
