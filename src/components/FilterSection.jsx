import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContextProvider";
import {FaCheck} from "react-icons/fa";
import PriceFormat from "../Helper/PriceFormat"

const FilterSection = () => {
  const {
    searchFilter,
    filters: { text, category, company, colors,price,minPrice,maxPrice },
    all_products,
  } = useFilterContext();

  // getUniqueData from api through allProducts that have been get from useFilterContext
  const getUniqueData = (data, property) => {
    let newVal = data.map((currElement) => {
      return currElement[property];
    });
    if (property === "colors") {
      // return (
      // newVal= ["all",...new Set([].concat(...newVal))                    we can also do it with flat function
      // );
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={searchFilter}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((currElement, index) => {
            return (
              <button
                type="button"
                key={index}
                name="category"
                value={currElement}
                onClick={searchFilter}
              >
                {currElement}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={searchFilter}
          >
            {companyData.map((currElement, index) => {
              return (
                <option key={index} name="company" value={currElement}>
                  {currElement}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      {/* Colors section in e-commerce react jsx website */}

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((currColor, index) => {
            if(currColor==="all"){
              return(
                <button
                className="color-all--style"
                value={currColor}
                name="colors"
                onClick={searchFilter}
                >
                All

                </button>
              )
            }
            return (
              <button
                key={index}
                type="button"
                value={currColor}
                name="colors"
                style={{ backgroundColor: currColor }}
                className={colors===currColor?"btnStyle active":"btnStyle"}
                onClick={searchFilter}
              >
                {colors === currColor ? <FaCheck className="checkStyle"/> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-price">
      <h3>Price</h3>

      <p><PriceFormat price={price}/></p>
      <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={searchFilter}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
