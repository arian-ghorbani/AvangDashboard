import clsx from "clsx";
import { Activity, useEffect, useState } from "react";
import { NavLink } from "react-router";
import Import from "../features/Import";
import Export from "../features/Export";

const Sidebar = ({ isSidebarOpen, onClickHandler }) => {
  const [pages, setPages] = useState([]);

  const pagesIcons = {
    داشبورد: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M11 4.68v3.88a2.45 2.45 0 0 1-1.509 2.258A2.4 2.4 0 0 1 8.56 11H4.68a2.44 2.44 0 0 1-2.43-2.44V4.69a2.44 2.44 0 0 1 2.43-2.44h3.88A2.44 2.44 0 0 1 11 4.68m10.75.01v3.87a2.4 2.4 0 0 1-.71 1.72a2.38 2.38 0 0 1-1.72.72h-3.88a2.45 2.45 0 0 1-2.256-1.502A2.4 2.4 0 0 1 13 8.56V4.69a2.4 2.4 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.88a2.44 2.44 0 0 1 2.43 2.44M11 15.45v3.87a2.44 2.44 0 0 1-2.44 2.43H4.68a2.45 2.45 0 0 1-1.72-.71a2.4 2.4 0 0 1-.71-1.72v-3.87a2.4 2.4 0 0 1 .71-1.72A2.47 2.47 0 0 1 4.68 13h3.88A2.46 2.46 0 0 1 11 15.45m10.75 1.93A4.37 4.37 0 1 1 17.37 13a4.4 4.4 0 0 1 4.049 2.707c.22.53.332 1.099.331 1.673"
        />
      </svg>
    ),
  };

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const res = await fetch("/src/data/pages.json");
        const data = await res.json();

        setPages([...data.pages]);
      } catch (error) {
        console.log("Fetching pages has error: ", error);
      }
    };

    fetchPages();
  }, []);

  return (
    <>
      {/* Sidebar */}
      <aside id="sidebar" className={clsx(isSidebarOpen && "open")}>
        {/* Pages links */}
        <section className="sidebar-top-section w-full">
          <div className="mb-3 md:hidden">
            <button
              type="button"
              aria-label="دکمه بستن سایدبار"
              className="size-9 flex items-center justify-center bg-red-600/20 text-red-600 rounded-full [&_svg]:size-4.5"
              onClick={onClickHandler}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                  />
                </g>
              </svg>
            </button>
          </div>

          <Activity mode={pages.length ? "visible" : "hidden"}>
            {pages.map((page) => (
              <NavLink
                key={page}
                to="/"
                className="menu-item bg-basebackground text-primary-text hover:bg-primary overflow-hidden hover:text-white active:bg-primary active:text-white"
                end
              >
                <span className="item-icon shrink-0 grow-0">
                  {pagesIcons[page] ?? pagesIcons[0]}
                </span>

                <span className="item-text">{page}</span>
              </NavLink>
            ))}
          </Activity>
        </section>

        {/* Import and Export */}
        <section className="sidebar-bottom-section w-full space-y-3">
          <Import />
          <Export />
        </section>
      </aside>

      {/* OverLay */}
      <div
        className={clsx(
          "overlay size-full top-0 right-0 fixed bg-black/30 invisible opacity-0 z-39 transition duration-350 md:hidden",
          isSidebarOpen && "visible opacity-100",
        )}
      ></div>
    </>
  );
};

export default Sidebar;
