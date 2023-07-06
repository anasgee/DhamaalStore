import { createContext, useReducer,useContext } from "react";
import reducer from "../reducer/CartReducer"

const CartContext=createContext();
const initialState={
    cart:[],
    total_item:"",
    total_price:"",
    shipping_fee:50000, 

}

const CartContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialState);
    
    const addToCart=(id,amount,color,product)=>{
    dispatch({type:"ADD_TO_CART" , payload: { id, color, amount, product }})      
    }

  return <CartContext.Provider value={{...state,addToCart}}>{children}</CartContext.Provider>
}

const useCartContext=()=>useContext(CartContext);
export default CartContextProvider;
export {useCartContext};