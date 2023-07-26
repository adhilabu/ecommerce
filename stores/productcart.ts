// stores/productcart.js
import { defineStore } from 'pinia'
import { CartProduct } from '@/types'

export const useCartStore = defineStore('cart', () => {

    const cartProducts = ref<CartProduct[]>([]);

    // Access the value using .value and convert it to a regular array
    const calculateTotals = computed(() => cartProducts.value.reduce((acc: number, product: CartProduct) => {
        return acc + product.price * product.quantity;
    }, 0));

    const getTotalCartItems = computed(() => cartProducts.value.length)

    function addToCart(addProduct: CartProduct) {
        const existingProduct = cartProducts.value.find(findProduct => findProduct.id === addProduct.id);

        if (existingProduct) {
            // If the product already exists in the cart, increase its quantity
            existingProduct.quantity += 1;
        } else {
            // If the product doesn't exist in the cart, add it with a quantity of 1
            cartProducts.value.push({
                id: addProduct.id,
                title: addProduct.title,
                price: addProduct.price,
                quantity: 1,
            });
        }
    }

    function removeFromCart(removeProduct: CartProduct) {
        const index = cartProducts.value.findIndex(indexProduct => indexProduct.id === removeProduct.id);

        if (index !== -1) {
            const product = cartProducts.value[index];

            // If the product quantity is greater than 1, decrease the quantity
            if (product.quantity > 1) {
                product.quantity -= 1;
            } else {
                // If the product quantity is 1, remove it from the cart
                cartProducts.value.splice(index, 1);
            }
        }
    }

    return { cartProducts, calculateTotals, getTotalCartItems, addToCart, removeFromCart }

})