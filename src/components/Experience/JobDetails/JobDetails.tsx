import { memo } from "react";

import { ArrowIcon } from "@/components/icons";

type JobDetailsProps = {
  companyName?: string;
  position?: string;
  period?: string;
  link?: string;
  tasks?: Array<string>;
};

export const JobDetails = memo(
  ({ companyName, position, period, link, tasks }: JobDetailsProps) => {
    return (
      <div className="flex max-w-xl flex-col space-y-5 px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          <span className="font-arimo text-sm tracking-wide text-gray-100 sm:text-lg">
            {position} <span className="text-secondary">@ {companyName}</span>
          </span>
          <span className="font-mono text-xs text-gray-500">{period}</span>
          <span
            className="font-mono text-xs text-secondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
          >
            {link}
          </span>
        </div>
        <div className="flex flex-col space-y-4 text-xs sm:text-sm">
          {tasks?.map((task, index) => (
            <div key={index} className="flex flex-row space-x-1">
              <ArrowIcon className={"h-5 w-4 flex-none text-secondary"} />
              <span className="text-xs text-gray-500 sm:text-sm">{task}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

JobDetails.displayName = "JobDetails";
