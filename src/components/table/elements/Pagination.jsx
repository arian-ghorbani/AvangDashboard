function Pagination() {
  return (
    <div className="pagination-wrapper flex items-center justify-center gap-x-2 lg:gap-x-3">
      <button
        type="button"
        aria-label="دکمه قبلی"
        className="pagination-prev-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.97 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L13.44 12L9.97 8.53a.75.75 0 0 1 0-1.06"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        type="button"
        aria-label="دکمه انتخاب صفحه"
        className="pagination-btn active"
      >
        1
      </button>
      <button
        type="button"
        aria-label="دکمه انتخاب صفحه"
        className="pagination-btn"
      >
        2
      </button>
      <button
        type="button"
        aria-label="دکمه انتخاب صفحه"
        className="pagination-btn"
      >
        3
      </button>

      <button
        type="button"
        aria-label="دکمه بعدی"
        className="pagination-next-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M14.03 7.47a.75.75 0 0 1 0 1.06L10.56 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
