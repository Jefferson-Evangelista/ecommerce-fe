import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useGetProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  const getSingleProduct = useCallback(() => {
    axios.get(`${BASE_URL}/${id}.json`).then((response) => {
      setSingleProduct(response.data);
    });
  }, [id]);

  useEffect(() => {
    getSingleProduct();
  }, [id, getSingleProduct]);

  return {
    singleProduct,
    getSingleProduct,
  };
};

export default useGetProduct;
