import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div
        className="mt-14 w-full h-full
        "
      >
        <h2 className="text-xl largerTablet:text-4xl font-bold ">
          Development Skills
        </h2>
        <div className="w-full mt-14 overflow-x-hidden">
          <p className="text-md font-medium font-bodyFont">HTML</p>
          <span className="w-full h-2 inline-flex bgOpacity rounded-md mt-5">
            <motion.span
              initial={{ x: "-86%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className=" w-[86%] h-full bg-gradient-to-r from-blue-600
             via-pink-500 to-orange-500 rounded-lg relative"
            >
              <span className="absolute -top-8 right-0">86%</span>
            </motion.span>
          </span>
        </div>
        <div className="w-full mt-10 overflow-x-hidden">
          <p className="text-md font-medium font-bodyFont">CSS</p>
          <span className="w-full h-2 inline-flex bgOpacity rounded-md mt-5">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className=" w-[80%] h-full bg-gradient-to-r from-blue-600
              via-pink-500 to-orange-500 rounded-lg relative"
            >
              <span className="absolute -top-8 right-0">80%</span>
            </motion.span>
          </span>
        </div>
        <div className="w-full mt-10 overflow-x-hidden">
          <p className="text-md font-medium font-bodyFont">JAVASCRIPT</p>
          <span className="w-full h-2 inline-flex bgOpacity rounded-md mt-5">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative w-[84%] h-full bg-gradient-to-r from-blue-600
              via-pink-500 to-orange-500 rounded-lg"
            >
              <span className="absolute -top-8 right-0">84%</span>
            </motion.span>
          </span>
        </div>
        <div className="w-full mt-10 overflow-x-hidden">
          <p className="text-md font-medium font-bodyFont">REACT</p>
          <span className="w-full h-2 inline-flex bgOpacity rounded-md mt-5">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative w-[80%] h-full bg-gradient-to-r from-blue-600
              via-pink-500 to-orange-500 rounded-lg transition-all"
            >
              <span className="absolute -top-8 right-0">80%</span>
            </motion.span>
          </span>
        </div>
        <div className="w-full mt-10 overflow-x-hidden">
          <p className="text-md font-medium font-bodyFont">GIT</p>
          <span className="w-full h-2 inline-flex bgOpacity rounded-md mt-5">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative w-[70%] h-full bg-gradient-to-r from-blue-600
              via-pink-500 to-orange-500 rounded-lg"
            >
              <span className="absolute -top-8 right-0">70%</span>
            </motion.span>
          </span>
        </div>
        <div className="w-full mt-10 overflow-x-hidden">
          <p className="text-md font-medium font-bodyFont">GITHUB</p>
          <span className="w-full h-2 inline-flex bgOpacity rounded-md mt-5">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative w-[78%] h-full bg-gradient-to-r from-blue-600
              via-pink-500 to-orange-500 rounded-lg"
            >
              <span className="absolute -top-8 right-0">78%</span>
            </motion.span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
