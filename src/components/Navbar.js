import { navbarLinks } from "../assests/NavbarData";
import { Link } from "react-scroll";
import logo from "../assests/images/logo.png";

export default function Navbar() {
  return (
    <div
      className="w-full h-34 mx-auto flex justify-between items-center 
    font-titleFont border-b-[1px] border-b-gray-600 sticky top-0
     z-index-50 bg-bodyColor"
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
        <ul className="flex items-center gap-10">
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
      </div>
    </div>
  );
}
