import { motion } from "framer-motion";

const DataForMyCourse = ({ data }) => {
  const { name, image, hours, lang, completed } = data;
  const squareContainer = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      delay: 1,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 10, bounce: 2, stiffness: 500 },
    },
  };
  return (
    <div>
      <motion.div
        variants={squareContainer}
        whileHover={{ scale: 1.05 }}
        className=" cursor-pointer w-[300px] h-[330px] mx-2 my-4 p-2 text-white bg-white/10 backdrop-blur-[10px] hover:blur-none hover:shadow-xl "
      >
        <div className="flex flex-col gap-4">
          <img src={`${image}`} alt="img" className=" relative rounded-sm" />

          <div className="ml-2 flex flex-col gap-4">
            <h1 className="font-bold text-xl">{name}</h1>
            <div className="flex justify-between font-medium text-sm">
              <p>{hours}</p>
              <p>{lang}</p>
            </div>
            <div className=" text-center text-green-500 font-bold">
              {completed}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DataForMyCourse;
