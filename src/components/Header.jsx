import { useContext } from "react";
import Searchbox from "./Searchbox";
import { ThemeContext } from "../context/ThemeProvider";

const Header = ({ onClickHandler }) => {
  const { theme, setTheme, themeIcons } = useContext(ThemeContext);
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <header className="w-full">
      <nav className="w-full flex items-center justify-between">
        <section className="right-section">
          <button
            type="button"
            aria-label="منو"
            className="menu-btn grow-0 shrink-0"
            onClick={onClickHandler}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 5.033a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2z"
              />
            </svg>
          </button>

          <Searchbox style="w-80 h-10 inline-block" />
        </section>

        <section className="left-section">
          <button className="theme-btn" onClick={toggleTheme}>
            {themeIcons[theme]}
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
