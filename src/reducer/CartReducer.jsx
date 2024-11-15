const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
   
      let { id, color, amount, product } = action.payload;

      let existingItem = state.cart.find((currElement) => {
        return currElement.id === id + color;
      });
      
    

      if (existingItem) {
        let updatedItem = state.cart.map((currElement) => {
          if (currElement.id === id + color) {
            let newAmount = currElement.amount + amount;
            if (newAmount >= currElement.max) {
              newAmount = currElement.max;
            }
            return {
              ...currElement,
              amount: newAmount,
            };
          } else {
            return { currElement };
          }
        });
        return {
          ...state,
          cart: updatedItem,
        };
      } else {
        let cartProduct;
        cartProduct = {
          id: id + color,
          color,
          amount,
          name: product.name,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    case "REMOVE_ITEM":
      let remove = state.cart.filter(
        (currElement) => currElement.id !== action.payload
      );

      return {
        ...state,
        cart: remove,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_INCREASE":
      let increase = state.cart.map((currElement) => {
        if (currElement.id ===action.payload) {
          let increaseAmount = currElement.amount + 1;
          if (increaseAmount >= currElement.max) {
            increaseAmount = currElement.max;
          }
          return {
            ...currElement,
            amount: increaseAmount,
          };
        } else {
          return currElement;
        }
      });
      return {
        ...state,
        cart: increase,
      };
    case "SET_DECREASE":
      let decrease = state.cart.map((currElement) => {
        if (currElement.id === action.payload) {
          let decreaseAmount = currElement.amount - 1;
          if (decreaseAmount <= 1) {
            decreaseAmount = 1;
          }
          return {
            ...currElement,
            amount: decreaseAmount,
          };
        } else {
          return currElement;
        }
      });
      return {
        ...state,
        cart: decrease,
      };
    // case "CART_TOTAL_ITEMS":
    //   let updatedItemVal = state.cart.reduce((initialVal, currElement) => {
    //     initialVal = initialVal + currElement.amount;
    //     return initialVal;
    //   }, 0);
    //   return {
    //     ...state,
    //     total_item: updatedItemVal,
    //   };
    // case "CART_TOTAL_PRICE":
    //   let updatedSubTotal = state.cart.reduce((initialVal, currElement) => {
    //     let { price, amount } = currElement;
    //     initialVal = initialVal + price * amount;
    //     return initialVal;
    //   }, 0);
    //   return {
    //     ...state,
    //     total_price: updatedSubTotal,
    //   };


                            // WE CAN ALSO SIMPLIFY THE ABOVE REDUCER METHOD CODE WITH FOLLOWING

    case "CART_TOTAL_ITEMS_PRICE":
  
      let { total_item, total_price } = state.cart.reduce(
        (accumulator, currElement) => {
          let { price, amount } = currElement;
          accumulator.total_item += amount;
          accumulator.total_price += price * amount;
          return accumulator;
        },
        { total_item: 0, total_price: 0 }
      );

      return {
        ...state,
        total_item,
        total_price,
      };

    default:
      return {
        state,
      };
  }
};

export default CartReducer;
