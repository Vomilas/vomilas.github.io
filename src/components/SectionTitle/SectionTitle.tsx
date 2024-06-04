import { memo } from "react";

import { ArrowIcon } from "../icons";

type SectionTitleProps = {
  order: number;
  text: string;
  className?: string;
};

export const SectionTitle = memo(({ order, text }: SectionTitleProps) => {
  return (
    <div className=" flex flex-row  items-center md:px-0">
      <ArrowIcon
        className={
          "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-secondary"
        }
      />
      <div className="flex-none flex-row space-x-2 items-center pr-2">
        <span className="text-secondary font-sans text-sm sm:text-xl">
          {" "}
          0{order}.
        </span>
        <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
          {" "}
          {text}
        </span>
      </div>
      <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
    </div>
  );
});

SectionTitle.displayName = "SectionTitle";
