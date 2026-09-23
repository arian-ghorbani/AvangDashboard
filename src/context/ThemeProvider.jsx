import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const themeIcons = {
    light: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="M21.88 15.147a10.23 10.23 0 0 1-19.63-5.64a10.28 10.28 0 0 1 6.63-7.37a1.77 1.77 0 0 1 1-.07a1.8 1.8 0 0 1 .89.45a1.81 1.81 0 0 1 .48 1.84a7 7 0 0 0-.08 4.21a6.27 6.27 0 0 0 4.3 4.31a6.9 6.9 0 0 0 4.2-.08a1.83 1.83 0 0 1 1 0a1.8 1.8 0 0 1 1.3 1.39a1.8 1.8 0 0 1-.09.96"
        />
      </svg>
    ),
    dark: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <g fill="none">
          <g fill="currentColor" clipPath="url(#SVGHcSWxdhd)">
            <path d="M12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-7.071-2.343a1 1 0 1 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414zm12.728 0a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m-9 5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm20 0a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM3.515 3.515a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3.515 4.929a1 1 0 0 1 0-1.414m15.556 0a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414zM12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1" />
          </g>
          <defs>
            <clipPath id="SVGHcSWxdhd">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
  };
  const htmlElem = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "light") {
      htmlElem.style.setProperty("--color-primary", "rgb(21, 93, 252)");
      htmlElem.style.setProperty("--color-secondary", "rgba(21, 93, 252, 0.3)");
      htmlElem.style.setProperty("--color-card", "#ffffff");
      htmlElem.style.setProperty("--color-basebackground", "#f7f8fa");
      htmlElem.style.setProperty("--color-primary-text", "#000000");
      htmlElem.style.setProperty("--color-secondary-text", "#6a7282");
    } else {
      htmlElem.style.setProperty("--color-primary", "rgb(152, 16, 250)");
      htmlElem.style.setProperty(
        "--color-secondary",
        "rgba(152, 16, 250, 0.3)",
      );
      htmlElem.style.setProperty("--color-card", "#27272a");
      htmlElem.style.setProperty("--color-basebackground", "#18181b");
      htmlElem.style.setProperty("--color-primary-text", "#ffffff");
      htmlElem.style.setProperty("--color-secondary-text", "#99a1af");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeIcons }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
