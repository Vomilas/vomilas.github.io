import { memo } from "react";

import { Button } from "../ui/button";
import { SectionTitle } from "../SectionTitle";
import { SectionParticles } from "../ParticlesBackground";

export const Contacts = memo(() => {
  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center justify-center space-y-4 px-4 py-16 sm:px-16 md:space-y-8 md:px-16 lg:px-24 xl:space-y-12 2xl:px-72"
    >
      <SectionParticles particleCount={25} />
      <SectionTitle order={4} text="Get In Touch" />
      <p className="flex px-6 text-center font-lato leading-6 tracking-wider text-gray-400 sm:px-16 md:w-[600px] md:px-0">
        Let&apos;s turn your ideas into reality! Whether it&apos;s a new project, collaboration, or just a friendly chat about tech, I&apos;m here to connect and create something amazing together.
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
