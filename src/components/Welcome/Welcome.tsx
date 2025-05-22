"use client";

import { memo } from "react";

import { Button } from "../ui/button";
import dynamic from "next/dynamic";

const TypeWritter = dynamic(() => import("../TypeWritter").then(mod => mod.TypeWritter), { ssr: false });

export const Welcome = memo(() => {
  return (
    <section className="flex h-full flex-col justify-center px-8 py-32 sm:px-8 sm:pb-48 sm:pt-72 md:px-28 lg:px-32 xl:px-56 2xl:px-72">
      <span className="font-mono text-secondary">Hi, my name is </span>
      <h1 className="mt-4 text-3xl font-bold text-gray-300 sm:text-5xl md:text-6xl lg:text-7xl">
        Anushervon Salimov
      </h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-400 sm:text-5xl md:text-6xl lg:text-7xl">
        I <TypeWritter text="make ideas & things alive" delay={150} />
      </h2>
      <h3 className="font-Header sm:text-md mt-10 text-sm tracking-wider text-gray-400 md:text-lg md:leading-8">
        I&apos;m a <span className="text-secondary">software engineer</span>, i
        possess strong problem-solving skills and specialize in crafting
        exceptional <br className="hidden 2xl:block" />
        digital experiences. My current area of focus is in the{" "}
        <span className="text-secondary">web</span>, where I actively engage in
        developing <br className="hidden 2xl:block" />
        and designing immersive{" "}
        <span className="text-secondary">web-applications</span>.
      </h3>
      <div className="mt-12">
        <Button>Check out my resume!</Button>
      </div>
    </section>
  );
});

Welcome.displayName = "Welcome";
