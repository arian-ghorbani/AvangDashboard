import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [
    allProducts,
    setAllProducts,
    isLoading,
    addProduct,
    removeProduct,
    updateProduct,
  ] = useLocalStorage("products", []);

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        setAllProducts,
        isLoading,
        addProduct,
        removeProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
