// src/crops/elements/Navbar/MobileMenu.tsx
"use client";

import React, { useEffect } from "react";
import { Overlay, MenuContainer, MobileLink, CloseButton } from "./MobileMenu.styles";
import { MobileMenuProps } from "./types";
import Link from "next/link";
// MobileMenu.tsx の上部
import Button from "@/crops/elements/Button";

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, items }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <MenuContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton>
           <Button
             variant="circle"
             size="sm"
             ariaLabel="Close menu"
             onClick={onClose}
             >
           CLOSE
          </Button>
      </CloseButton>

        {items.map((item, idx) => (
          <Link key={idx} href={item.href} legacyBehavior>
            <MobileLink onClick={onClose}>{item.label}</MobileLink>
          </Link>
        ))}
      </MenuContainer>
    </Overlay>
  );
};

