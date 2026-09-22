import { useContext, useState } from "react";
import Input from "./Input";
import Modal from "./Modal/Modal";
import { ModalContext } from "../context/ModalProvider";

function AddNewItem({ children, fields, onAdd }) {
  const [isOpen, setIsOpen] = useState(false);
  const { formData, handleFormChange, resetForm } = useContext(ModalContext);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const confirmHandler = () => {
    const firstField = fields[0]?.id;
    if (!formData[firstField]?.toString().trim()) return;

    const result = {};
    fields.forEach(({ id, type, defaultValue }) => {
      const raw = formData[id];
      if (type === "number") {
        result[id] = raw ? Number(raw) : (defaultValue ?? 0);
      } else {
        result[id] = raw ?? "";
      }
    });

    onAdd(result);
    resetForm();
    toggleModal();
  };

  return (
    <>
      <button type="button" className="add-new-product-btn" onClick={toggleModal}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V9h4a1 1 0 0 0 0-2H9z"
            />
          </svg>
        </span>
        <span className="hidden md:inline-flex md:items-center md:justify-center">
          {children}
        </span>
      </button>

      <Modal
        isOpen={isOpen}
        title={`ایجاد ${children} جدید`}
        onClickHandler={setIsOpen}
        confirmHandler={confirmHandler}
      >
        {fields.map((field) => (
          <Input
            key={field.id}
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            className="input-modal"
            value={formData[field.id] ?? ""}
            onChange={(e) => handleFormChange(field.id, e.target.value)}
          />
        ))}
      </Modal>
    </>
  );
}

export default AddNewItem;
