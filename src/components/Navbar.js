import { navbarLinks } from "../assests/NavbarData";
import { Link } from "react-scroll";
import logo from "../assests/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
  // toggle hamburger menu

  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  console.log(hamburgerMenu);
  return (
    <div
      className="w-full h-34 mx-auto flex justify-between items-center 
    font-titleFont border-b-[1px] border-b-gray-600 sticky top-0
     z-50 bg-bodyColor"
    >
      <div className="mt-3">
        <img
          src={logo}
          alt="logo"
          className="object-scale-down h-18 w-20 rounded-full cursor-pointer "
        />
        <span className="tracking-widest cursor-pointer">Babucarr</span>
      </div>
      <div>
        <ul
          className="hidden largerTablet:inline-flex items-center gap-5
         largerLaptop:gap-10"
        >
          {navbarLinks.map((navbarLink) => (
            <li
              className="text-xl font-normal text-gray-200 tracking-wide 
              cursor-pointer hover:text-textColor duration-200  "
              key={navbarLink.id}
            >
              <Link
                activeClass="active"
                to={navbarLink.link}
                spy={true}
                offset={-70}
                duration={500}
              >
                {navbarLink.title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setHamburgerMenu(!hamburgerMenu)}
          className="inline-flex justify-center items-center
        text-2xl largerTablet:hidden bg-black rounded-full p-2  
        cursor-pointer"
        >
          <GiHamburgerMenu />
        </span>
        {hamburgerMenu && (
          <div
            className="w-[100%] h-screen overflow-scroll
            absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide"
          >
            <div>
              <ul
                className="w-full h-full flex flex-col mt-20 justify-center
               items-center gap-20"
              >
                {navbarLinks.map((navbarLink) => (
                  <li
                    className="text-xl font-normal text-gray-200 
                    tracking-wide cursor-pointer hover:text-textColor
                     duration-200  "
                    key={navbarLink.id}
                  >
                    <Link
                      onClick={() => setHamburgerMenu(false)}
                      activeClass="active"
                      to={navbarLink.link}
                      spy={true}
                      offset={-70}
                      duration={500}
                    >
                      {navbarLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <span
              onClick={() => setHamburgerMenu(false)}
              className="absolute top-11 right-4 text-3xl cursor-pointer text-white 
            "
            >
              <RiCloseLine />
            </span>
          </div>
        )}
      </div>
      <div>Hi there</div>
    </div>
  );
}
