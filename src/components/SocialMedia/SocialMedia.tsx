import { memo } from "react";

import { TelegramIcon, LinkedinIcon, GithubIcon } from "../icons";

const MEDIAS = [
  { Icon: TelegramIcon, url: "#" },
  { Icon: LinkedinIcon, url: "#" },
  { Icon: GithubIcon, url: "#" },
];

export const SocialMedia = memo(() => {
  return (
    <div className="fixed bottom-0 left-0 z-10 hidden flex-row items-center justify-between px-12 lg:flex">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-5">
          {MEDIAS.map(({ Icon, url }) => (
            <Icon
              key={url}
              className="h-6 w-6 fill-current text-gray-400 hover:cursor-pointer hover:text-secondary"
            />
          ))}
        </div>
        <div className="h-28 w-0.5 bg-gray-400"></div>
      </div>
    </div>
  );
});

SocialMedia.displayName = "SocialMedia";
