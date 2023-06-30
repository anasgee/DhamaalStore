import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components'


const MainHeader =styled.header`
padding:0px 4.8rem;
height:6rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;   
justify-content:space-between;
align-items:center;
position:relative;
.navbar-link{
    font-size:3rem;

}
.navbar-link span{
    color:red;
}
`;
const Header=()=>{
    return(
        <>
        <MainHeader>
            <NavLink  className='navbar-link' to='/'>Dhamaal<span>Store</span> </NavLink>
            <Nav/>
        </MainHeader>

        </>
    )
}
export default Header;