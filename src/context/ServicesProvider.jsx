import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ServicesContext = createContext();

function ServicesProvider({ children }) {
  const [
    allServices,
    setAllServices,
    isLoading,
    addService,
    removeService,
    updateService,
  ] = useLocalStorage("services", [
    {
      title: "نصب ویندوز + نرم افزار + درایور",
      min_price: 1_200_000,
      max_price: 800_000,
    },
  ]);

  return (
    <ServicesContext.Provider
      value={{
        allServices,
        setAllServices,
        isLoading,
        addService,
        removeService,
        updateService,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

export default ServicesProvider;
