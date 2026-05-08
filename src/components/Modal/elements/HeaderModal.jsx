function HeaderModal({ title, closeModalHandler }) {
  return (
    <div className="header-modal">
      <button
        type="button"
        className="close-modal-btn p-1.5 bg-red-600/20 text-red-600 rounded-full transition-colors duration-300 cursor-pointer [&_svg]:size-5 hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white md:p-2"
        onClick={closeModalHandler}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
          />
        </svg>
      </button>

      <h3 className="title-modal font-kalameh-bold text-size-title">{title}</h3>
    </div>
  );
}

export default HeaderModal;
