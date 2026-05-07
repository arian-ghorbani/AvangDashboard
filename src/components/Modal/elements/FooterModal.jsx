import { useContext } from "react";
import { ModalContext } from "../../../context/ModalProvider";

function FooterModal({ cancelHandler }) {
  const { confirmModal } = useContext(ModalContext);

  return (
    <div className="footer-modal">
      <button
        type="button"
        className="cancel-btn bg-red-600/20 text-red-600 hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white"
        onClick={cancelHandler}
      >
        انصراف
      </button>

      <button
        type="button"
        className="confirm-btn bg-green-600/20 text-green-600 hover:bg-green-600 hover:text-white active:bg-green-600 active:text-white"
        onClick={confirmModal}
      >
        تایید
      </button>
    </div>
  );
}

export default FooterModal;
