import { memo } from "react";

import { Button } from "../ui/button";
import { SectionTitle } from "../SectionTitle";

export const Contacts = memo((props) => {
  return (
    <div className="flex flex-col space-y-4 w-full h-96 pt-24 items-center bg-primary">
      <SectionTitle order={4} text="Get in touch" />
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
