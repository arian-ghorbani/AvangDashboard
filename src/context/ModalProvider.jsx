import { createContext, useState } from "react";

export const ModalContext = createContext();

const emptyForm = { name: "", buy: "", sell: "", qty: "" };

function ModalProvider({ children }) {
  const [formData, setFormData] = useState(emptyForm);

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => setFormData(emptyForm);

  return (
    <ModalContext.Provider value={{ formData, handleFormChange, resetForm }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
