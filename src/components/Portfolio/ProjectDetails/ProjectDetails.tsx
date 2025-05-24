import { memo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Project } from "../constants";

type ProjectDetailsProps = Project & {
  position?: "left" | "right";
};

export const ProjectDetails = memo(({
  title,
  subTitle,
  description,
  link,
  imageSrc,
  keywords,
  position = "left",
}: ProjectDetailsProps) => {
  const isImageOnTheLeft = position === "left";

  return (
    <div className="relative w-full md:grid md:h-96 md:grid-cols-12">
      <div className="absolute z-10 hidden h-full w-full grid-cols-12 content-center bg-primary py-4 md:grid">
        <div
          className={cn("relative col-span-7 h-full w-full rounded", {
            "col-start-6": !isImageOnTheLeft,
          })}
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="block h-full w-full"
          >
            <div className="absolute h-full w-full rounded bg-primary opacity-30 transition-opacity duration-300 hover:cursor-pointer hover:opacity-0"></div>
            <Image
              src={imageSrc}
              className="h-full w-full rounded object-cover"
              alt={`${title} Screenshot`}
              width={600}
              height={400}
              priority
            />
          </a>
        </div>
      </div>
      <div className="h-full w-full content-center py-4 md:absolute md:grid md:grid-cols-12">
        <div className="absolute z-0 h-full w-full bg-opacity-70">
          <div className="relative h-full w-full">
            <div className="absolute z-10 h-full w-full bg-secondary opacity-10"></div>
            <div className="absolute z-10 h-full w-full bg-primary opacity-80"></div>
            <Image
              src={imageSrc}
              className="h-full w-full object-cover"
              alt={`${title} Screenshot`}
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
        <div
          className={cn(
            "col-span-8 flex flex-col items-start space-y-3 px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6",
            {
              "col-start-5 md:items-end xl:col-start-7": isImageOnTheLeft,
            },
          )}
        >
          <div
            className={cn("z-10 flex flex-col space-y-1", {
              "md:items-end": isImageOnTheLeft,
            })}
          >
            <span className="text-base text-secondary">{title}</span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <span className="text-xl font-bold text-secondary hover:cursor-pointer md:text-gray-200">
                {subTitle}
              </span>
            </a>
          </div>
          <div className="z-10 w-full rounded-md py-6 md:bg-tertiary md:p-6">
            <p
              className={cn("text-left text-gray-300 md:text-gray-400", {
                "md:text-right": isImageOnTheLeft,
              })}
            >
              {description}
            </p>
          </div>
          <ul
            className={cn(
              "font-Text2 flex w-full flex-wrap text-sm text-gray-300 md:text-gray-400",
              {
                "md:justify-end": isImageOnTheLeft,
              },
            )}
          >
            {keywords.map((word) => (
              <li className="z-10 pr-4" key={word}>
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

ProjectDetails.displayName = "ProjectDetails";
