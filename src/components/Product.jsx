import React from 'react'
import { NavLink } from 'react-router-dom';
import PriceFormat from '../Helper/PriceFormat';
const Product = (currElemement) => {

    const {id,name,category,image,price} = currElemement;


  return (
    <div>
    <NavLink to={`/singleproduct/${id}`}>
    <div className='card'>
        <figure>
            <img src={image} alt={name}/>
            <figcaption className='caption'>{category}</figcaption>
        </figure>
        <div className='card-data'>
            <div className='card-data-flex'>
                <h3>{name}</h3>
                <p className='card-data--price'>{<PriceFormat price={price}/>}</p>
            </div>
        </div>
    </div>

    </NavLink>  
    </div>
  )
}

export default Product;
