import { useEffect, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { useWindowSize } from "usehooks-ts";
import "../styles/Navbar.css";
import {
  HamburgerProps,
  NavLinksCompProps,
  NavbarLink,
  NavbarProps,
} from "../types/Navbar";
import { Dimension } from "../types/common";

const Hamburger = ({
  isOpen = false,
  setIsOpen = () => {},
}: HamburgerProps) => {
  return (
    <div
      className="relative w-[20px] h-4 cursor-pointer"
      onClick={() => setIsOpen((prevValue) => !prevValue)}
    >
      <div
        className={`absolute left-0 w-full h-1 rounded-md bg-yellow duration-150 ease-in-out ${
          isOpen ? "rotate-45 top-[2px]" : "top-0"
        }`}
      ></div>
      <div
        className={`absolute left-[50%] w-full h-1 rounded-md bg-yellow duration-150 ease-in-out ${
          isOpen ? "-rotate-45 top-[2px]" : "top-0"
        }`}
      ></div>
      <div
        className={`absolute top-[6px] w-full h-1 rounded-md bg-yellow duration-300 ease-in-out ${
          isOpen ? "-left-[50%] opacity-0" : "left-0"
        }`}
      ></div>
      <div
        className={`absolute top-[6px] w-full h-1 rounded-md bg-yellow duration-300 ease-in-out ${
          isOpen ? "left-[100%] opacity-0" : "left-[50%]"
        }`}
      ></div>
      <div
        className={`absolute top-[12px] left-0 w-full h-1 rounded-md bg-yellow duration-150 ease-in-out ${
          isOpen ? "-rotate-45" : ""
        }`}
      ></div>
      <div
        className={`absolute top-[12px] left-[50%] w-full h-1 rounded-md bg-yellow duration-150 ease-in-out ${
          isOpen ? "rotate-45" : ""
        }`}
      ></div>
    </div>
  );
};

const NavLinksComp = ({
  isSmallScreen = false,
  navLinks = [],
  setIsOpen = () => {},
}: NavLinksCompProps) => {
  const linkClickHandler = (path: string, isNewTab: boolean) => {
    setIsOpen(false);
    setTimeout(
      () => {
        window.open(path, isNewTab ? "_blank" : "_self");
      },
      isSmallScreen ? 500 : 0
    );
  };
  return (
    <ul
      className={`flex ${
        isSmallScreen
          ? "w-full flex flex-col items-center gap-y-5"
          : "gap-x-5 h-full"
      }`}
    >
      {navLinks.map((navLink: NavbarLink) => (
        <li
          key={Symbol(navLink.label).toString()}
          className={`w-full ${
            isSmallScreen ? "text-h4" : "text-body"
          } text-dimgrey hover:text-yellow selection:bg-transparent cursor-pointer grid place-items-center`}
          onClick={() => linkClickHandler(navLink.path, navLink.isNewTab)}
        >
          {navLink.label}
        </li>
      ))}
    </ul>
  );
};

const Navbar = ({ navLinks }: NavbarProps) => {
  const { width }: Dimension = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const isSmallScreen = width < 768;

  useEffect(() => {
    const lockTarget: HTMLDivElement =
      document.querySelector("#lockable-content")!;
    if (isSidebarOpen) {
      lockTarget?.classList.add("lock-screen-overlay");
    } else {
      lockTarget?.classList.remove("lock-screen-overlay");
    }
  }, [isSidebarOpen]);

  if (isSmallScreen) {
    return (
      <>
        <nav className="relative w-full py-3 flex justify-between items-center px-5">
          <Hamburger isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <div className="w-full grid place-items-center">
            <Logo fill="#495567" />
          </div>
        </nav>
        <div
          className={`z-999 absolute top-[53px] left-0 duration-700 ease-in-out bg-darknavy overflow-hidden ${
            isSidebarOpen ? "w-[60%]" : "w-0 left-[-50%]"
          } py-14 slider-height flex flex-col items-center justify-between`}
        >
          <NavLinksComp
            isSmallScreen={isSmallScreen}
            navLinks={navLinks}
            setIsOpen={setIsSidebarOpen}
          />
          <Button variant="filled" btnText="Get Scootin" />
        </div>
      </>
    );
  }
  return (
    <nav className="w-full py-3 flex justify-between items-stretch px-5">
      <div className="flex gap-x-[3.125rem] items-center">
        <Logo fill="#495567" />
        <NavLinksComp
          isSmallScreen={isSmallScreen}
          navLinks={navLinks}
          setIsOpen={setIsSidebarOpen}
        />
      </div>
      <Button variant="filled" btnText="Get Scootin" />
    </nav>
  );
};

export default Navbar;
