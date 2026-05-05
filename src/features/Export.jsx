function Export() {
  return (
    <button className="export-btn bg-purple-600/30 text-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 active:text-white">
      <span className="item-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
          >
            <path d="M4 12a8 8 0 1 0 16 0" opacity="0.5" />
            <path stroke-linejoin="round" d="M12 14V4m0 0l3 3m-3-3L9 7" />
          </g>
        </svg>
      </span>

      <span className="item-text">پشتیبان گیری</span>
    </button>
  );
}

export default Export;
