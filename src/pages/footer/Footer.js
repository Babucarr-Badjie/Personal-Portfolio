import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

import logo from "../../assests/images/logo.png";
export default function Footer() {
  return (
    <div>
      <div className="w-full flex flex-col largerLaptop:flex-row h-auto py-20 justify-between gap-10">
        <div className="w-full largerLaptop:w-[50%] h-full ">
          <img className="w-14 h-auto" src={logo} alt="logo" />
          <div className="flex gap-10">
            <span className="text-sm largerLaptop:text-md py-5 justify-evenly">
              <p>
                A Web Developer focused on the Frontend of the websites and Web
                Applications that leads to the success of the overall products.
              </p>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col largerLaptop:w-[50%] h-full  ">
          <h1
            className="flex justify-center tracking-widest text-md 
          largerLaptop:text-xl font-bold"
          >
            SOCIALS
          </h1>
          <div className="flex gap-5 py-10 justify-center">
            <span className="footerIcons">
              <a
                href="https://www.linkedin.com/in/babucarr-badjie-9702b6134/"
                target="_"
              >
                <FaLinkedin title="LinkedIn" />
              </a>
            </span>
            <span className="footerIcons">
              <a href="https://www.facebook.com/babucarr.badjie.37" target="_">
                <FaFacebook title="Facebook" />
              </a>
            </span>
            <span className="footerIcons">
              <a href="https://www.instagram.com/bax_bagie/" target="_">
                <FaInstagram title="Instagram" />
              </a>
            </span>
            <span className="footerIcons">
              <a href="https://github.com/Babucarr-Badjie" target="_">
                <FaGithub title="Github" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="  w-full h-auto border-t-[1px] border-t-black">
        <p className=" text-center py-5 text-sm">
          Copyright &copy; 2025. Design and written by <i>Babucarr Badjie</i>
        </p>
      </div>
    </div>
  );
}
