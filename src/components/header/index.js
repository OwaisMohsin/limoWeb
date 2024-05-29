import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/icons/profile.png";
import search from "../../assets/icons/search.png";
import shopping from "../../assets/icons/shopping.png";
import headerSetting from "../../assets/icons/headerSetting.png";
import headerLogo from "../../assets/images/logoGif2.gif";
import headerHeart from "../../assets/icons/headerHeart.png";
import useDeviceType from "../../hooks/useDeviceType";
import { CrossIcon, Layers, X } from "lucide-react";

const MainHeader = (props) => {
  const isMobile = useDeviceType();
  return (
    <div>
      {isMobile ? (
        <Navbar />
      ) : (
        <div className="mx-[2%]  flex justify-between items-center">
          <Link to="/">
            <img
              className="h-28 w-auto hidden md:block"
              src={headerLogo}
              alt="Logo"
            />
          </Link>
          <div className="relative w-2/5 mr-[16%] flex justify-between">
            <Link to="/">
              <p className="text-primary-gold text-lg mr-4">Home</p>
            </Link>
            <Link to="/contact">
              <p className="text-primary-gold  text-lg mr-4">Contact Us</p>
            </Link>
            <Link to="/fleet">
              <p className="text-primary-gold  text-lg mr-4">Fleet</p>
            </Link>
            <Link to="/services">
              <p className="text-primary-gold  text-lg mr-4">Our Services</p>
            </Link>
            <Link to="/about">
              <p className="text-primary-gold  text-lg">About</p>
            </Link>
          </div>
          <div className="flex">
            <Link to="/favorites">
              <img
                className="h-8 w-auto mr-4"
                src={headerHeart}
                alt="Favorites"
              />
            </Link>
            <img
              className="h-8 w-auto mr-4"
              src={headerSetting}
              alt="Settings"
            />
            <img className="h-8 w-auto" src={profile} alt="Profile" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainHeader;

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: "", text: "Contact", link: "/contact" },
    { icon: "", text: "Fleet", link: "/fleet" },
    { icon: "", text: "Services", link: "/services" },
    { icon: "", text: "About", link: "/about" },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
      <Layers
        onClick={() => setNav(!nav)}
        size={30}
        className="cursor-pointer text-primary-gold"
      />
      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-black z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-black z-10 duration-300"
        }
      >
        <X
          onClick={() => setNav(!nav)}
          size={30}
          color="white"
          className="absolute right-4 top-4 cursor-pointer"
        />
        <div className="p-4">
          <Link to="/">
            <img className="h-28 w-auto " src={headerLogo} alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {menuItems.map(({ icon, text, link }, index) => {
              return (
                <Link key={index} to={link}>
                  <div key={index} className=" py-4">
                    <li className="text-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 text-white hover:text-primary-gold">
                      {text}
                    </li>
                  </div>
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="flex mt-5 justify-center items-center">
          <Link to="/favorites">
            <img
              className="h-8 w-auto mr-4"
              src={headerHeart}
              alt="Favorites"
            />
          </Link>
          <img className="h-8 w-auto mr-4" src={headerSetting} alt="Settings" />
          <img className="h-8 w-auto" src={profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};
