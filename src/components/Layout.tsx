import { useEffect, useState } from "react";
import { navLinks } from "../constants/navLinks";
import { ChildrenType } from "../types/Layout";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: ChildrenType) => {
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    const htmlElement: HTMLElement | null = document.querySelector("html");
    if (isDark) {
      htmlElement?.classList.add("dark");
    } else {
      htmlElement?.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <div className="max-w-screen overflow-hidden dark:bg-[#121212] ">
      <Navbar navLinks={navLinks} setDark={setDark} isDark={isDark} />
      <div id="lockable-content">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
