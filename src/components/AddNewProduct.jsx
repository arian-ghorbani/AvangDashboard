import { useContext, useEffect } from "react";
import Input from "./Input";
import Modal from "./Modal/Modal";
import { ModalContext } from "../context/ModalProvider";

function AddNewProduct({ children, onAddProduct }) {
  const { toggleModal, formData, handleFormChange, registerConfirm } =
    useContext(ModalContext);

  useEffect(() => {
    registerConfirm((data) => {
      if (!data.name.trim()) return;
      onAddProduct({
        name: data.name,
        buy: Number(data.buy),
        sell: Number(data.sell),
        qty: Number(data.qty),
      });
    });
  }, [onAddProduct]);

  const inputs = [
    { id: "name", type: "text", placeholder: "نام محصول" },
    { id: "buy", type: "number", placeholder: "قیمت خرید" },
    { id: "sell", type: "number", placeholder: "قیمت فروش" },
    { id: "qty", type: "number", placeholder: "تعداد" },
  ];

  return (
    <>
      <button
        type="button"
        className="add-new-product-btn border-black"
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

      <Modal>
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
