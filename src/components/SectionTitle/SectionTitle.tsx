import { memo } from "react";

import { cn } from "@/lib/utils";

import { ArrowIcon } from "../icons";

type SectionTitleProps = {
  order: number;
  text: string;
  className?: string;
};

export const SectionTitle = memo(
  ({ order, text, className }: SectionTitleProps) => {
    return (
      <div className={cn("flex flex-row items-center md:px-0", className)}>
        <ArrowIcon
          className={
            "h-5 w-5 flex-none translate-y-[2px] text-secondary md:h-6 md:w-5"
          }
        />
        <div className="flex-none flex-row items-center space-x-2 pr-2">
          <span className="font-sans text-sm text-secondary sm:text-xl">
            {" "}
            0{order}.
          </span>
          <span className="w-44 text-lg font-bold tracking-wider text-gray-200 opacity-85 md:w-56 md:text-2xl">
            {" "}
            {text}
          </span>
        </div>
        <div className="h-[0.2px] w-full bg-gray-400 md:w-[320px]"></div>
      </div>
    );
  },
);

SectionTitle.displayName = "SectionTitle";
