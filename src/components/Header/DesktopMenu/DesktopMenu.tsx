import { memo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/config/menu";

export const DesktopMenu = memo(() => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    window.open('/assets/resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="hidden flex-row items-center space-x-8 font-mono text-xs md:flex" aria-label="Main navigation">
      {menuItems.map((item, index) => (
        <Link
          href={item.href}
          key={item.id}
          className="text-secondary"
          onClick={(e) => handleClick(e, item.href)}
          aria-label={`Navigate to ${item.label} section`}
        >
          &gt; {`0${index + 1}. `}
          <span className="text-white duration-300 hover:cursor-pointer hover:text-secondary">
            {item.label}
          </span>
        </Link>
      ))}
      <Button
        onClick={handleResumeClick}
        size="sm"
        aria-label="Open resume in new tab"
      >
        Resume
      </Button>
    </nav>
  );
});

DesktopMenu.displayName = "DesktopMenu";
