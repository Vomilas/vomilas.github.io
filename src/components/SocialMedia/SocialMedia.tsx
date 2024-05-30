import { memo } from "react";

import { TelegramIcon, LinkedinIcon, GithubIcon } from "../icons";

export const SocialMedia = memo(() => {
  return (
    <div className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between">
      <div className="flex flex-col space-y-8 justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-5">
          <TelegramIcon className="w-6 h-6 text-gray-400 hover:text-secondary fill-current hover:cursor-pointer" />
          <LinkedinIcon className="w-6 h-6 text-gray-400 hover:text-secondary fill-current hover:cursor-pointer" />
          <GithubIcon className="w-6 h-6 text-gray-400 hover:text-secondary fill-current hover:cursor-pointer" />
        </div>
        <div className="h-28 w-0.5 bg-gray-400"></div>
      </div>
    </div>
  );
});

SocialMedia.displayName = "SocialMedia";
