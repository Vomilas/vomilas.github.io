import { memo } from "react";
import Image from "next/image";

import { ArrowIcon } from "../icons";
import { SectionTitle } from "../SectionTitle";

const technologies = [
  ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Ether.js", "Solidity"],
  ["Node.js", "TypeScript", "Framer Motion", "react-moralis", "web3.js"],
];

export const AboutMe = memo(() => {
  return (
    <div className="snap-start flex flex-col  items-center py-20 bg-primary">
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px]
        md:w-[700px] lg:w-[900px] "
      >
        <SectionTitle order={1} text="About Me" />
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-lato ">
              <span className="text-gray-400 ">
                Hello! My name is Anushervon, and I am a passionate software
                engineer and problem solver, dedicated to creating impactful
                codes that thrive on the internet. My journey in computer
                science began in 2010 when I started writing scripts for the
                football manager game. Little did I know that programming skills
                would become essential in pursuing this interest, marking the
                start of my programming journey.
              </span>
            </div>
            <div className="font-lato ">
              <span className="text-gray-400 ">
                Since pursuing my engineering degree, my career has taken me
                through diverse industries, allowing me to refine my expertise
                in desktop and web development. In the realm of{" "}
                <span className="text-secondary">web</span>, I am dedicated to
                pushing boundaries and driving advancements.
              </span>
            </div>
            <div className="font-lato tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently
                :
              </span>
            </div>
            <div className="font-lato tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-secondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-secondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-secondary translate-x-5
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-secondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Image
                src="/assets/portrait.jpg"
                className="object-contain rounded-lg"
                alt="My Image Not Found"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-secondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Image
                src="/assets/portrait.jpg"
                className="object-contain rounded-lg"
                alt="My Image Not Found"
                width={300}
                height={300}
              />
            </div>
            <div className="absolute w-48 h-full  bg-secondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

AboutMe.displayName = "AboutMe";
