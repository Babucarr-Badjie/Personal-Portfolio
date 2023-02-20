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
      <div>
        <h2 className="text-4xl font-bold">Master Degree</h2>
        <p className="text-sm text-designColor tracking-[4px] py-5">
          2017 ~ 2019
        </p>
      </div>
    </section>
  );
}
