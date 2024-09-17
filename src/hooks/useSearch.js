import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useSearch = () => {
    const [products, setProducts] = useState([]);
  
    const getProducts = (params) => {
      setProducts([]);

      axios
        .get(`${BASE_URL}.json`, {
          params,
        })
        .then(({data}) => {
            setProducts(data);
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
  
    return {products, setFilter};
  };
  
  export default useSearch;