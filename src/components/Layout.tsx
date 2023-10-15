import { LayoutProps } from "../types/Layout";
import Navbar from "./Navbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar
        navLinks={[
          {
            label: "Home",
            path: "/",
            isNewTab: false,
          },
          {
            label: "About",
            path: "/about",
            isNewTab: false,
          },
          {
            label: "Locations",
            path: "/locations",
            isNewTab: false,
          },
          {
            label: "Careers",
            path: "/careers",
            isNewTab: false,
          },
        ]}
      />
      {children}
    </>
  );
};

export default Layout;
