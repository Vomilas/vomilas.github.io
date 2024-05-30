import { memo } from "react";

export const EmailAddressBar = memo(() => {
  return (
    <div className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between">
      <div className="flex flex-col space-y-24 justify-center items-center">
        <div className="rotate-90">
          <a
            href="mailto:afsalimov@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <span className=" font-lato tracking-wider text-gray-400 hover:text-secondary hover:cursor-pointer">
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
