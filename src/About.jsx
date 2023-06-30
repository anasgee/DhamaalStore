import React from "react";
import HeroSection from "./components/HeroSection";
// import {useProductContext} from './context/productContext'


const About=()=> {  

  // const{ intro} =useProductContext();
  const data ={
    name:"Anas Raza",
    para:'Contact me using following links',
    contact:'Get in Touch ?'
  }
  
  return (
    <>
    {/* {intro} */}
 <HeroSection heroData={data}/>
    </>
  );
}

export default About;
