import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from './components/Footer'
import ErrorPage from './ErrorPage'



const App=()=> {

  const theme ={
    colors:{
      bg: '#f6f8fa',
      footer_bg: '#0a1435',
      btn:'rgb(98,84,243,0.5)',
      hr:'#ffffff',
      gradient:'linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
      shadow:'rgb(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.25)',
      shadowSupport:'rgba(0,0,0,0.16) 0px,1px,4px',
        },
      media:{
        mobile:'768px',
        tab:'998px',
      }
      
  }

  
  return (
    <>
    
     <ThemeProvider theme={theme}>

     <Router>
     <GlobalStyle/>
      <Header />
 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    
     <Footer/>
     </Router>
     </ThemeProvider>
    </>
  );
}

export default App;
