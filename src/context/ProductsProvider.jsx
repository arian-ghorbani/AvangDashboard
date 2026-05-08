import { createContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [allProducts, setAllProducts, addProduct] = useLocalStorage(
    "products",
    "/src/data/products.json",
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/src/data/products.json");
        const data = await res.json();
        setAllProducts([...data]);
      } catch (error) {
        console.log("Fetching products has error: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        setAllProducts,
        addProduct,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
