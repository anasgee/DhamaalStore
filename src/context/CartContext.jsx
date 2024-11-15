import {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();
const getCartItem = () => {
  let newCartData = localStorage.getItem("DhamaalCart");
  if (!newCartData || newCartData ==="undefined") { // This will check for null or undefined
    return [];
  } else {
    return JSON.parse(newCartData);

  }
  

  // return JSON.parse(newCartData);
  
};

// We can also do this at if else place
  // const parseData=JSON.parse(newCartData);
  // if(!Array.isArray(parseData))return[];
  // return parseData
const initialState = {
    // cart:[],
  cart: getCartItem() || [],
  total_item: "",
  total_price: "",
  shipping_fee: 10000,
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addToCart = (id, amount, color, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
   
  };
  // const setIncrease=()=>{
  //     return stock>amount? setAmount(amount+1) : setAmount(stock)
  //    }
  //    const setDecrease=()=>{
  //      return  amount>1? setAmount( amount-1) : setAmount(1)}

  // To remove Item in Cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };
  useEffect(() => {
    // dispatch({type:"CART_TOTAL_ITEMS"});
    // dispatch(({type:"CART_TOTAL_PRICE"}))
    dispatch({type:"CART_TOTAL_ITEMS_PRICE"})
    localStorage.setItem("DhamaalCart", JSON.stringify(state.cart));
  }, [state.cart]);
 
  
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        removeItem,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);
export default CartContextProvider;
export { useCartContext };
