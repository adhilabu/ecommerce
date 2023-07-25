<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">E-commerce Store</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/cart">Shopping Cart</NuxtLink>
            <span v-if="totalItems > 0" class="ml-1 inline-block px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-black">{{ totalItems }}</span>

          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/productcart'
const productcart = useCartStore()
const totalItems = computed(() => productcart.getTotalCartItems)

</script>
<style scoped>
.router-link-exact-active {
  color: #12b488;
}</style>