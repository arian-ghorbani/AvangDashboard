import { createContext, useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ServicesContext.Provider
      value={{
        allServices,
        setAllServices,
        isLoading,
        addService,
        removeService,
        updateService,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

export default ServicesProvider;
