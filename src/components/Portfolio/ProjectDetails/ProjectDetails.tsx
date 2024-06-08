import { memo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectDetailsProps = {
  title: string;
  subTitle?: string;
  description: string;
  link: string;
  imageSrc: string;
  keywords: string[];
  position?: "left" | "right";
};

export const ProjectDetails = memo((props: ProjectDetailsProps) => {
  const {
    title,
    subTitle,
    description,
    link,
    imageSrc,
    keywords,
    position = "left",
  } = props;

  const isImageOnTheLeft = position === "left";

  return (
    <div className="relative md:grid md:grid-cols-12 w-full md:h-96">
      <div className="hidden bg-primary z-10  py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
        <div
          className={cn("relative rounded w-full h-full col-span-7", {
            "col-start-6": !isImageOnTheLeft,
          })}
        >
          <a href={link} target="_blank" rel="noreferrer">
            <div
              className="absolute w-full h-full rounded bg-primary
   transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
            ></div>
          </a>
          <Image
            src={imageSrc}
            className="w-full rounded h-full"
            alt={`${title} Screenshot`}
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full content-center ">
        <div className="absolute w-full h-full bg-opacity-70 z-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full bg-secondary opacity-10 z-10"></div>
            <div className="absolute w-full h-full bg-primary opacity-80 z-10"></div>
            <Image
              src={imageSrc}
              className="w-full h-full"
              alt={`${title} Screenshot`}
              width={600}
              height={400}
            />
          </div>
        </div>
        <div
          className={cn(
            "px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3",
            {
              "xl:col-start-7 col-start-5 md:items-end": isImageOnTheLeft,
            }
          )}
        >
          <div
            className={cn("flex flex-col space-y-1 z-10", {
              "md:items-end": isImageOnTheLeft,
            })}
          >
            <span className="text-secondary text-base">{title} </span>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <span className="md:text-gray-200 text-secondary font-bold text-xl hover:cursor-pointer">
                {subTitle}
              </span>
            </a>
          </div>
          <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6 z-10">
            <p
              className={cn("text-gray-300 md:text-gray-400 text-left", {
                "md:text-right": isImageOnTheLeft,
              })}
            >
              {description}
            </p>
          </div>
          <ul
            className={cn(
              "flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2",
              {
                "md:justify-end": isImageOnTheLeft,
              }
            )}
          >
            {keywords.map((word) => (
              <span className="pr-4 z-10" key={word}>
                {word}
              </span>
            ))}
          </ul>
          <div className="z-10 flex fle-row space-x-5 ">
            <a href={link} target={"_blank"} rel="noreferrer"></a>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectDetails.displayName = "ProjectDetails";
