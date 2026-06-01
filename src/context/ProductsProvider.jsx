import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [allProducts, setAllProducts, addProduct, removeProduct, updateProduct] =
    useLocalStorage("products", "/src/data/products.json");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        setAllProducts,
        addProduct,
        removeProduct,
        updateProduct,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
