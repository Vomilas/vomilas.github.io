import { memo, useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { menuItems } from "@/config/menu";
import { useScrollPosition } from "@/lib/hooks";
import { RESUME_PATH } from "@/config/constants";

export const MobileMenu = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollPosition();

  const handleResumeClick = () => {
    window.open(RESUME_PATH, '_blank', 'noopener,noreferrer');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <div className="flex h-full flex-col">
          <SheetTitle className="text-2xl font-semibold text-secondary mb-12 border-b border-secondary/20 pb-4">
            Navigation
          </SheetTitle>
          <nav className="flex flex-col space-y-2" role="navigation" aria-label="Main navigation">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`group relative text-lg font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? "bg-secondary/10 text-secondary"
                      : "text-gray-400 hover:bg-secondary/5 hover:text-secondary"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.href.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
            <Button
              onClick={handleResumeClick}
              variant="outline"
              className="mt-4 w-full"
              aria-label="Open resume in new tab"
            >
              Resume
            </Button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
});

MobileMenu.displayName = "MobileMenu";
