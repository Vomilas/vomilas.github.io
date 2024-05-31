import { memo } from "react";

export const CompaniesBar = memo(() => {
  return (
    <div
      className=" flex flex-col md:flex-row  w-screen lg:w-auto
    overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
     sm:justify-center items-start sm:items-center"
    >
      <div
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[297px] translate-y-1 md:w-0.5
        rounded md:order-1 order-2  "
      >
        <div className="absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-secondary"></div>
      </div>
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0">
        <div className="flex flex-row md:flex-col">
          <button>company name</button>
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <div className="w-[128px] h-0.5 rounded bg-secondary"></div>
        </div>
      </div>
    </div>
  );
});

CompaniesBar.displayName = "CompaniesBar";
