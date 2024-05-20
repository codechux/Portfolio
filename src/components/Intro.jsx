import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiTwitterLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="poppins flex flex-col items-start justify-end w-full px-8 mt-56 md:px-14 md:w-[85%] lg:w-full lg:px-24 lg:mt-40 xl:px-52 xl:mt-48">
      <p className="text-[14px] text-[black] font-light mb-1 md:font-light md:mb-2 md:text-[16px] lg:mb-1">
        Hi, i'm Chukwuka Oguh
      </p>

      <p className="text-[13px] font-normal leading-5 text-[black] md:text-[15px] md:leading-6 lg:text-[16px] lg:w-[65%] xl:w-[60%] xl:text-[18px] xl:leading-8 font-peralta">
        I am a passionate and detail-oriented frontend developer with a deep
        understanding of web technologies and a keen eye for design. With above
        2 years of experience in crafting user-friendly and visually appealing
        websites, I thrive on turning concepts into interactive, functional, and
        engaging digital experiences
      </p>

      <div className="w-full mt-12 lg:hidden">
        <div className="flex items-start justify-between w-[45%] mb-1 text-[black] md:mb-2">
          <motion.div
            animate={{ x: [-100, 0], opacity: [0.5, 1], scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
            initial={{ opacity: 0.2, scale: 0 }}
          >
            <a
              href="https://github.com/codechux?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="text-[16px] md:text-[18px]" />
            </a>
          </motion.div>

          <motion.div
            animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 1,
            }}
            initial={{ opacity: 0.2, scale: 0 }}
          >
            <a
              href="https://www.linkedin.com/in/codechux/"
              target="_blank"
              rel="noreferrer"
            >
              <SlSocialLinkedin className="text-[16px] md:text-[18px]" />
            </a>
          </motion.div>

          <motion.div
            animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 1.5,
            }}
            initial={{ opacity: 0.2, scale: 0 }}
          >
            <a
              href="https://twitter.com/codechux"
              target="_blank"
              rel="noreferrer"
            >
              <RiTwitterLine className="text-[18px] md:text-[20px] text-[black]" />
            </a>
          </motion.div>

          <motion.div
            animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 2,
            }}
            initial={{ opacity: 0.2, scale: 0 }}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=07061347934&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="text-[18px] md:text-[20px]" />
            </a>
          </motion.div>
        </div>
        <hr className="border-[0.01em] border-[black] w-[48%]" />
      </div>
    </div>
  );
};

export default Intro;
