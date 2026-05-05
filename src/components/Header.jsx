import Searchbox from "./Searchbox";

const Header = ({ onClickHandler }) => {
  return (
    <header className="w-full h-12 px-1.5 flex items-center bg-card shadow-sm rounded-full md:h-13 md:px-2 lg:h-14 lg:px-2.5">
      <nav className="w-full">
        <section className="right-section flex items-center justify-start gap-x-1.5 md:gap-x-2 lg:gap-x-2.5">
          <button
            type="button"
            aria-label="منو"
            className="size-8.5 p-1.5 grow-0 shrink-0 flex items-center justify-center bg-basebackground rounded-full transition-colors duration-300 cursor-pointer hover:bg-black hover:text-white active:bg-black active:text-white [&_svg]:size-5.5 lg:size-10"
            onClick={onClickHandler}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 5.033a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2z"
              />
            </svg>
          </button>

          <Searchbox style="w-75 h-9 inline-block lg:w-85 lg:h-10" />
        </section>

        <section className="left-section"></section>
      </nav>
    </header>
  );
};

export default Header;
