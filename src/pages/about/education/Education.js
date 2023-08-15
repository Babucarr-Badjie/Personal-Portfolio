import { motion } from "framer-motion";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col largerLaptop:flex-row"
    >
      <div
        className="mt-14 w-full h-full  border-l-[5px]
         border-black
        border-opacity-30 flex flex-col gap-10 "
      >
        <h2 className="text-xl largerTablet:text-4xl font-bold ml-5 ">
          Education Background
        </h2>
        <EducationCard
          header="Master Degree"
          time="2017~2019"
          school="National Taiwan University of Science & Technology, Taiwan "
          major="Civil & Construction Engineering"
        />
        <EducationCard
          header="Bachelor Degree"
          time="2012~2016"
          school="National Taipei University of Technology, Taiwan "
          major="Civil Engineering"
        />
      </div>
    </motion.div>
  );
}
