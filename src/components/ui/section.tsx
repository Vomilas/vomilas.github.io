import { memo } from "react";
import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";

export const Section = memo(({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen flex-col justify-center px-8 pt-0 sm:px-8 md:px-28 md:pt-32 lg:px-32 xl:px-56 2xl:px-72",
        className
      )}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";
