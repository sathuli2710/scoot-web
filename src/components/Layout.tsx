import { useEffect, useState } from "react";
import { navLinks } from "../data/navLinks";
import Footer from "./Footer";
import Navbar from "./Navbar";

export type DivChildrenType = {
  children?: JSX.Element | JSX.Element[] | string;
};

const Layout = ({ children }: DivChildrenType) => {
  const [isDark, setDark] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
        ? true
        : false
      : false
  );
  useEffect(() => {
    const htmlElement: HTMLElement | null = document.querySelector("html");
    if (isDark) {
      localStorage.setItem("theme", "dark");
      htmlElement?.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      htmlElement?.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <div className="max-w-screen overflow-hidden dark:bg-[#121212]">
      <Navbar navLinks={navLinks} setDark={setDark} isDark={isDark} />
      <div id="lockable-content" className="mt-[53px] md:mt-[77px]">
        {children}
        <Footer />
      </div>
      <div id="overlay-content"></div>
    </div>
  );
};

export default Layout;
