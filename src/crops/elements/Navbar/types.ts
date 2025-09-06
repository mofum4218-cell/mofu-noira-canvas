// src/crops/elements/Navbar/types.ts
export type NavItem = {
  label: string;
  href: string;
  type?: "button";
};

export type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
};

