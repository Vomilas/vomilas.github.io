import { memo } from "react";
import Image from "next/image";

import { ArrowIcon } from "../icons";
import { SectionTitle } from "../SectionTitle";
import { SectionParticles } from "../ParticlesBackground";

const technologies = [
  ["React", "Next.js", "TypeScript", "GraphQL", "Module Federation"],
  ["Node.js", "Tailwind CSS", "Webpack", "Three.js", "D3.js"],
];

export const AboutMe = memo(() => {
  return (
    <section
      id="about"
      className="relative flex snap-start flex-col items-center py-16"
    >
      <SectionParticles particleCount={40} />
      <div className="flex w-full flex-col space-y-8 px-4 sm:w-[500px] sm:px-0 md:w-[700px] lg:w-[900px] relative z-[2]">
        <SectionTitle order={1} text="About Me" />
        <div className="flex w-full flex-col space-y-8 sm:space-x-2 md:flex-row md:space-x-8 md:space-y-0">
          <div className="w-full space-y-4 text-sm sm:text-base md:w-7/12">
            <div className="font-lato">
              <span className="text-gray-400">
                Hi there! I'm Anushervon, a software engineer who transforms complex problems into elegant solutions. My journey in tech began in 2010 when I started writing scripts for Football Manager, sparking a passion for programming that has evolved into a career of creating impactful web applications.
              </span>
            </div>
            <div className="font-lato">
              <span className="text-gray-400">
                With experience across diverse industries, I've honed my expertise in building scalable web applications and user-centric interfaces. I specialize in the{" "}
                <span className="text-secondary">web</span>{" "}
                domain, where I combine technical excellence with creative problem-solving to deliver exceptional digital experiences.
              </span>
            </div>
            <div className="font-lato tracking-wide">
              <span className="text-gray-400">
                Here are a few technologies I've been working with recently:
              </span>
            </div>
            <div className="flex flex-row space-x-16 font-lato tracking-wide">
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-col space-y-4 text-sm sm:text-base">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-secondary"} />
                        <span className="text-xs text-gray-400 sm:text-sm">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-col space-y-4 text-sm sm:text-base">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-secondary"} />
                        <span className="text-xs text-gray-400 sm:text-sm">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="group relative hidden md:block md:h-72 md:w-72 lg:h-96 lg:w-96">
            <div className="absolute h-5/6 w-5/6 translate-x-5 translate-y-5 rounded border-2 border-secondary duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>

            <div className="absolute h-5/6 w-5/6 overflow-hidden rounded z-20">
              <div className="absolute h-full w-full overflow-hidden rounded bg-secondary opacity-10 duration-300 group-hover:opacity-0"></div>
              <Image
                src="/assets/portrait.jpg"
                className="rounded-lg object-contain z-10"
                alt="My Image Not Found"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="relative flex h-48 w-full items-center justify-center md:hidden">
            <div className="absolute h-full w-48 translate-x-5 translate-y-5 rounded border-2 border-secondary"></div>
            <div className="absolute h-full w-48 overflow-hidden rounded">
              <Image
                src="/assets/portrait.jpg"
                className="rounded-lg object-contain"
                alt="My Image Not Found"
                width={300}
                height={300}
              />
            </div>
            <div className="absolute h-full w-48 overflow-hidden rounded bg-secondary opacity-10 md:opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutMe.displayName = "AboutMe";
