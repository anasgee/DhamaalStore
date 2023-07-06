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
      let priceArr = action.payload.map((currElement) => {
        return currElement.price;
      });
      // 1st Way using math.max.apply|()
      // let newVal=Math.max.apply(Math,priceArr)
      // console.log(newVal)

      // 2nd Way using array.reduce

      let maxPrice = priceArr.reduce(
        (initialVal, currVal) => Math.max(initialVal, currVal),
        0
      );

      // 3rd Way using spread operator
      //  let maxPrice= Math.max(...priceArr)
      //  console.log(maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
      case "SET_FILTER_LOADING":
        return{
          ...state,
          isLoading:true,
        }
    case "SET_GRID_VIEW":
      return {
        ...state,
        isLoading:false,
        grid_view: true,
      };
    case "SET_List_VIEW":
      return {
        ...state,
        isLoading:false,
        grid_view: false,
      };
  
    case "SET_SORTING_PRODUCTS":
      return {
        ...state,
        sorting_values: action.payload,
      };
    case "SORT_PRODUCTS":
      const { filter_products,sorting_values} = state;
      let sortProducts;
      let setSortProducts = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_values === "highest") {
          return b.price - a.price;
        }
        if (sorting_values === "lowest") {
          return a.price - b.price;
        }
        if (sorting_values === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_values === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      sortProducts = setSortProducts.sort(sortingProducts);

      return {
        ...state,
        filter_products: sortProducts,
      };

    case "GET_SEARCH_PRODUCTS":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, colors, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currElement) => {
          return currElement.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (currElement) =>
            currElement.category.toLowerCase() === category.toLowerCase()
        );
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (currElement) =>
            currElement.company.toLowerCase() === company.toLowerCase()
        );
      }
      if (colors !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currElement) =>
          currElement.colors.includes(colors)
        );
      }
      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (currElement) => currElement.price === price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (currElement) => currElement.price <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };
      
      case "CLEAR_FILTERS":

        return {
          ...state,
          filters:{
            ...state.filters,
            text:"",
            category:"all",
            company:"all",
            colors:"all",
            maxPrice:state.filters.maxPrice,
            price:state.filters.maxPrice,
            minPrice:0,
          }
        
        };

    default:
      return state;
  }
};

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
