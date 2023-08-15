import Education from "./education/Education";
import KnowMe from "./KnowMe";
import Skills from "./Skills";
import Experience from "./experience/Experience";
import { useState } from "react";

export default function About() {
  // declare states
  const [knowMeData, setKnowMeData] = useState(true);
  const [educationData, setEducationData] = useState(false);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

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
        <ul
          className="w-full grid grid-cols-1 largerTablet:grid-cols-2 
          largerLaptop:grid-cols-4 largerLaptop:py-10 py-4 uppercase 
          tracking-widest"
        >
          <li
            onClick={() =>
              setKnowMeData(true) &
              setEducationData(false) &
              setSkillsData(false) &
              setExperienceData(false)
            }
            className={`${
              knowMeData
                ? "border-gray-500 rounded-lg bg-black"
                : "border-transparent"
            } about-me`}
          >
            Get to know me
          </li>
          <li
            onClick={() =>
              setKnowMeData(false) &
              setEducationData(true) &
              setSkillsData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-gray-500 rounded-lg bg-black"
                : "border-transparent"
            } about-me`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setKnowMeData(false) &
              setEducationData(false) &
              setSkillsData(true) &
              setExperienceData(false)
            }
            className={`${
              skillsData
                ? "border-gray-500 rounded-lg bg-black"
                : "border-transparent"
            } about-me`}
          >
            Skills
          </li>
          <li
            onClick={() =>
              setKnowMeData(false) &
              setEducationData(false) &
              setSkillsData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "border-gray-500 rounded-lg bg-black"
                : "border-transparent"
            } about-me`}
          >
            Experience
          </li>
        </ul>
      </div>
      {knowMeData && <KnowMe />}
      {educationData && <Education />}
      {skillsData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
}
