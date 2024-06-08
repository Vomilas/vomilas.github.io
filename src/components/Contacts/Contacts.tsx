import { memo } from "react";

import { Button } from "../ui/button";

import { ArrowIcon } from "../icons";

export const Contacts = memo((props) => {
  return (
    <div className="flex flex-col space-y-4 w-full h-96 pt-24 items-center bg-primary">
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-secondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-secondary font-sans text-sm  sm:text-base">
            04.
          </span>
          <span className=" font-sans text-secondary text-base">
            What&apos;s Next?
          </span>
        </div>
      </div>
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-lato leading-6 tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Although I&apos;m always open for any new opportunities, my inbox is
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="pt-4">
        <a href="mailto:afsalimov@gmail.com" target="_blank" rel="noreferrer">
          <Button>Say Hello</Button>
        </a>
      </div>
    </div>
  );
});

Contacts.displayName = "Contacts";
