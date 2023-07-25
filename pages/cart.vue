<template>
    <main>
        <div>
            <h2 class="font font-bold text-5xl">Your Shopping Cart</h2><br><br>
            <table class="tb">
                <thead>
                    <tr>
                        <th class="tb th">Product Name</th>
                        <th class="tb th">Price</th>
                        <th class="tb th">Quantity</th>
                        <th class="tb th">Total Price</th>
                        <th class="tb th">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <td class="tb td">{{ product.title }}</td>
                        <td class="tb td">{{ product.price }}</td>
                        <td class="tb td">{{ product.quantity }}</td>
                        <td class="tb td">{{ totalProductPrice(product.price, product.quantity) }}</td>
                        <td class="tb td" @click="productcart.removeFromCart(product)">
                            <button class="remove-item btn">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <section class="cart-summary bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold mb-4">Cart Summary</h2>
            <div class="border-t border-gray-300 pt-4">
                <p class="text-sm text-gray-600">Total Items: <span class="text-black" id="total-items">{{ totalItems }}</span></p>
                <p class="text-sm text-gray-600">Total Price: $<span class="text-black" id="total-price">{{ totalPrice }}</span></p>
            </div>
            <button
                class="checkout-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded-md">
                Proceed to Checkout
            </button>
        </section>

    </main>
    <footer>
        <p>&copy; 2023 My E-commerce Store. All rights reserved.</p>
    </footer>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/stores/productcart'
import { CartProduct } from 'types';

const productcart = useCartStore()
const products: CartProduct[] = productcart.cartProducts;


const totalPrice = computed(() => productcart.calculateTotals)
const totalItems = computed(() => productcart.getTotalCartItems)

const totalProductPrice = (price:number, qty:number) => {
    return price*qty
}
</script>

<style scoped></style>