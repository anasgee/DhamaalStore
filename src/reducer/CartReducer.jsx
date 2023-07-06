
const CartReducer = (state,action) => {

  switch (action.type){
case "ADD_TO_CART":
  
let {id,color,amount,product}=action.payload;

let cartProduct;
cartProduct ={
  id:id+color,
  color,
  amount,
  name:product.name,
  image:product.image[0],
  price:product.price,
  max:product.stock

}
return{
  ...state,
  cart:[...state.cart,cartProduct]

}
default:
  return{
    state
  }
  

}

}

export default CartReducer;