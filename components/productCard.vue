<template>
  <div class="card text-center">
    <img :src="`${product.image}`" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <div class="flex justify-evenly">
      <NuxtLink :to="`/${product.id}`">
        <p class="btn my-4 gap-4">View Details</p>
      </NuxtLink>
      <button class="btn my-4" @click="addProduct(product)">Add to cart</button>
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
const { product } = defineProps(['product']);
const productcart = useCartStore();
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
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}

.success-alert {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>