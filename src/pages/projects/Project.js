import ProjectCard from "./ProjectCard";
import projectOne from "../../assests/images/matching-game.PNG";
import projectTwo from "../../assests/images/event-tracking.PNG";
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
          projectDescription="The app is used to list out all my upcoming 
          events where the individual can key in the event title, date and 
          the location. The main tools used in this project is React.js 
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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
