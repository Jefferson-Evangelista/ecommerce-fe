import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchState } from "../state/search-context";
import { SET_PRODUCTS } from "../state/actionTypes";
import { setProducts } from "../state/actionCreators";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useSearch = () => {
  const [state, dispatch] = useSearchState()
  
    const getProducts = (params) => {
      dispatch(setProducts([]))

      axios
        .get(`${BASE_URL}.json`, {
          params,
        })
        .then(({ data }) => {
          dispatch(setProducts(data))
        });
    };

    const setFilter = (type, value) => {
      const params = {
        [type]: value,
      };
        getProducts(params);
    }
  
    useEffect(() => {
      getProducts();
    }, []);
  
    return {setFilter};
  };
  
  export default useSearch;