import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import blueprint from "../assets/blueprint.png";
import ostech from "../assets/ostech.png";

const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const items = [
    {
      id: 1,
      title: "Waxed Solutions",
      date: "Feb 2023 - Present",
      logo: blueprint,
      location: "Vi, Lagos",
    },
    {
      id: 2,
      title: "Allcad Consults",
      date: "2022 - present",
      logo: ostech,
      location: "Vi, Lagos",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full px-8 my-24 md:px-14 md:mt-36 lg:px-24 xl:px-52 xl:mt-72">
      <div className="flex items-center justify-start w-full">
        <div className="flex items-center justify-start w-full mb-2 md:w-[60%] lg:w-[50%]">
          <p className="text-[15px] mt-1 md:mt-2 md:text-[19px] lg:text-[20px] xl:mt-1">
            03.
          </p>
          <p className="text-[23px] font-medium ml-2 whitespace-nowrap text-[#feed7a] md:text-[27px] md:font-bold lg:text-[28px]">
            Experience
          </p>
          <hr className="border-[0.01em] border-[#3d3b4b] w-full ml-2" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-8 lg:w-[80%] xl:w-[60%]">
        {/* Accordion item */}
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-start w-full my-3"
            >
              <div className="flex items-center justify-between w-full rounded-md bg-[#ff8400] border-[0.08em]  h-14 px-3 md:px-7">
                <p className="text-white text-sm text font-semibold md:text-base xl:text-lg">
                  {item.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="hidden text-white text-sm text font-semibold md:flex md:text-base md:pr-8">
                    {item.date}
                  </p>
                  {open ? (
                    <IoIosArrowDown
                      onClick={() =>
                        setIsExpanded(isExpanded === item.id ? null : item.id)
                      }
                      className="text-xl cursor-pointer"
                    />
                  ) : (
                    <IoIosArrowUp
                      onClick={() =>
                        setIsExpanded(isExpanded === item.id ? null : item.id)
                      }
                      className="text-xl cursor-pointer"
                    />
                  )}
                </div>
              </div>

              {isExpanded == item.id && (
                <div className="flex flex-col items-start justify-center w-full bg-[#070707] px-5 py-6 rounded-md mt-5 md:px-8 xl:px-12">
                  <img className="w-24 my-8" src={item.logo} alt="..." />
                  <div className="flex items-center justify-start w-full">
                    <IoLocationSharp className="text-[#ae63f9] text-2xl" />
                    <p className="pl-1 text-sm text-[#C4C4C4] md:text-base">
                      vi, Lagos
                    </p>
                  </div>
                  <p className="text-sm pt-2 leading-6 md:text-base md:pr-4 md:w-[95%] lg:w-[85%] xl:leading-7 xl:text-[17px] xl:w-[95%]">
                    {item.details}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
