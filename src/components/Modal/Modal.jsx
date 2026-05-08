import { useContext } from "react";
import FooterModal from "./elements/FooterModal";
import HeaderModal from "./elements/HeaderModal";
import clsx from "clsx";
import { ModalContext } from "../../context/ModalProvider";

function Modal({ children }) {
  const { isOpen, toggleModal } = useContext(ModalContext);

  return (
    <div
      className={clsx(
        "modal size-full fixed top-0 left-0 flex items-center justify-center bg-black/30 z-50 invisible opacity-0 transition-opacity duration-300",
        isOpen && "visible opacity-100",
      )}
    >
      <div className="wrapper w-4/5 p-2.5 space-y-4 bg-card rounded-3xl md:w-90 md:p-4">
        <HeaderModal title="ایجاد محصول جدید" closeModalHandler={toggleModal} />

        <div className="content space-y-2">{children}</div>

        <FooterModal cancelHandler={toggleModal} />
      </div>
    </div>
  );
}

export default Modal;
