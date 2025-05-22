import { memo } from "react";

export const EmailAddressBar = memo(() => {
  return (
    <div className="fixed -right-10 bottom-0 z-10 hidden flex-row items-center justify-between lg:flex">
      <div className="flex flex-col items-center justify-center space-y-24">
        <div className="rotate-90 flex flex-col items-center">
          <a
            href="mailto:afsalimov@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <span className="font-lato tracking-wider text-gray-400 transition-all duration-300 ease-in-out group block w-56 overflow-hidden">
              <span className="transition-all duration-300 ease-in-out lg:group-hover:text-secondary lg:group-hover:drop-shadow-lg lg:group-hover:tracking-widest lg:group-hover:-translate-y-1 active:group-active:scale-95 inline-block w-full text-center">
                afsalimov<span className="text-secondary">@</span>gmail
                <span className="text-secondary">.</span>com
              </span>
            </span>
          </a>
        </div>
        <div className="h-24 w-0.5 bg-gray-400"></div>
      </div>
    </div>
  );
});

EmailAddressBar.displayName = "EmailAddressBar";
