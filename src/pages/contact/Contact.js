import contactImage from "../../assests/contact.svg";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  // declaring states
  const [userName, setUserName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [comapanyName, setCompanyName] = useState("");
  const [userPosition, setUserPostion] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // ========== Email Validation ==============
  const emailValidation = () => {
    return String(userEmail)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // handle button click function
  const handleClick = (e) => {
    e.preventDefault();
    if (userName === "") {
      setErrorMessage("Name is required!");
    } else if (contactNumber === "") {
      setErrorMessage("Contact number is required!");
    } else if (comapanyName === "") {
      setErrorMessage("Company name is required!");
    } else if (userPosition === "") {
      setErrorMessage("Position description is required!");
    } else if (userEmail === "") {
      setErrorMessage("Email address is required!");
    } else if (!emailValidation(userEmail)) {
      setErrorMessage("That email address is not valid!");
    } else if (message === "") {
      setErrorMessage("Please provide your message!");
    } else {
      setSuccessMessage(
        `Thank you ${userName}, your message is sent successfully!`
      );
      setErrorMessage("");
      setUserName("");
      setContactNumber("");
      setCompanyName("");
      setUserPostion("");
      setUserEmail("");
      setMessage("");
    }
  };
  return (
    <section
      id="contact"
      className=" w-full h-[100%] pt-10 pb-20 
       border-b-[1px] border-b-black"
    >
      <div className="flex justify-center mt-5">
        <h1 className="text-3xl font-extrabold">CONTACT ME</h1>
      </div>
      <div className="w-full ">
        <div
          className="w-full h-auto flex flex-col smallerLaptop:flex-row 
        justify-between mt-10"
        >
          {/* contact left side */}
          <div
            className="w-full smallerLaptop:w-[35%] h-full bg-gradient-to-r from-[#1e2024] 
          to-[#23272b] p-4 smallerLaptop:p-8 rounded-lg shadow-shadowOne"
          >
            <img
              className="w-full h-64 object-fill rounded-lg mb-3"
              src={contactImage}
              alt="contact"
            />
            <div className="flex flex-col gap-4 justify-between items-center">
              <h3 className="uppercase text-xl smallerLaptop:text-2xl font-bold">
                Babucarr Badjie
              </h3>
              <p className="tracking-widest ">Software Developer</p>
              <p className="tracking-widest uppercase font-bold">
                Let's get in touch
              </p>
              <ul className="flex flex-col gap-5">
                <li>
                  <FaPhone className="text-md largerTablet:text-xl" />
                  <p className="text-md smallerLaptop:text-l font-bold tracking-widest">
                    +886 0978141935
                  </p>
                </li>
                <li>
                  <AiOutlineMail className="text-md smallerLaptop:text-xl" />
                  <p>babucarr.badjie12@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col gap-4 justify-between items-center">
                <h1 className="tracking-widest uppercase font-bold py-5 italic  ">
                  Find me on
                </h1>
              </div>

              <div className="flex gap-5 smallerLaptop:gap-10 mt-2">
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
                    target="_"
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
          {/* ================end of contact left side================== */}

          {/* ================contact right side ======================= */}
          <div
            className="w-full flex flex-col smallerLaptop:w-[60%] h-full  p-4 smallerLaptop:8
             bg-gradient-to-r from-[#1e2024] to-[#23272b] gap-8 
             rounded-lg shadow-shadowOne
          "
          >
            <form className="w-full flex flex-col ">
              {/* =====display error meesage when fiels not filled  */}
              {errorMessage && <p className="fail">{errorMessage}</p>}

              <div className="w-full flex gap-5">
                <div className="w-full smallerLaptop:w-[50%] flex flex-col gap-3">
                  <p className="text-sm smallerLaptop:text-md tracking-wider ">
                    Your Name:
                  </p>
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    className={`${
                      errorMessage === "Name is required!" &&
                      "outline-designColor"
                    } contactFieldInputs`}
                    type="text"
                    name="name"
                  />
                </div>
                <div className="w-full smallerLaptop:w-[50%] flex flex-col gap-3">
                  <p className="text-sm smallerLaptop:text-md tracking-wider ">
                    Contact Number:
                  </p>
                  <input
                    onChange={(e) => setContactNumber(e.target.value)}
                    value={contactNumber}
                    className={`${
                      errorMessage === "Contact number is required!" &&
                      "outline-designColor"
                    } contactFieldInputs`}
                    type="text"
                    name="phone number"
                  />
                </div>
              </div>
              <div className="w-full flex gap-5 py-8">
                <div className="w-full smallerLaptop:w-[50%] flex flex-col gap-3">
                  <p className="text-sm smallerLaptop:text-md tracking-wider ">
                    Company Name:
                  </p>
                  <input
                    onChange={(e) => setCompanyName(e.target.value)}
                    value={comapanyName}
                    className={`${
                      errorMessage === "Company name is required!" &&
                      "outline-designColor"
                    } contactFieldInputs`}
                    type="text"
                    name="company name"
                  />
                </div>
                <div className="w-full smallerLaptop:w-[50%] flex flex-col gap-3">
                  <p className="text-sm smallerLaptop:text-md tracking-wider">
                    Position:
                  </p>
                  <input
                    onChange={(e) => setUserPostion(e.target.value)}
                    value={userPosition}
                    className={`${
                      errorMessage === "Position description is required!" &&
                      "outline-designColor"
                    } contactFieldInputs`}
                    type="text"
                    name="position"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-3 ">
                <p className="text-sm smallerLaptop:text-md tracking-wider">
                  Email Address:
                </p>
                <input
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                  className={`${
                    errorMessage === "Email address is required!" &&
                    "outline-designColor"
                  } contactFieldInputs`}
                  type="text"
                  name="email"
                />
              </div>
              <div className="w-full flex flex-col gap-3 py-10">
                <p className="text-sm smallerLaptop:text-md tracking-wider ">
                  Write message:
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errorMessage === "Please provide your message!" &&
                    "outline-designColor"
                  } contactTextArea`}
                  name="Message"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button
                  onClick={handleClick}
                  className="w-full h-12 rounded-lg bg-orange-200
                hover:border-[2px]  font-bold 
                hover:bg-white text-black transition-all duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>

              {/* ========Display successful message when the message is sent sucessfully== */}
              <div className="mt-4">
                {successMessage && <p className="success">{successMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
