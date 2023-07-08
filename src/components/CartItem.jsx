import React from 'react';
import PriceFormat from "../Helper/PriceFormat";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from "../context/CartContext";

const CartItem = ({id,name,color,price,amount,image}) => {
    const {removeItem,setIncrease,setDecrease}=useCartContext();


  
  
    return (
     <div className='cart_heading grid grid-five-column'>
     <div className='cart-image--name'>
        <div>
            <figure>
                <img src={image} alt={id}/>
            </figure>
        </div>
        <div>
            <p>{name}</p>
        
        <div className='color-div'>
        <p>Color:</p>
        <div className="color-style" style={{ backgroundColor: color,color:color}}>  </div>
        </div>
        </div>

     </div>

     {/* Price Section */}
     <div className='cart-hide'>
        <PriceFormat price={price}/>
     </div>
     {/* Quantity */}
<div>
     
<CartAmountToggle
      amount={amount}
      setIncrease={()=>setIncrease(id)}
      setDecrease={()=> setDecrease(id)}
    />
</div>
<div className='cart-hide'>
    <PriceFormat price={price*amount}/>
</div>
<div>
    <FaTrash className='remove_icon' onClick={()=>removeItem(id)}/>
</div>

     </div>
  )
}

export default CartItem;