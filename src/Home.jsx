import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from './components/Trusted';
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";


const Home=()=> {
  const data = {
    name:"Shopping Mall",
    para:'This is tech website where you will find all related to mobiles, computers ,laptops latest tech news and much more latest unboxing and reviews related to mobiles and other tech things like tech toys, electrical appliances and much more etc, so stay tunned with us',
    contact:"Show Me"
  }
  return (
    <> 

 <HeroSection heroData={data}/>
     <FeatureProduct/>
     <Services/>
     <Trusted/>
 
    </>
  );
}

export default Home;
