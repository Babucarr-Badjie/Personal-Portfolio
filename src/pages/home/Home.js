import { useTypewriter } from "react-simple-typewriter";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import profile from "../../assests/images/profile-pic.png";
export default function Home() {
  // react typewriter hook
  const [textContent] = useTypewriter({
    words: [
      "Software Engineer 🖥️",
      "Frontend Developer 👨‍💻",
      "React Developer ⚛️",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  return (
    <section
      id="home"
      className=" flex flex-col largerTablet:flex-row w-full h-100% pt-10 pb-20 
       border-b-[1px] border-b-black"
    >
      <div
        className="w-full largerTablet:w-1/2 flex flex-col  gap-14 
        largerTablet:mt-10 "
      >
        <div className="flex flex-col gap-6 ">
          <h4 className="text-md font-normal largerTablet:text-xl  ">
            Hello there! Welcome to my World 😁.{" "}
          </h4>
          <h1 className="font-normal text:xl largerTablet:text-3xl leading-normal">
            I'm{" "}
            <span
              className="uppercase text-designColor 
              tracking-widest font-extrabold"
            >
              Babucarr
            </span>{" "}
          </h1>
          <h2 className="text-xl largerTablet:text-3xl font-extrabold ">
            a <span>{textContent}</span>
          </h2>
          <p className="leading-9 tracking-widest text-md largerTablet:text-xl ">
            Skilled in developing applications with a strong focus on front-end
            functionality and user experience..
          </p>
        </div>
        <div>
          <h1 className="tracking-widest">GET IN TOUCH</h1>
          <div className="flex gap-10 mt-5">
            <span className="profileIcon">
              <a
                href="https://www.linkedin.com/in/babucarr-badjie-9702b6134/"
                target="_"
              >
                <FaLinkedin title="LinkedIn" />
              </a>
            </span>
            <span className="profileIcon">
              <a
                href="https://www.facebook.com/babucarr.badjie.37"
                target="_
              "
              >
                <FaFacebook title="Facebook" />
              </a>
            </span>
            <span className="profileIcon">
              <a href="https://www.instagram.com/bax_bagie/" target="_">
                <FaInstagram title="Instagram" />
              </a>
            </span>
            <span className="profileIcon">
              <a href="https://github.com/Babucarr-Badjie" target="_">
                <FaGithub title="Github" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full largerTablet:w-1/2 flex justify-center items-start mt-10">
        <img
          className="w-[250px] h-[250px] z-index-10"
          src={profile}
          alt="profile"
        />
      </div>
    </section>
  );
}
