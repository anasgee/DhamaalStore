import React from 'react'
import { NavLink } from 'react-router-dom';
import PriceFormat from '../Helper/PriceFormat';
import styled from "styled-components"
const Product = (currElemement) => {

    const {id,name,category,image,price} = currElemement;


  return (
    <Wrapper>
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
                <div className='price'>
                <del>    <PriceFormat price ={price+25000}/></del>
                
                <p className='card-data--price'>         <PriceFormat price={price}/>
                    </p>
                </div>
            </div>
        </div>
    </div>

    </NavLink>  
    </div>
    </Wrapper>
  )
}
const Wrapper =styled.section`
.price{
    display:flex;
    justify-content:flex-end;
    flex-direction:column;
}
`

export default Product;
