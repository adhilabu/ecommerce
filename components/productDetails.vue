<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="`${product.image}`" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex" @click="addProduct(product)">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
  <div class="success-alert" v-show="isProductAdded">
    {{ message }}
  </div>
</template>
  
<script setup lang="ts">
import { useCartStore } from '@/stores/productcart'
import { CartProduct } from '@/types'

const message = ref('Product added to cart');
const { product } = defineProps(['product'])
const productcart = useCartStore()
const isProductAdded: Ref<boolean> = ref(false);

const addProduct = (product: CartProduct) => {
  productcart.addToCart(product);
  isProductAdded.value = true;
  setTimeout(() => {
    isProductAdded.value = false;
  }, 1000); // Hide the alert after 3 seconds (adjust as needed)
}
</script>
  
<style scoped>
img {
  max-width: 400px;
}
</style>