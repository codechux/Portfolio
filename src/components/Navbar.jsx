import { useState } from "react";
import logo from "../assets/man.jpeg";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-8 md:px-14 lg:px-16">
      {/* MOBILE NAVBAR */}
      <div
        className="fixed top-10 flex items-center justify-between w-[85%] z-30 bg-[#000000b5] border-[0.01em] border-[#3d3b4b] rounded-2xl h-[3.9rem] 
        p-4 lg:hidden"
      >
        <div className="flex items-center justify-start w-full">
          <img
            className="h-8 w-8 object-cover rounded-full"
            src={logo}
            alt="logo"
          />
          <div className="container">
            <p className="scrolling-text text-[#C4C4C4] ml-2 text-[10px] font-semibold tracking-widest">
              OGUH CHUKWUKA
            </p>
          </div>
        </div>

        <div>
          {drawer ? (
            <TfiClose
              onClick={handleDrawer}
              className="text-[23px] text-[white]"
            />
          ) : (
            <CiMenuFries
              onClick={handleDrawer}
              className="text-[24px] text-[white]"
            />
          )}
        </div>
      </div>

      {/* DRAWER */}
      {drawer ? (
        <motion.div
          animate={{ x: [330, 0], opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0,
          }}
          initial={{ opacity: 1, scale: 1 }}
          className="fixed top-0 flex justify-end w-full h-[100vh] z-20 backdrop-blur-sm lg:hidden text-[white]"
        >
          <div className="flex flex-col items-center justify-center w-[75%] pt-7 bg-[#000000] shadow-2xl shadow-[#323232] md:w-[50%] md:pt-24">
            <a
              href="#about"
              onClick={handleDrawer}
              className="text-[17px] flex flex-col items-center justify-center w-full mb-4"
            >
              {/* <p className="text-[white]">01.</p> */}
              <p className="text-[white]">About</p>
            </a>
            <a
              href="#work"
              onClick={handleDrawer}
              className="text-[17px] flex flex-col items-center justify-center w-full my-4"
            >
              {/* <p className="text-[white]">02.</p> */}
              <p className="text-[white]">Work</p>
            </a>
            <a
              href="#experience"
              onClick={handleDrawer}
              className="text-[17px] flex flex-col items-center justify-center w-full my-4"
            >
              {/* <p className="text-[white]">03.</p> */}
              <p className="text-[white]">Experience</p>
            </a>
            <a
              href="#contact"
              onClick={handleDrawer}
              className="text-[17px] flex flex-col items-center justify-center w-full mt-4"
            >
              {/* <p className="text-[white]">04.</p> */}
              <p className="text-[white]">Contact</p>
            </a>
            {/* <a>
              <button className="w-36 h-12 rounded text-center text-[14px] text-[white] border-[0.01em] border-[white] mt-14">
                Resume
              </button>
            </a> */}
          </div>
        </motion.div>
      ) : (
        ""
      )}

      {/* DESKTOP SCREEN */}
      <div className="hidden lg:flex items-center justify-end w-full mt-10">
        <a
          href="#about"
          className="text-[15px] flex items-center justify-center mx-4 xl:text-[16px] xl:mx-5"
        >
          <p className="text-[black]">01.</p>
          <p className="ml-2 text-[black]">About</p>
        </a>
        <a
          href="#work"
          className="text-[15px] flex items-center justify-center mx-4 xl:text-[16px] xl:mx-5"
        >
          <p className="text-[black]">02.</p>
          <p className="ml-2 text-[black]">Work</p>
        </a>
        <a
          href="#experience"
          className="text-[15px] flex items-center justify-center mx-4 xl:text-[16px] xl:mx-5"
        >
          <p className="text-[black]">03.</p>
          <p className="ml-2 text-[black]">Experience</p>
        </a>
        <a
          href="#contact"
          className="text-[15px] flex items-center justify-center mx-4 xl:text-[16px] xl:mx-5"
        >
          <p className="text-[black]">04.</p>
          <p className="ml-2 text-[black]">Contact</p>
        </a>
        {/* <a>
          <button
            className="w-28 h-11 rounded-md text-center ml-4 text-[14px] text-[black] border-[0.01em] border-[black] xl:text-[15px]
              xl:ml-5"
          >
            Resume
          </button>
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
