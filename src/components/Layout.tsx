import { ChildrenType } from "../types/Layout";
import Navbar from "./Navbar";

const Layout = ({ children }: ChildrenType) => {
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
      <div id="lockable-content">{children}</div>
    </>
  );
};

export default Layout;
