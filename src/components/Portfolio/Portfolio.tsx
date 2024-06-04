import { memo } from "react";

import { SectionTitle } from "../SectionTitle";

export const Portfolio = memo((props) => {
  return (
    <div
      className=" flex flex-col xl:space-y-28 space-y-12 bg-primary w-full
  2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      <SectionTitle order={3} text="Some Things I've Built" />
    </div>
  );
});

Portfolio.displayName = "Portfolio";
