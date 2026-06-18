import { useContext, useState } from "react";
import Input from "./Input";
import Modal from "./Modal/Modal";
import { ModalContext } from "../context/ModalProvider";

function AddNewProduct({ children, onAddProduct }) {
  const [isOpen, setIsOpen] = useState(false);
  const { formData, handleFormChange, resetForm } = useContext(ModalContext);

  const inputs = [
    { id: "name", type: "text", placeholder: "نام محصول" },
    { id: "buy", type: "number", placeholder: "قیمت خرید" },
    { id: "sell", type: "number", placeholder: "قیمت فروش" },
    { id: "qty", type: "number", placeholder: "تعداد" },
  ];

  const toggleModal = () => setIsOpen((prev) => !prev);

  const confirmHandler = () => {
    if (!formData.name.trim()) return;
    onAddProduct({
      name: formData.name,
      buy: Number(formData.buy),
      sell: Number(formData.sell),
      qty: Number(formData.qty),
    });
    resetForm();
    toggleModal();
  };

  return (
    <>
      <button
        type="button"
        className="add-new-product-btn"
        onClick={toggleModal}
      >
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
        title="ایجاد محصول جدید"
        onClickHandler={setIsOpen}
        confirmHandler={confirmHandler}
      >
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            className="input-modal"
            value={formData[input.id]}
            onChange={(e) => handleFormChange(input.id, e.target.value)}
          />
        ))}
      </Modal>
    </>
  );
}

export default AddNewProduct;
