import { useState } from "react";
import Modal from "../../Modal/Modal";

function View({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        type="button"
        className="show-tool-btn hover:[&_path]:stroke-blue-600"
        onClick={toggleModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4s7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704Z"
              opacity="0.5"
            />
            <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
          </g>
        </svg>
      </button>

      <Modal isOpen={isOpen} title="مشاهده محصول" onClickHandler={setIsOpen}>
        <div className="view-product-details space-y-2">
          <div className="view-product-row">
            <span className="view-product-label">نام محصول</span>
            <span className="view-product-value">{product.name}</span>
          </div>
          <div className="view-product-row">
            <span className="view-product-label">قیمت خرید</span>
            <span className="view-product-value">
              {product.buy.toLocaleString()} تومان
            </span>
          </div>
          <div className="view-product-row">
            <span className="view-product-label">قیمت فروش</span>
            <span className="view-product-value">
              {product.sell.toLocaleString()} تومان
            </span>
          </div>
          <div className="view-product-row">
            <span className="view-product-label">موجودی</span>
            <span className="view-product-value">{product.qty} عدد</span>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default View;
