import ProjectCard from "./ProjectCard";
import projectOne from "../../assests/images/matching-game.PNG";
import projectTwo from "../../assests/images/event-tracking.PNG";
import projectThree from "../../assests/images/weatherApp.png";
import projectFour from "../../assests/images/rock-paper-siccors.png";
import projectFive from "../../assests/images/to-do-app-image.png";
import projectSix from "../../assests/images/workout-image.png";
import projectSeven from "../../assests/images/movie-banner.jpg";
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
        largerTablet:grid-cols-2 gap-8 largerLaptop:gap-14 mt-10"
      >
        {/* Project 1 */}
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
              <FaGithub title="github" />
            </a>
          }
          websiteLink={
            <a href="https://lively-medovik-4d7614.netlify.app/" target="_">
              <FaGlobe title="website" />
            </a>
          }
        />

        {/* Project 2 */}
        <ProjectCard
          projectTitle="Diary App"
          projectDescription="The app is used to list out all the upcoming 
          events where the individual can key in the event title, date and 
          the location. The main tools used in this project are React.js 
          and CSS3. "
          src={projectTwo}
          githubLink={
            <a href="https://github.com/Babucarr-Badjie/Events-App" target="_">
              <FaGithub title="github" />
            </a>
          }
          websiteLink={
            <a href="https://comfy-syrniki-260454.netlify.app/" target="_">
              <FaGlobe title="website" />
            </a>
          }
        />

        {/* Project 3 */}
        <ProjectCard
          projectTitle="Weather App"
          projectDescription="The weather app is a simple app that provides 
        weather information for various locations. It utilizes the AccuWeather API
        to fetch and display weather data. It is designed using vanila 
        JavaScript and Bootstrap for styling."
          src={projectThree}
          githubLink={
            <a href="https://github.com/Babucarr-Badjie/Weather-App" target="_">
              <FaGithub title="github" />
            </a>
          }
          websiteLink={
            <a href="https://delightful-youtiao-5d3c07.netlify.app" target="_">
              <FaGlobe title="website" />
            </a>
          }
        />

        {/* Project 4 */}
        <ProjectCard
          projectTitle="Rock Paper Scissors App"
          projectDescription="This application was developed using React, leveraging the useState hook 
          to manage component states efficiently. The core functionality allows users to engage in a
            classic game of Rock-Paper-Scissors against the computer."
          src={projectFour}
          githubLink={
            <a
              href="https://github.com/Babucarr-Badjie/rock-paper-scissors-game-app"
              target="_"
            >
              <FaGithub title="github" />
            </a>
          }
          websiteLink={
            <a href="https://resonant-alpaca-0bf24b.netlify.app" target="_">
              <FaGlobe title="website" />
            </a>
          }
        />

        {/* Project 5 */}
        <ProjectCard
          projectTitle="To-Do Task Application"
          projectDescription="To-Do Task application was built using React. The app allows users to add,
           view, and manage tasks efficiently. The application utilizes React's useState hook to handle state management 
           and props to pass data between components."
          src={projectFive}
          githubLink={
            <a
              href="https://github.com/Babucarr-Badjie/task-todo-app"
              target="_"
            >
              <FaGithub title="github" />
            </a>
          }
          websiteLink={
            <a href="https://moonlit-narwhal-090d91.netlify.app" target="_">
              <FaGlobe title="website" />
            </a>
          }
        />

        {/* Project 6 */}
        <ProjectCard
          projectTitle="Workout Plan App"
          projectDescription="FitJourney is a 30-day workout tracker app. Users sign up, log in, and follow a structured plan, 
          marking each day complete. Progress is saved per user, so you can return anytime, stay motivated, 
          and continue your fitness journey."
          src={projectSix}
          githubLink={
            <a
              href="https://github.com/Babucarr-Badjie/workout-planner"
              target="_"
            >
              <FaGithub title="github" />
            </a>
          }
          websiteLink={
            <a href="https://babucarr-fitjourney-app.netlify.app/" target="_">
              <FaGlobe title="website" />
            </a>
          }
        />

        {/* Project 7 */}
        <ProjectCard
          projectTitle="Workout Plan App"
          projectDescription="A modern React-based web application that allows users to browse, search, 
          and discover movies using The Movie Database (TMDB) API. Users can view detailed information 
          about each movie, add favorites, and enjoy a responsive, user-friendly interface."
          src={projectSeven}
          githubLink={
            <a href="https://github.com/Babucarr-Badjie/Movie-App" target="_">
              <FaGithub title="github" />
            </a>
          }
          websiteLink={
            <a href="https://babucarr-movie-app.netlify.app/" target="_">
              <FaGlobe title="website" />
            </a>
          }
        />
      </div>
    </section>
  );
}
