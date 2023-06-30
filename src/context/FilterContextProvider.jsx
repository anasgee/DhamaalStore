import React, { createContext,useContext,useEffect,useReducer } from 'react';

import reducer from "../reducer/FilterReducer"
import { useProductContext } from './productContext';


const FilterContext = createContext();
const initialState={
  filter_products:[],
  all_products:[],
  grid_view:true,
  isLoading:false,
  sorting_values:"lowest",
  filters:{
    text:"",
    company:"all",
    category:"all",
    
  }
}

const FilterContextProvider = ({children}) => {
  const {products}=useProductContext();
const [state,dispatch]=useReducer(reducer,initialState);

const setGridView=()=>{
  dispatch({type:"SET_FILTER_LOADING"})
  try{
    return dispatch({type:"SET_GRID_VIEW"});
  }
  catch(error){
dispatch({type:"SET_FILTER_ERROR"})
  }
}

const setListView=()=>{
  dispatch({type:"SET_FILTER_LOADING"})
  try{
  return dispatch({type:"SET_List_VIEW"});
}
catch(error){
dispatch({type:"SET_FILTER_ERROR"})
}
}
const sortings=(e)=>{

  let userValue=e.target.value;
  dispatch({type:"SET_SORTING_PRODUCTS", payload:userValue});
}
const searchFilter=(e)=>{
  let value=e.target.value;
  let name=e.target.name;
  dispatch({type:"GET_SEARCH_PRODUCTS", payload:{name,value}})
}

  useEffect(()=>{
    dispatch({type:"FILTER_PRODUCTS"})
     dispatch({type:"SORT_PRODUCTS"})
  },[state.sorting_values,state.filters])

useEffect(()=>{
  dispatch({type:"SET_FILTER_PRODUCTS",payload:products})
},[products])
  return (
   <>
          <FilterContext.Provider value={{...state,setGridView,setListView,sortings,searchFilter,}}>{children}</FilterContext.Provider>
   </>
  )
};
const useFilterContext=()=>{
  return useContext(FilterContext);
}

export default FilterContextProvider;
export{useFilterContext};







                                                      // SECOND APPROACH




// const FilterContext=createContext();
// const API ="https://api.pujakaitem.com/api/products";
// const initialState={
//   filter_products:[],
//   all_products:[],
// }

// const FilterContextProvider = ({children}) => {
// const [state, dispatch]= useReducer(reducer,initialState)

//   const getTotalProducts = async (url)=>{
//                const res =await axios.get(url);
//                const filter_products = res.data;
//                dispatch({type:"SET_FILTER_PRODUCTS",payload:filter_products})
//   }

//   useEffect(()=>{
//     getTotalProducts(API);
//   })

//   return (
//   <FilterContext.Provider value={{...state}}>{children}</FilterContext.Provider>
//   )
// }

// const useFilterContext =()=>{
//   return useContext(FilterContext);
// }

// export default FilterContextProvider;
// export {useFilterContext};  