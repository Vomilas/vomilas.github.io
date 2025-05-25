import { useState, useEffect, useCallback } from 'react';
import { menuItems } from '@/config/menu';

export const useScrollPosition = (threshold = 100) => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    const sections = menuItems.map(item => item.href.substring(1));
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= threshold && rect.bottom >= threshold;
      }
      return false;
    });
    setActiveSection(currentSection || "");
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
};
