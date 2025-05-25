export interface MenuItem {
  id: string;
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "work", label: "Work", href: "#work" },
  { id: "contact", label: "Contact", href: "#contact" },
];
