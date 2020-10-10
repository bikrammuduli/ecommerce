export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// [
//     {
//         id:1,
//         name:'product1',
//         quantity:3
//     },
//     {
//         id:2,
//         name:'product2',
//         quantity: 1
//     },
//     {
//         id:3,
//         name:'product3',
//         quanity:1
//     },
//     {

//     }

// ]

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToBeRemoved.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToBeRemoved.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToBeRemoved.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
