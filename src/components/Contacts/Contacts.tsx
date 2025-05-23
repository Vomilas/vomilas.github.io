import { memo } from "react";

import { Button } from "../ui/button";
import { SectionTitle } from "../SectionTitle";

export const Contacts = memo((props) => {
  return (
    <section
      id="contact"
      className="flex h-96 w-full flex-col items-center space-y-4 pt-24"
    >
      <SectionTitle order={4} text="Get in touch" />
      <p className="flex px-6 text-center font-lato leading-6 tracking-wider text-gray-400 sm:px-16 md:w-[600px] md:px-0">
        Let's turn your ideas into reality! Whether it's a new project, collaboration, or just a friendly chat about tech, I'm here to connect and create something amazing together.
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
