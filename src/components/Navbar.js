import { navbarLinks } from "../assests/NavbarData";
import { Link } from "react-scroll";
import logo from "../assests/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import {GrClose} from "react-icons/gr"
import { useState } from "react";

export default function Navbar() {

  // toggle hamburger menu

  const [hamburgerMenu, setHamburgerMenu] = useState(false)
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
          className="inline-flex justify-center items-center
        text-xl largerTablet:hidden bg-black rounded-full cursor-pointer"
        >
          <GiHamburgerMenu />
        </span>
      </div>
    </div>
  );
}
