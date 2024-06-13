import { memo } from "react";

export const EmailAddressBar = memo(() => {
  return (
    <div className="fixed -right-10 bottom-0 z-10 hidden flex-row items-center justify-between lg:flex">
      <div className="flex flex-col items-center justify-center space-y-24">
        <div className="rotate-90">
          <a
            href="mailto:afsalimov@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <span className="font-lato tracking-wider text-gray-400 hover:cursor-pointer hover:text-secondary">
              afsalimov<span className="text-secondary">@</span>gmail
              <span className="text-secondary">.</span>com
            </span>
          </a>
        </div>
        <div className="h-24 w-0.5 bg-gray-400"></div>
      </div>
    </div>
  );
});

EmailAddressBar.displayName = "EmailAddressBar";
