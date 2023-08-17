import ProjectCard from "./ProjectCard";
import projectOne from "../../assests/images/matching-game.PNG";
import projectTwo from "../../assests/images/event-tracking.PNG";
import projectThree from "../../assests/images/Budget.png";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Project() {
  return (
    <section
      id="projects"
      className=" w-full h-[100%] pt-10 pb-20 
       border-b-[1px] border-b-black"
    >
      <div className="flex justify-center mt-5">
        <h1 className="text-3xl font-extrabold ">MY PROJECTS</h1>
      </div>
      <div
        className="grid grid-cols-1 largerLaptop:grid-cols-3 
        largerTablet:grid-cols-2 gap-12 largerLaptop:gap-28 mt-10"
      >
        <ProjectCard
          projectTitle="Matching-images"
          projectDescription="The game is about flipping cards to match images. 
          The project was built using React.js with CSS3. This project ustilize 
          the use of React Hooks such as useState, useEffect and many more."
          src={projectOne}
          githubLink={
            <a
              href="https://github.com/Babucarr-Badjie/Matching-images-game"
              target="_"
            >
              <FaGithub />
            </a>
          }
          websiteLink={
            <a href="https://lively-medovik-4d7614.netlify.app/" target="_">
              <FaGlobe />
            </a>
          }
        />
        <ProjectCard
          projectTitle="Diary App"
          projectDescription="The app is used to list out all the upcoming 
          events where the individual can key in the event title, date and 
          the location. The main tools used in this project are React.js 
          and CSS3. "
          src={projectTwo}
          githubLink={
            <a href="https://github.com/Babucarr-Badjie/Events-App" target="_">
              <FaGithub />
            </a>
          }
          websiteLink={
            <a href="https://comfy-syrniki-260454.netlify.app/" target="_">
              <FaGlobe />
            </a>
          }
        />
        <ProjectCard
          projectTitle="Budget Tracker App"
          projectDescription="This Budget tracker App is a user-friendly
          web application developed using React.js and Tailwind CSS 
          that empowers users to effectively manage their finances 
          and track their expenses. This app aims to provide a 
          seamless and intuitive interface for users to create 
          accounts, record their income and expenses.
          This App also utilized the used of React Toastify to add 
          notifications."
          src={projectThree}
        />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
