import { useContext, useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import Input from "../../Input";
import { ModalContext } from "../../../context/ModalProvider";

function Edit({ item, fields, onUpdate, label = "محصول" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ ...item });
  const { setShowFooter } = useContext(ModalContext);

  useEffect(() => {
    if (isOpen) setShowFooter(true);
  }, [isOpen]);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const confirmHandler = () => {
    const firstField = fields[0]?.id;
    if (!formData[firstField]?.toString().trim()) return;

    const result = {};
    fields.forEach(({ id, type }) => {
      result[id] = type === "number" ? Number(formData[id]) : formData[id];
    });

    onUpdate(item.id, result);
    toggleModal();
  };

  return (
    <>
      <button type="button" className="edit-tool-btn" onClick={toggleModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m15.287 3.152l-.927.927l-8.521 8.52c-.577.578-.866.867-1.114 1.185a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.094 3.281l-.268.802a1.06 1.06 0 0 0 1.342 1.342l.802-.268l3.281-1.094c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114l8.521-8.521l.927-.927a3.932 3.932 0 0 0-5.561-5.561Z" />
            <path
              d="M14.36 4.078s.116 1.97 1.854 3.708s3.707 1.853 3.707 1.853M4.198 21.678l-1.876-1.876"
              opacity="0.5"
            />
          </g>
        </svg>
      </button>

      <Modal
        isOpen={isOpen}
        title={`ویرایش ${label}`}
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
            onChange={(e) => handleChange(field.id, e.target.value)}
          />
        ))}
      </Modal>
    </>
  );
}

export default Edit;
