import { memo } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const menuItems = ["About", "Experience", "Work", "Contact"];

export const DesktopMenu = memo(() => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden flex-row items-center space-x-8 font-mono text-xs md:flex">
      {menuItems.map((item, index) => (
        <Link
          href={`#${item.toLowerCase()}`}
          key={item}
          className="text-secondary"
          onClick={(e) => handleClick(e, `#${item.toLowerCase()}`)}
        >
          &gt; {`0${index + 1}. `}
          <span className="text-white duration-300 hover:cursor-pointer hover:text-secondary">
            {item}
          </span>
        </Link>
      ))}
      <Button size="sm"> Resume</Button>
    </div>
  );
});

DesktopMenu.displayName = "DesktopMenu";
