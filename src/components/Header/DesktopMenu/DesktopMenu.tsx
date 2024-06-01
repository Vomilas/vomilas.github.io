import { memo } from "react";

import { Button } from "@/components/ui/button";

const menuItems = ["About", "Experience", "Work", "Contact"];

export const DesktopMenu = memo(() => {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      {menuItems.map((item, index) => (
        <div key={item} className="text-secondary">
          &gt; {`0${index + 1}. `}
          <span className="text-white hover:cursor-pointer hover:text-secondary duration-300">
            {item}
          </span>
        </div>
      ))}
      <Button size="sm"> Resume</Button>
    </div>
  );
});

DesktopMenu.displayName = "DesktopMenu";
