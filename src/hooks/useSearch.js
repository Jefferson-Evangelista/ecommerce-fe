import { useEffect, useState } from 'react';
import axios from 'axios';

// import { PRODUCT_TAGS } from '../constants/tags';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products';

const useSearch = () => {
    const [products, setProducts] = useState([]);

    const getProducts = params => {
        axios
            .get(`${BASE_URL}.json`, {
                params,
            })
            .then(({ data }) => {
                console.log({ data });
                setProducts(data);
            });
    };

    const setFilter = (type, value) => {
        const params = {
            [type]: value,
        };
        getProducts(params);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return {products, setFilter};
};

export default useSearch;
