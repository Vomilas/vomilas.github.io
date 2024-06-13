import { memo } from "react";

import { SectionTitle } from "../SectionTitle";
import { ProjectDetails } from "./ProjectDetails";
import { PROJECTS } from "./constants";

export const Portfolio = memo((props) => {
  return (
    <section
      id="work"
      className="flex w-full flex-col space-y-4 bg-primary px-4 py-8 sm:px-16 md:space-y-12 md:px-16 md:py-16 lg:px-24 xl:space-y-28 2xl:px-72"
    >
      <SectionTitle order={3} text="Some Things I've Built" />
      <div className="flex flex-col space-y-8 md:space-y-28 xl:space-y-36">
        {PROJECTS.map((project, projectIndex) => (
          <ProjectDetails
            key={project.title}
            position={projectIndex % 2 ? "right" : "left"}
            {...project}
          />
        ))}
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";
