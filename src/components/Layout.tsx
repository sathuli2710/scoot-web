import { navLinks } from "../constants/navLinks";
import { ChildrenType } from "../types/Layout";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: ChildrenType) => {
  return (
    <div className="max-w-screen overflow-hidden">
      <Navbar navLinks={navLinks} />
      <div id="lockable-content">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
