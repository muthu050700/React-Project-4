import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {/* <div className=" bg-fuchsia-500 w-[650px] h-[400px] absolute z-1 rounded-[100%] blur-[100px]  translate-y-[-50%] opacity-30 translate-x-3 animate-blob"></div> */}

      <div className="  border-b-[1px] border-b-slate-600 lg:h-32 h-44 text-[#EEEEEE]">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 60,
            ease: "easeIn",
          }}
          className="font-bold text-4xl text-center mb-8 pt-3"
        >
          Online Courses
        </motion.h1>
        <ul className="flex flex-wrap gap-10 justify-center text-lg mb-3 ">
          <li className="z-10">
            <Link
              className={`${
                pathname === "/" && " bg-red-700 rounded-lg"
              } text-lg font-bold p-2 py-3 cursor-pointer `}
              to="/"
            >
              Course Library
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/combo" && " bg-red-700 rounded-lg"
              } text-lg font-bold p-2 py-3 cursor-pointer `}
              to="/combo"
            >
              Combo
            </Link>
          </li>
          <li>
            <Link
              to="/freelibrary"
              className={`${
                pathname === "/freelibrary" && " bg-red-700 rounded-lg"
              } text-lg font-bold p-2 py-3 cursor-pointer `}
            >
              Free Library
            </Link>
          </li>
          <li className=" z-10">
            <Link
              to="/mycourse"
              className={`${
                pathname === "/mycourse" && " bg-red-700 rounded-lg"
              } text-lg font-bold p-2 py-3`}
            >
              My Courses
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
