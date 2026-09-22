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
  ] = useLocalStorage("services", []);

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
