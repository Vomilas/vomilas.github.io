export interface MenuItem {
  id: string;
  label: string;
  href: string;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}
