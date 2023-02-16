import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section
      id="projects"
      className=" w-full h-[100vh] pt-10 pb-20 
       border-b-[1px] border-b-black"
    >
      <div className="flex justify-center mt-5">
        <h1 className="text-3xl font-extrabold ">MY PROJECTS</h1>
      </div>
      <div className="grid grid-cols-2 gap-28">
        <ProjectCard
          projectTitle="Matching-images-game"
          projectDescription="The game is about flipping cards to match images. 
          The project was built using React.js with CSS3. This project ustilize 
          the use of React Hooks such as useState, useEffect and many more."
        />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
