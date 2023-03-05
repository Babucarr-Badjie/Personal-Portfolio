import React from "react";
import { motion } from "framer-motion";
import Resume from "../../assests/Resume.pdf";

export default function KnowMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="mt-14"
    >
      <h2 className="text-xl largerTablet:text-4xl font-bold ">Career Objective</h2>
      <p className="text-md smallerTablet:text-xl leading-8 py-5">
        I am an accomplished Frontend Web Developer with a proven track record
        of developing high-quality, engaging and successful websites and web
        applications. From the very moment I typed my first "Hello World" into
        the console, I knew that software development was my true calling. To
        me, it's not just a job; it's an engaging challenge that requires
        constant learning and skill improvement in order to create exceptional
        software. My passion for software development has grown exponentially
        since that first "Hello World", and I have since taken numerous online
        courses to expand my programming skills. I am eager to apply my passion
        and skills to collaborate with a talented engineering team to develop
        innovative and top-notch solutions.
      </p>
      <a href={Resume} download>
        <button
          className="bg-orange-500 py-3 px-5 hover:bg-slate-300
      hover:text-black rounded-md hover:-translate-y-1 transition-all mt-5"
        >
          Download CV
        </button>
      </a>
    </motion.div>
  );
}
