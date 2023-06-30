// const FilterReducer = (state,action) => {

//     switch (action.type) {
//         case 'SET_FILTER_PRODUCTS':
//             return {
//               ...state,
//                 filter_products: [...action.payload],
//                 all_products: [...action.payload]
//             }
//         default:
//             return state
//     }

// }

// export default FilterReducer;

// SECOND APPROACH

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      }
      case "SET_List_VIEW":
       return {
        ...state,
        grid_view:false
       }
       case "SET_FILTER_LOADING":
        return{
          ...state,
          isLoading:true
        }
    case "SET_SORTING_PRODUCTS":
   return {
      ...state,
      sorting_values:action.payload,
      }
      case "SORT_PRODUCTS":

      const {filter_products,sorting_values}=state; 
        let sortProducts;
        let setSortProducts = [...filter_products] ;

        const sortingProducts =(a,b)=>{
            if(sorting_values==="highest"){
              return b.price-a.price;
            }
            if(sorting_values==="lowest"){
              return a.price-b.price;
            }
            if(sorting_values==="a-z"){
              return a.name.localeCompare(b.name);
              }
            if(sorting_values==="z-a"){
              return b.name.localeCompare(a.name);
            }
           
            };
            
          sortProducts = setSortProducts.sort(sortingProducts)

      return{
        ...state,
        filter_products:sortProducts,

      }
      case "GET_SEARCH_PRODUCTS":
        const {name,value}=action.payload;

        return{
          ...state,
          filters:{
            ...state.filters,
            [name]:value
          }
        }

        
        case "FILTER_PRODUCTS":
          let {all_products}=state;
          let tempFilterProducts =[...all_products];

          const {text,category}=state.filters;
          if(text){
            tempFilterProducts = tempFilterProducts.filter((currElement)=>{
              return  currElement.name.toLowerCase().includes(text);
          
            })
          }
          if(category!=="all")
            tempFilterProducts=tempFilterProducts.filter((currElement)=>{
              return currElement.category===category;
            })
        return{
          ...state,
          filter_products:tempFilterProducts
        }
    
        

    default:
      return state;
    

  }
    }


export default FilterReducer;


// const FilterReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_FILTER_PRODUCTS":
//       return {
//         ...state,
//         filter_products: [...action.payload],
//         all_products: [...action.payload],
//       };
//     case "SET_GRID_VIEW":
//       return {
//         ...state,
//         grid_view: true,
//       }
//       case "SET_List_VIEW":
//        return {
//         ...state,
//         grid_view:false
//        }
//     case "SET_SORITNG_PRODUCTS":
//       let sort = document.getElementById("sort");
//       let setSortValue = sort.options[sort.selectedIndex].value;
//         console.log(setSortValue);
//    return {
//          ...state,
//          sorting_values: setSortValue,
//       }
//     default:
//       return state;
//   }
// };
// export default FilterReducer;




// SORTING IN DIFFERENT WAYS
// case "SORT_PRODUCTS":

      
// let sortProducts;
// let setSortProducts = [...action.payload] ;

// if(state.sorting_values==="a-z") {
//   sortProducts = setSortProducts.sort((a,b)=> a.name.localeCompare(b.name))}
// if (state.sorting_values==="z-a"){
//   sortProducts = setSortProducts.sort((b,a)=> b.name.localeCompare(a.name)  )
//  }
//   if(state.sorting_values==="lowest") {
//     const sortingProducts =(a,b)=>{
//       return a.price - b.price;
//     }

//     sortProducts = setSortProducts.sort(sortingProducts)
//   }
//   if(state.sorting_values==="highest"){
//     const sortingProducts =(a,b)=>{
//                   return b.price - a.price;
//                 }
//                 sortProducts = setSortProducts.sort(sortingProducts)
//   }


// return{
// ...state,
// filter_products:sortProducts,

// }

// default:
// return state;
// }