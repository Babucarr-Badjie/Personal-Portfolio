import AboutCard from "./AboutCard";
export default function About() {
  return (
    <section
      id="about"
      className=" w-full h-[100%] pt-10 pb-20 
      border-b-[1px] border-b-black"
    >
      <div className="flex justify-center mt-5">
        <h1 className="text-3xl font-extrabold">ABOUT ME</h1>
      </div>
      <div>
        <ul className="w-full grid grid-cols-4 py-10">
          <li className="about-me">Get to know me</li>
          <li className="about-me">Education</li>
          <li className="about-me">Professional Skills</li>
          <li className="about-me">Experience</li>
        </ul>
      </div>
      <div>
        <h2 className="text-4xl font-bold ">Career Objective</h2>
        <p className="leading-8 py-5">
          I am an accomplished Frontend Web Developer with a proven track record
          of developing high-quality, engaging and successful websites and web
          applications. From the very moment I typed my first "Hello World" into
          the console, I knew that software development was my true calling. To
          me, it's not just a job; it's an engaging challenge that requires
          constant learning and skill improvement in order to create exceptional
          software. My passion for software development has grown exponentially
          since that first "Hello World", and I have since taken numerous online
          courses to expand my programming skills. I am eager to apply my
          passion and skills to collaborate with a talented engineering team to
          develop innovative and top-notch solutions.
        </p>
        <a href="../../assests/Resume.pdf" download>
          <button
            className="bg-orange-500 py-2 px-2 hover:bg-slate-300
            hover:text-black rounded-md"
          >
            Download CV
          </button>
        </a>
      </div>
      <div
        className="mt-14 w-full h-[400px] border-l-[5px] border-black
          border-opacity-30 flex flex-col gap-10 "
      >
        <h2 className="text-4xl font-bold ml-5 ">Education Background</h2>
        <AboutCard
          header="Master Degree"
          time="2017~2019"
          school="National Taiwan University of Science & Technology, Taiwan "
          major="Civil & Construction Engineering"
        />
        <AboutCard
          header="Bachelor Degree"
          time="2012~2016"
          school="National Taipei University of Technology, Taiwan "
          major="Civil Engineering"
        />
      </div>
    </section>
  );
}
