import Searchbox from "./Searchbox";

const Header = ({ onClickHandler }) => {
  return (
    <header className="w-full">
      <nav className="w-full flex items-center justify-between">
        <section className="right-section h-13 px-1.5 flex items-center justify-start gap-x-2.5 bg-glass backdrop-filter-[url('#liquid-filter')blur(1px)] inset-shadow-sm rounded-full">
          <button
            type="button"
            aria-label="منو"
            className="size-10 p-1.5 grow-0 shrink-0 flex items-center justify-center bg-card/80 rounded-full transition-colors duration-300 cursor-pointer hover:bg-secondary hover:text-primary [&_svg]:size-5.5"
            onClick={onClickHandler}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 5.033a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2z"
              />
            </svg>
          </button>

          <Searchbox style="w-75 h-10 inline-block" />
        </section>
      </nav>
    </header>
  );
};

export default Header;
