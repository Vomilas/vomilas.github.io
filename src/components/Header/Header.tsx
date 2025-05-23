import { memo } from "react";

import { Logo } from "./Logo";
import { DesktopMenu } from "./DesktopMenu";

const shouldShowElement = true;

export const Header = memo(() => {
  return (
    <div
      className={`fixed w-full ${
        shouldShowElement ? `bg-opacity-30 shadow-xl` : `bg-opacity-0`
      } duration-4000 z-20 flex translate-y-0 justify-between bg-primary px-6 py-2 transition sm:px-12 sm:py-4`}
    >
      <Logo />
      <DesktopMenu />
    </div>
  );
});

Header.displayName = "Header";
