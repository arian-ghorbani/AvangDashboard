import { Activity, useEffect, useState } from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  const [pages, setPages] = useState([]);

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
    <aside id="sidebar" className="bg-card">
      <section className="top-section">
        <div className="logo-box">
          {/* <img src="" alt="لوگو فروشگاه" /> */}
        </div>
      </section>

      <section className="bottom-section">
        <Activity mode={pages.length ? "visible" : "hidden"}>
          {pages.map((page) => (
            <NavLink key={page} to="/" end>
              {page}
            </NavLink>
          ))}
        </Activity>
      </section>
    </aside>
  );
};

export default Sidebar;
