import { memo } from "react";

import { TelegramIcon, LinkedinIcon, GithubIcon } from "../icons";

const MEDIAS = [
  {
    Icon: TelegramIcon,
    url: "https://t.me/vomilas",
    label: "Telegram Profile"
  },
  {
    Icon: LinkedinIcon,
    url: "https://linkedin.com/vomilas",
    label: "LinkedIn Profile"
  },
  {
    Icon: GithubIcon,
    url: "https://github.com/Vomilas",
    label: "GitHub Profile"
  },
] as const;

export const SocialMedia = memo(() => {
  return (
    <div className="fixed bottom-0 left-0 z-10 hidden flex-row items-center justify-between px-12 lg:flex">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-5">
          {MEDIAS.map(({ Icon, url, label }) => (
            <a
              href={url}
              key={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group"
            >
              <Icon className="h-6 w-6 fill-current text-gray-400 transition-all duration-300 ease-in-out group-hover:text-secondary group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-lg" />
            </a>
          ))}
        </div>
        <div className="h-28 w-0.5 bg-gray-400" aria-hidden="true" />
      </div>
    </div>
  );
});

SocialMedia.displayName = "SocialMedia";
