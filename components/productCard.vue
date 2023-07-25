<template>
  <div class="card text-center">
    <img :src="`${product.image}`" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <div class="flex justify-evenly">
    <NuxtLink :to="`/${product.id}`">
      <p class="btn my-4 gap-4">View Details</p>
    </NuxtLink>
    <button class="btn my-4" @click="addProduct(product)">Add to cart</button></div>
  </div>
</template>
  
<script setup lang="ts">
import { useCartStore } from '@/stores/productcart'
import { Product } from '@/types'

const { product } = defineProps(['product'])
const productcart = useCartStore()

const addProduct = (product: Product) => {
            productcart.addToCart(product)
            setTimeout(() => {
                alert("Product added to the cart!");
            }, 500);
        }
</script>
  
<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>