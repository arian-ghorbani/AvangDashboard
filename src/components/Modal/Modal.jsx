import { useContext } from "react";
import { createPortal } from "react-dom";
import FooterModal from "./elements/FooterModal";
import HeaderModal from "./elements/HeaderModal";
import clsx from "clsx";
import { ModalContext } from "../../context/ModalProvider";

function Modal({ isOpen, title, onClickHandler, confirmHandler, children }) {
  const toggleModal = () => {
    onClickHandler((prev) => !prev);
  };

  return createPortal(
    <div
      className={clsx(
        "modal size-full fixed top-0 left-0 flex items-center justify-center bg-black/30 z-50 invisible opacity-0 transition-opacity duration-300",
        isOpen && "visible opacity-100",
      )}
    >
      <div className="wrapper w-90 p-4 space-y-4 bg-card rounded-3xl">
        <HeaderModal title={title} closeModalHandler={toggleModal} />

        <div className="content space-y-2">{children}</div>

        {title !== "مشاهده محصول" && (
          <FooterModal
            cancelHandler={toggleModal}
            confirmHandler={confirmHandler}
          />
        )}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
