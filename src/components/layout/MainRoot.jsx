import { Outlet } from "react-router";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useState } from "react";

const MainRoot = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handletToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container h-full p-4 flex items-start justify-start gap-x-4">
      {/* Liquid Glass SVG */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter
            id="liquid-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onClickHandler={handletToggleSidebar}
      />

      <section
        id="section-content"
        className="h-full flex flex-col gap-y-6 shrink grow"
      >
        <Header
          isSidebarOpen={isSidebarOpen}
          onClickHandler={handletToggleSidebar}
        />

        <main>
          <Outlet />
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default MainRoot;
