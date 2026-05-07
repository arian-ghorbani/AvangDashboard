import { createContext, useState } from "react";

export const ModalContext = createContext();

const emptyForm = { name: "", buy: "", sell: "", qty: "" };

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [onConfirm, setOnConfirm] = useState(null);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) setFormData(emptyForm);
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const registerConfirm = (fn) => {
    setOnConfirm(() => fn);
  };

  const confirmModal = () => {
    if (onConfirm) onConfirm(formData);
    setFormData(emptyForm);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, toggleModal, formData, handleFormChange, confirmModal, registerConfirm }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
