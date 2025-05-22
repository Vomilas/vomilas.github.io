import { memo } from "react";

import { TelegramIcon, LinkedinIcon, GithubIcon } from "../icons";

const MEDIAS = [
  { Icon: TelegramIcon, url: "https://t.me/vomilas" },
  { Icon: LinkedinIcon, url: "https://linkedin.com/vomilas" },
  { Icon: GithubIcon, url: "https://github.com/Vomilas" },
];

export const SocialMedia = memo(() => {
  return (
    <div className="fixed bottom-0 left-0 z-10 hidden flex-row items-center justify-between px-12 lg:flex">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-5">
          {MEDIAS.map(({ Icon, url }) => (
            <a href={url} key={url} target="_blank" rel="noopener noreferrer">
              <Icon className="h-6 w-6 fill-current text-gray-400 transition-all duration-300 ease-in-out hover:text-secondary hover:scale-125 hover:rotate-12 hover:drop-shadow-lg" />
            </a>
          ))}
        </div>
        <div className="h-28 w-0.5 bg-gray-400"></div>
      </div>
    </div>
  );
});

SocialMedia.displayName = "SocialMedia";
