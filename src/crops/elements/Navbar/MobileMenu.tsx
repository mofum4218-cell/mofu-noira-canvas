// src/crops/elements/Navbar/MobileMenu.tsx
"use client";

import React, { useEffect } from "react";
import { Overlay, MenuContainer, MobileLink, CloseButtonWrapper } from "./MobileMenu.styles";
import { MobileMenuProps } from "./types";
import Link from "next/link";
import Button from "@/crops/elements/Button";
import { X } from "lucide-react"; // ← 閉じるアイコン

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
        <CloseButtonWrapper>
          <Button
            variant="circle"
            size="sm"
            ariaLabel="Close menu"
            onClick={onClose}
            icon={<X size={16} />}
          />
        </CloseButtonWrapper>

        {items.map((item, idx) => (
          <Link key={idx} href={item.href} legacyBehavior>
            <MobileLink onClick={onClose}>{item.label}</MobileLink>
          </Link>
        ))}
      </MenuContainer>
    </Overlay>
  );
};

