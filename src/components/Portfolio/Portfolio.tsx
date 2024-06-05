import { memo } from "react";
import Image from "next/image";

import { SectionTitle } from "../SectionTitle";

export const Portfolio = memo((props) => {
  return (
    <div
      className=" flex flex-col xl:space-y-28 space-y-12 bg-primary w-full
  2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      <SectionTitle order={3} text="Some Things I've Built" />
      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          <div
            className="hidden bg-primary z-10  py-4
          absolute md:grid grid-cols-12 w-full h-full content-center"
          >
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://uptrader.io" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-primary
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Image
                src="/assets/uptrader.webp"
                className="w-full rounded h-full"
                alt="Project Screenshot"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-secondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-primary opacity-80 z-10"></div>
                <Image
                  src="/assets/uptrader.webp"
                  className="w-full h-full"
                  alt="Project Screenshot"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-secondary text-base">UpTrader </span>
                <a
                  href="https://uptrader.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="md:text-gray-200 text-secondary font-bold text-xl hover:cursor-pointer">
                    UpTrader CRM
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  At <span className="text-secondary">UpTrader</span>, I played
                  a crucial role in developing ui components for their{" "}
                  <span className="text-secondary">web application</span> using
                  Next.js and other libraries. Our focus was on integrating new
                  features and improving the user interface.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">UpTrader</span>
                <span className="pr-4 z-10">Meta trading</span>
                <span className="pr-4 z-10">CRM</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://uptrader.io"
                  target={"_blank"}
                  rel="noreferrer"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Portfolio.displayName = "Portfolio";
