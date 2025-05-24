"use client";

import { memo } from "react";

import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { SectionParticles } from "../ParticlesBackground";

const TypeWritter = dynamic(() => import("../TypeWritter").then(mod => mod.TypeWritter), { ssr: false });

export const Welcome = memo(() => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-8 pt-0 sm:px-8 md:px-28 md:pt-32 lg:px-32 xl:px-56 2xl:px-72">
      <SectionParticles particleCount={80} />
      <span className="font-mono text-secondary">Hi, my name is </span>
      <h1 className="mt-4 text-3xl font-bold text-gray-300 sm:text-5xl md:text-6xl lg:text-7xl">
        Anushervon Salimov
      </h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-400 sm:text-5xl md:text-6xl lg:text-7xl">
        I <TypeWritter text="make ideas & things alive" delay={150} />
      </h2>
      <h3 className="font-Header sm:text-md mt-10 text-sm tracking-wider text-gray-400 md:text-lg md:leading-8 max-w-3xl">
        I&apos;m a <span className="text-secondary">software engineer</span> passionate about building{" "}
        <span className="text-secondary">web applications</span> that{" "}
        <br className="hidden 2xl:block" />
        solve real-world challenges. With a focus on{" "}
        <span className="text-secondary">user experience</span>, I create{" "}
        <br className="hidden 2xl:block" />
        digital solutions that are both elegant and impactful.
      </h3>
      <div className="mt-12">
        <Button className="hover:scale-105 transition-transform duration-300">Check out my resume!</Button>
      </div>
    </section>
  );
});

Welcome.displayName = "Welcome";
