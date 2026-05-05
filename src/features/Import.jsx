function Import() {
  return (
    <button className="import-btn bg-blue-600/30 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white">
      <span className="item-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
          >
            <path d="M4 12a8 8 0 1 0 16 0" opacity="0.5" />
            <path stroke-linejoin="round" d="M12 4v10m0 0l3-3m-3 3l-3-3" />
          </g>
        </svg>
      </span>

      <span className="item-text">بارگذاری پشتیبان</span>
    </button>
  );
}

export default Import;
