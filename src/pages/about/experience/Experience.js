import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div
        className="mt-14 w-full h-auto border-l-[5px] border-black
        border-opacity-30 flex flex-col gap-10"
      >
        <h2 className="text-xl smallerTablet:text-4xl font-bold ml-5 ">
          Job Experience
        </h2>
        <ExperienceCard
          company="Marketech International Corp. (MIC), Gas Division"
          description="A Semiconductor Equipments producing company"
          title="Technical Engineer"
          roleOne="Review customers’ technical documents."
          roleTwo="Responsible for creating standard operating procedures (SOP) for manufacturing products."
          roleThree="Delivered technical reports and product solutions to customers."
          roleFour="Oversee the assembly process and ensure that products conform to the customer’s design."
          time="March, 2021 ~ February, 2023"
        />
        <ExperienceCard
          company="Lily English Language School"
          description="English Language Cram School"
          title="English Teacher"
          roleOne="Prepare Lesson Plans."
          roleTwo="Prepare students for Cambridge English Language Assessment (Starters, Movers & Flyers) which involve reading, writing, listening, and speaking."
          roleThree="Prepare students for General English Proficiency Test (GEPT)"
          time="August, 2019 ~ February, 2021"
        />
      </div>
    </motion.div>
  );
}
