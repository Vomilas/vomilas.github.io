import { memo } from "react";

import { Logo } from "./Logo";
import { DesktopMenu } from "./DesktopMenu";

const shouldShowElement = true;

export const Header = memo(() => {
  return (
    <div
      className={`w-full fixed ${
        shouldShowElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `
      } bg-primary flex
  justify-between px-6 sm:px-12 py-2 sm:py-4  transition duration-4000 translate-y-0 z-20`}
    >
      <Logo />
      <DesktopMenu />
    </div>
  );
});

Header.displayName = "Header";
