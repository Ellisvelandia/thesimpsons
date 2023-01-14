import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/bender.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="sticky top-0 w-full h-20 flex justify-between items-center px-4 py-4 shadow-md z-10">
      <div className="flex justify-end w-full 2xl:visible">
        <img
          src={logo}
          alt="app logo"
          className="w-[150px] h-28 p-4 invisible md:visible"
        />
      </div>
      <ul className="flex flex-1 items-center w-full justify-end font-black text-white capitalize text-xl invisible md:visible drop-shadow-lg shadow-black">
        <li className="mx-2">
          <Link to="/" className="hover:text-[#459ED3]">
            Home
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/info" className="hover:text-[#459ED3]">
          synopsis
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/list" className="hover:text-[#459ED3]">
            Characters
          </Link>
        </li>
      </ul>
      <div className="md:hidden">
        <img src={logo} alt="" className="absolute left-0 top-0 w-24 h-20"/>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        {toggleMenu && (
          <div className="menu w-full h-screen" style={{  background: "rgba(0,0,0,0.80)"}} onClick={() => setToggleMenu(false)}>
            <ul className="font-black text-white capitalize text-2xl menu py-4">
              <img src="http://theinfosphere.org/images/4/40/Planet_Express_Logo.png" alt="logoexpress" className="h-28"/>
              <li className="mx-2">
                <Link to="/" className="hover:text-[#459ED3] cursor-pointer">
                  Home
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/info" className="hover:text-[#459ED3] cursor-pointer">
                  synopsis
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/list" className="hover:text-[#459ED3] cursor-pointer">
                  Characters
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
