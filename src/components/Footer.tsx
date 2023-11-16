import {
  appstore,
  facebookIcon,
  instagramIcon,
  playstore,
  twitterIcon,
} from "../assets";
import { navLinks } from "../data/navLinks";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-darknavy text-white flex lg:flex-row flex-col items-center gap-y-10 justify-around lg:py-24 py-12 mt-5">
        <h1 className="text-h2 lg:w-[415px] md:w-[50%] w-fit text-center lg:text-start">
          Sign up and Scoot off today
        </h1>
        <div className="flex gap-x-3 items-center gap-y-3 justify-center flex-wrap">
          <img src={appstore} alt="App Store Logo" />
          <img src={playstore} alt="Play Store Logo" />
        </div>
      </div>
      <div className="w-full lg:py-4 py-12 flex lg:flex-row flex-col gap-y-6 justify-between items-stretch px-24 bg-[#333A44]">
        <div className="flex lg:flex-row flex-col gap-x-[3.125rem] gap-y-5 items-center">
          <Logo fill="#FFFFFF" />
          <ul className="flex lg:flex-row flex-col gap-x-5 gap-y-5 h-full text-dimgrey">
            {navLinks.map((navLink) => {
              return (
                <li
                  key={Symbol(navLink.label).toString()}
                  className="w-full lg:text-body text-h4 hover:text-yellow selection:bg-transparent cursor-pointer grid place-items-center"
                  onClick={() =>
                    window.open(
                      navLink.path,
                      navLink.isNewTab ? "_blank" : "_self"
                    )
                  }
                >
                  {navLink.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-x-2 items-center justify-center">
          <img src={facebookIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={instagramIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
