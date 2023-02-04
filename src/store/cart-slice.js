import { createSlice } from "@reduxjs/toolkit";

const initialStateCart = {
  items: [
    // {
    //   title: "Test Item",
    //   quantity: 1,
    //   total: 6,
    //   price: 6,
    //   description: "This is a first product - amazing!",
    // },
  ],
  changed: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },

    add(state, action) {
      const existingItem = state.items.find(
        (x) => x.title === action.payload.title
      );
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          title: action.payload.title,
          quantity: 1,
          total: action.payload.price,
          price: action.payload.price,
          description: action.payload.description,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + existingItem.price;
      }
    },

    remove(state, action) {
      const existingItem = state.items.find(
        (x) => x.title === action.payload.title
      );
      state.changed = true;
      if (!(existingItem.quantity === 0)) {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
  },
});

export default cartSlice;
