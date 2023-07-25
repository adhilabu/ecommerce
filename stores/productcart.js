// stores/productcart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        return {cartProducts : []}
    },

    getters: {
        calculateTotals: (state) => {
            let totalPrice = 0;

            for (const cartProduct of state.cartProducts) {
                totalPrice += cartProduct.price * cartProduct.quantity;
            }

            // Return the total price rounded to 2 decimal places
            return totalPrice.toFixed(2);
        },
        getTotalCartItems:(state) => {
            return state.cartProducts.length;
        }
    },

    actions: {
        addToCart(addProduct) {
            const existingProduct = this.cartProducts.find(findProduct => findProduct.id === addProduct.id);

            if (existingProduct) {
                // If the product already exists in the cart, increase its quantity
                existingProduct.quantity += 1;
            } else {
                // If the product doesn't exist in the cart, add it with a quantity of 1
                this.cartProducts.push({
                    id: addProduct.id,
                    title: addProduct.title,
                    price: addProduct.price,
                    quantity: 1,
                });
            }
        },
        removeFromCart(removeProduct) {
            // Find the index of the product in the cart
            const index = this.cartProducts.findIndex(indexProduct => indexProduct.id === removeProduct.id);

            if (index !== -1) {
                const product = this.cartProducts[index];

                // If the product quantity is greater than 1, decrease the quantity
                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    // If the product quantity is 1, remove it from the cart
                    this.cartProducts.splice(index, 1);
                }
            }
        },
    },
})