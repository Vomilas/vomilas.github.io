"use client";

import { memo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SectionTitle } from "../SectionTitle";

import { JobDetails } from "./JobDetails";
import { JOBS } from "./constants";

export const Experience = memo(() => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center space-y-4 bg-primary py-8 md:space-y-8 md:py-24"
    >
      <SectionTitle order={2} text="Where I've Worked" />
      <div className="flex w-full flex-col items-center justify-center space-y-4 px-4 md:w-[720px] md:flex-row md:items-start md:justify-center md:space-x-4 md:space-y-0">
        <Tabs
          defaultValue="kaspersky"
          className="flex w-full flex-col justify-between gap-8 md:min-h-72 md:flex-row"
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
      </div>
    </section>
  );
});

Experience.displayName = "Experience";
