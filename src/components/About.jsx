import { BiSolidRightArrow } from "react-icons/bi";

const About = () => {
  const items = [
    {
      skill: "REACTJS",
    },
    {
      skill: "REACT NATIVE",
    },
    {
      skill: "REDUX",
    },
    {
      skill: "JAVASCRIPT",
    },
    {
      skill: "NEXTJS",
    },
    {
      skill: "ANIMATIONS",
    },
    {
      skill: "GIT & GITHUB",
    },
    {
      skill: "NPM",
    },
    {
      skill: "TAILWIND CSS",
    },
    {
      skill: "AXIOS/FETCH API",
    },
  ];

  return (
    <div
      className="flex flex-col items-start justify-center w-full mt-28 px-8 md:px-14 md:mt-40 lg:flex-row lg:px-24 
    lg:items-center lg:justify-between xl:px-52 xl:mt-72"
    >
      <div className="flex flex-col items-start justify-center w-full lg:w-[55%]">
        <div className="flex items-center justify-start w-full mb-5 md:w-[60%] lg:w-full">
          <p className="text-[15px] mt-1 md:mt-2 md:text-[19px] lg:text-[20px] xl:mt-1">
            01.
          </p>
          <p className="text-[23px] font-medium ml-2 whitespace-nowrap text-[black] md:text-[27px] md:font-bold lg:text-[28px]">
            About Me
          </p>
          <hr className="border-[0.01em] border-[#3d3b4b] w-full ml-2" />
        </div>
        <div className="md:w-[90%] lg:-[100%]">
          <p className="font-peralta sm:text-sm text-[12px]"></p>
        </div>
      </div>

      <div className="mt-5 md:w-[60%] md:mt-8 lg:w-[40%] lg:mt-0 lg:ml-10">
        <div className="xl:mb-6">
          <h1 className="text-[21px] font-bold mb-4 text-[black] xl:text-[27px]">
            Skills
          </h1>
        </div>
        <div className="flex flex-wrap items-start justify-between w-full">
          {items.map((item) => {
            return (
              <div
                key={item.index}
                className="flex items-center justify-start w-[40%] mb-8"
              >
                <BiSolidRightArrow className="text-[black] text-[12px]" />
                <p className="text-[12px] text-[black] ml-2 whitespace-nowrap lg:text-[13px] xl:text-[16px] font-peralta">
                  {item.skill}
                </p>
              </div>
            );
          })}
        </div>

        <a
          href="#"
          download
          className="text-[13px] font-medium text-[black] underline xl:mt-6 font-peralta"
        >
          And a whole lot more
        </a>
      </div>
    </div>
  );
};

export default About;
