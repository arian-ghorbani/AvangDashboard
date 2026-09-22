import { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [formData, setFormData] = useState({});

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => setFormData({});

  return (
    <ModalContext.Provider value={{ formData, handleFormChange, resetForm }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
