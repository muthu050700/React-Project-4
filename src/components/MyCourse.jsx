import { motion } from "framer-motion";
import myCourse from "../utils/myCourse";

import DataForMyCourse from "./DataForMyCourse";
const Mycourse = () => {
  const parentContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <div>
      <div className=" bg-[#A91D3A] lg:w-[650px] lg:h-[600px] absolute   z-1 rounded-[100%] blur-[150px] translate-y-[-50%] opacity-30 translate-x-3 animate-blob"></div>
      <div className=" bg-[#A91D3A]  lg:w-[650px] lg:h-[390px] absolute top-[90%] left-[50%]  z-1 rounded-[100%] blur-[150px] translate-y-[-50%] opacity-30 translate-x-3 animate-blob"></div>

      <div className="flex flex-wrap mx-4 justify-center"></div>
      <motion.div
        variants={parentContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap mx-4 justify-center"
      >
        {myCourse.map((val, i) => {
          return <DataForMyCourse data={val} key={i} />;
        })}
      </motion.div>
    </div>
  );
};
export default Mycourse;
