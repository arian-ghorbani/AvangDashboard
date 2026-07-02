import { useContext } from "react";
import { ModalContext } from "../../../context/ModalProvider";

function FooterModal({ confirmHandler }) {
  return (
    <div className="footer-modal">
      <button
        type="button"
        className="confirm-btn bg-primary text-white"
        onClick={confirmHandler}
      >
        تایید
      </button>
    </div>
  );
}

export default FooterModal;
