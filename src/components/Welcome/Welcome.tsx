import { memo } from "react";

import { Button } from "../ui/button";
import { TypeWritter } from "../TypeWritter";

export const Welcome = memo(() => {
  return (
    <section className="h-full flex flex-col justify-center px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:pt-72 sm:pb-48">
      <span className="text-secondary font-mono">Hi, my name is </span>
      <h1 className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">
        Anushervon Salimov
      </h1>
      <h2 className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">
        I <TypeWritter text="make ideas & things alive" delay={150} />
      </h2>
      <h3 className="text-gray-400 font-Header text-sm md:text-lg md:leading-8 sm:text-md mt-10 tracking-wider">
        I&apos;m a <span className="text-secondary">software engineer</span>, i
        possess strong problem-solving skills and specialize in crafting
        exceptional <br className="2xl:block hidden" />
        digital experiences. My current area of focus is in the{" "}
        <span className="text-secondary">web</span>, where I actively engage in
        developing <br className="2xl:block hidden" />
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
