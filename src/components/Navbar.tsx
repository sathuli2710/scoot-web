import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { useOnClickOutside, useWindowSize } from "usehooks-ts";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import { useLocation } from "react-router";

export type Dimension = {
  width: number;
  height: number;
};
export type NavbarLink = {
  label: string;
  path: string;
  isNewTab: boolean;
};

export type NavbarProps = {
  navLinks: NavbarLink[];
  setDark?: React.Dispatch<React.SetStateAction<boolean>>;
  isDark?: boolean;
};

export type NavLinksCompProps = {
  isSmallScreen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: NavbarLink[];
} & React.ComponentPropsWithRef<"ul">;

export type HamburgerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({
  isOpen = false,
  setIsOpen = () => {},
}: HamburgerProps) => {
  return (
    <div
      className="relative w-[20px] h-4 cursor-pointer"
      onClick={() => setIsOpen((prevValue) => !prevValue)}
      id="hamburger"
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

export const NavLinksComp = ({
  isSmallScreen = false,
  navLinks = [],
  setIsOpen = () => {},
  className = "",
}: NavLinksCompProps) => {
  const location = useLocation();
  const linkClickHandler = (path: string, isNewTab: boolean) => {
    if (path !== location?.pathname) {
      setIsOpen(false);
      setTimeout(
        () => {
          window.open(path, isNewTab ? "_blank" : "_self");
        },
        isSmallScreen ? 500 : 0
      );
    }
  };
  return (
    <ul
      className={`flex ${
        isSmallScreen
          ? "w-full flex flex-col items-center gap-y-5"
          : "gap-x-5 h-full"
      } ${className}`}
    >
      {navLinks.map((navLink: NavbarLink) => (
        <li
          key={navLink?.path}
          className={`w-full ${
            location?.pathname === navLink?.path ? "text-yellow" : ""
          } ${
            isSmallScreen ? "text-h4" : "text-body"
          } hover:text-yellow selection:bg-transparent cursor-pointer grid place-items-center`}
          onClick={() => linkClickHandler(navLink?.path, navLink?.isNewTab)}
        >
          {navLink?.label}
        </li>
      ))}
    </ul>
  );
};

const Navbar = ({ navLinks, setDark = () => {}, isDark }: NavbarProps) => {
  const sidebarRef = useRef(null);
  const { width }: Dimension = useWindowSize();
  const closeHandler = (e: any) => {
    if (e.target.parentNode.id !== "hamburger" && e.target.id !== "hamburger")
      setIsSidebarOpen(false);
  };
  useOnClickOutside(sidebarRef, closeHandler);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const isSmallScreen: boolean = width < 768;

  useEffect(() => {
    const overlayTarget: HTMLDivElement =
      document.querySelector("#overlay-content")!;
    if (isSidebarOpen) {
      overlayTarget.classList.add("lock-screen-overlay");
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("h-screen");
    } else {
      overlayTarget.classList.remove("lock-screen-overlay");
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("h-screen");
    }
  }, [isSidebarOpen]);

  if (isSmallScreen) {
    return (
      <>
        <nav className="fixed top-0 w-full py-3 flex justify-between items-center px-5 text-dimgrey z-999 bg-white dark:bg-black drop-shadow-2xl">
          <Hamburger isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <div className="w-full grid place-items-center">
            <Logo fill="#495567" />
          </div>
        </nav>
        <div
          className={`z-999 fixed top-[53px] left-0 duration-700 ease-in-out bg-darknavy overflow-hidden ${
            isSidebarOpen ? "w-[70%]" : "w-0 left-[-50%]"
          } py-14 slider-height flex flex-col items-center justify-between `}
          ref={sidebarRef}
        >
          <NavLinksComp
            isSmallScreen={isSmallScreen}
            navLinks={navLinks}
            setIsOpen={setIsSidebarOpen}
            className="text-dimgrey"
          />
          <div className="flex flex-col items-center gap-y-3">
            <div
              className="bg-dimgrey dark:bg-lightgrey text-white dark:text-black grid place-items-center rounded-full w-[40px] h-[40px] cursor-pointer"
              onClick={() => setDark((prevValue) => !prevValue)}
            >
              {!isDark && <SunIcon />}
              {isDark && <MoonIcon />}
            </div>
            <Button variant="filled" btnText="Get Scootin" />
          </div>
        </div>
      </>
    );
  }
  return (
    <nav className="fixed top-0 w-full py-3 flex justify-between items-stretch px-5 z-999 bg-white dark:bg-black drop-shadow-2xl">
      <div className="flex gap-x-[3.125rem] items-center">
        <Logo fill="#495567" className="dark:hidden" />
        <Logo fill="#FFFFFF" className="dark:block hidden" />
        <NavLinksComp
          isSmallScreen={isSmallScreen}
          navLinks={navLinks}
          setIsOpen={setIsSidebarOpen}
          className="text-dimgrey"
        />
      </div>
      <div className="flex items-center gap-x-3">
        <div
          className="bg-darknavy dark:bg-lightgrey text-white dark:text-black grid place-items-center rounded-full w-[40px] h-[40px] cursor-pointer"
          onClick={() => setDark((prevValue) => !prevValue)}
        >
          {!isDark && <SunIcon />}
          {isDark && <MoonIcon />}
        </div>
        <Button variant="filled" btnText="Get Scootin" />
      </div>
    </nav>
  );
};

export default Navbar;
