// import React, { createContext, useContext, useReducer } from "react";

// // Create Cart Context
// const CartContext = createContext();

// // Reducer function to handle cart actions
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART": {
//       const itemExists = state.find(item => item.id === action.payload.id);
//       if (itemExists) {
//         // If item already in cart, increase quantity
//         return state.map(item =>
//           item.id === action.payload.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         // If new item, add with quantity = 1
//         return [...state, { ...action.payload, quantity: 1 }];
//       }
//     }

//     case "REMOVE_FROM_CART":
//       return state.filter(item => item.id !== action.payload);

//     case "DECREASE_QUANTITY": {
//       return state
//         .map(item =>
//           item.id === action.payload
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter(item => item.quantity > 0); // Remove if quantity = 0
//     }

//     case "CLEAR_CART":
//       return [];

//     default:
//       return state;
//   }
// };

// // CartProvider Component
// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, []);

//   // Functions to interact with the cart
//   const addToCart = (product) => {
//     dispatch({ type: "ADD_TO_CART", payload: product });
//   };

//   const removeFromCart = (id) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: id });
//   };

//   const decreaseQuantity = (id) => {
//     dispatch({ type: "DECREASE_QUANTITY", payload: id });
//   };

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, decreaseQuantity, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook for using Cart
// export const useCart = () => {
//   return useContext(CartContext);
// };
