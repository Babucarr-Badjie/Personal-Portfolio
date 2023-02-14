import logo from "../assests/images/logo.png";
import { navbarLinks } from "../assests/NavbarData";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div
      className="w-full h-34 mx-auto flex justify-between items-center 
    font-titleFont border-b-[1px] border-b-gray-600  "
    >
      <div>
        <img
          src={logo}
          alt="logo"
          className="object-scale-down h-18 w-20 rounded-full "
        />
        <span className="tracking-widest">Babucarr</span>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navbarLinks.map((navbarLink) => (
            <li
              className="text-xl font-normal text-gray-200 tracking-wide 
              cursor-pointer hover:text-designColor duration-200  "
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
