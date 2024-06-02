import { memo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ArrowIcon } from "../icons";

export const Experience = memo(() => {
  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-12 bg-primary">
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-secondary"}
          />
          <span className="text-secondary font-sans text-sm  sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        <Tabs
          defaultValue="account"
          className="flex space-x-8 w-[600px]"
          orientation="vertical"
        >
          <TabsList>
            <TabsTrigger value="kaspersky">Kaspersky Lab</TabsTrigger>
            <TabsTrigger value="ibs">IBS</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Kaspersky description</TabsContent>
          <TabsContent value="password">IBS description</TabsContent>
        </Tabs>
      </section>
    </div>
  );
});

Experience.displayName = "Experience";
