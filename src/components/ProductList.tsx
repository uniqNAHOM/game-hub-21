import { useEffect } from "react";

const ProductList = ({ category }: { category: string }) => {
  useEffect(() => {
    console.log("Fetching Products in ", category);
  }, [category]);
  return <div>{category}</div>;
};

export default ProductList;
