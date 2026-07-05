import { useState } from "react";
import Modal from "../components/Modal/Modal";

function Coffee() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="coffee-btn size-9 px-1 flex items-center justify-start gap-2 bg-[rgba(111,78,55,0.2)] rounded-full overflow-hidden transition-[width,padding] cursor-pointer duration-300 hover:w-118.5 hover:px-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src="/public/images/coffee.png"
          alt="تصویر کافی"
          className="size-6.5 grow-0 shrink-0"
        />

        <p className="text-nowrap grow shrink ">
          هر کار قشنگی، به حمایت قشنگ نیاز داره. منو یه کافی مهمون کن :)
        </p>
      </button>

      <Modal
        title="بهم انرژی بده :)"
        isOpen={isOpen}
        onClickHandler={setIsOpen}
      >
        <p className="p-4">
          <span className="font-kalameh-medium">6037991799465236</span> | آرین
          قربانی
        </p>
      </Modal>
    </>
  );
}

export default Coffee;
