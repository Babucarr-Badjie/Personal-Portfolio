import { FaLinkedin, FaGithub } from "react-icons/fa";

import logo from "../../assests/images/logo.png";
export default function Footer() {
  return (
    <div className="w-full h-auto py-20 grid grid-col-2 gap-10 justify-center">
      <div className="w-full h-full ">
        <img className="w-14 h-auto" src={logo} alt="logo" />
        <div className="flex gap-10">
          <span className="text-2xl ">
            <a
              href="https://www.linkedin.com/in/babucarr-badjie-9702b6134/"
              target="_"
            >
              <FaLinkedin />
            </a>
          </span>
          <span className="text-2xl">
            <a href="https://github.com/Babucarr-Badjie" target="_">
              <FaGithub />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
