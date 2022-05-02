import { useEffect, useState } from "react";

const useProduct = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://shrouded-headland-19320.herokuapp.com/data")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
}
export default useProduct;