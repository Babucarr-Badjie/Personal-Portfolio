import contactImage from "../../assests/contact.svg";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" w-full h-[100%] pt-10 pb-20 
       border-b-[1px] border-b-black"
    >
      <div className="flex justify-center mt-5">
        <h1 className="text-3xl font-extrabold">CONTACT ME</h1>
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex justify-between mt-10">
          <div
            className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] 
          to-[#23272b] p-8 rounded-lg shadow-shadowOne"
          >
            <img
              className="w-full h-64 object-fill rounded-lg mb-3"
              src={contactImage}
              alt="contact"
            />
            <div className="flex flex-col gap-4">
              <h3 className="uppercase text-2xl font-bold">Babucarr Badjie</h3>
              <p className="tracking-widest ">Software Developer</p>
              <p className="tracking-widest uppercase font-bold">
                Let's get in touch
              </p>
              <ul className="flex flex-col gap-5">
                <li>
                  <FaPhone className="text-xl" />
                  <p className="text-l font-bold tracking-widest">
                    +886 0978141935
                  </p>
                </li>
                <li>
                  <AiOutlineMail className="text-2xl" />
                  <p className="">babucarr.badjie12@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="tracking-widest uppercase font-bold py-5 italic ">
                Find me on
              </h1>
              <div className="flex gap-10 mt-2">
                <span className="contactIcon">
                  <a
                    href="https://www.linkedin.com/in/babucarr-badjie-9702b6134/"
                    target="_"
                  >
                    <FaLinkedin />
                  </a>
                </span>
                <span className="contactIcon">
                  <a
                    href="https://www.facebook.com/babucarr.badjie.37"
                    target="_
      "
                  >
                    <FaFacebook />
                  </a>
                </span>
                <span className="contactIcon">
                  <a href="https://www.instagram.com/bax_bagie/" target="_">
                    <FaInstagram />
                  </a>
                </span>
                <span className="contactIcon">
                  <a href="https://github.com/Babucarr-Badjie" target="_">
                    <FaGithub />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-full flxe flex-col justify-between"></div>
        </div>
      </div>
    </section>
  );
}
