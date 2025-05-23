import { memo } from "react";

import { Button } from "../ui/button";
import { SectionTitle } from "../SectionTitle";

export const Contacts = memo((props) => {
  return (
    <section
      id="contact"
      className="flex h-96 w-full flex-col items-center space-y-4 bg-primary pt-24"
    >
      <SectionTitle order={4} text="Get in touch" />
      <p className="flex px-6 text-center font-lato leading-6 tracking-wider text-gray-400 sm:px-16 md:w-[600px] md:px-0">
        Although I&apos;m always open for any new opportunities, my inbox is
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="pt-4">
        <a href="mailto:afsalimov@gmail.com" target="_blank" rel="noreferrer">
          <Button className="hover:scale-105 transition-transform duration-300">Say Hello</Button>
        </a>
      </div>
    </section>
  );
});

Contacts.displayName = "Contacts";
