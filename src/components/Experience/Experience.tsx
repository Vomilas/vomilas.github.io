import { memo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SectionTitle } from "../SectionTitle";

import { JobDetails } from "./JobDetails";
import { JOBS } from "./constants";

export const Experience = memo(() => {
  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-8 bg-primary">
      <SectionTitle order={2} text="Where I've Worked" />
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start w-[640px]"
      >
        <Tabs
          defaultValue="kaspersky"
          className="flex space-x-8 justify-between w-full md:min-h-72"
          orientation="vertical"
        >
          <TabsList>
            {JOBS.map((job) => (
              <TabsTrigger value={job.slug} key={job.slug}>
                {job.companyName}
              </TabsTrigger>
            ))}
          </TabsList>
          {JOBS.map((job) => (
            <TabsContent value={job.slug} key={job.slug}>
              <JobDetails
                companyName={job.companyName}
                position={job.position}
                period={job.period}
                link={job.link}
                tasks={job.tasks}
              />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
});

Experience.displayName = "Experience";
