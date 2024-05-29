import { memo } from "react";

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
      <button className="text-secondary border border-spacing-2 py-2 px-3 rounded-sm border-secondary">
        Resume
      </button>
    </div>
  );
});

DesktopMenu.displayName = "DesktopMenu";
