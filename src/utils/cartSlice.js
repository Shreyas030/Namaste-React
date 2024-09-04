import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items: [],
            totalItems:0,
        },
        reducers: {
            addItem: (state, action) => {
                
                
                const existingItemIndex = state.items.findIndex(
                    item => item.card.info.id === action.payload.card.info.id
                );

                if (existingItemIndex !== -1) {
                    state.items[existingItemIndex].quantity += 1;
                } else {
                    state.items.push({ ...action.payload, quantity: 1 });
                }
                state.totalItems += 1;
            },

            removeItem: (state, action) => {
                const index = state.items.findIndex(
                    item => item.card.info.id === action.payload.card.info.id
                );

                if (index !== -1) {
                    if (state.items[index].quantity > 1) {
                        // If the item quantity is more than 1, decrease the quantity
                        state.items[index].quantity -= 1;
                    } else {
                        // If the item quantity is 1, remove the item from the cart
                        state.items.splice(index, 1);
                    }
                }
                state.totalItems+=-1;
            },

            clearCart: (state) => {
                state.items.length = 0;//[]  
                state.totalItems=0;
            }
        },

    }
)

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
