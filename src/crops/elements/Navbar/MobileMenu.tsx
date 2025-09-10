// src/crops/elements/Navbar/MobileMenu.tsx
"use client";

import React, { useEffect } from "react";
import {
  Overlay,
  MenuContainer,
  MobileLink,
  CloseButtonWrapper,
} from "./MobileMenu.styles";
import { MobileMenuProps } from "./types";
import Button from "@/crops/elements/Button";
import { X } from "lucide-react";
import { log } from "@/utils/logger";

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  log.info("✅ MobileMenu component loaded", { isOpen, items });

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
          <MobileLink
            key={idx}
            onClick={(e) => {
              e.preventDefault();

              log.info(`🕒 Waiting to scroll to ${item.href}...`);
              setTimeout(() => {
  const target = document.querySelector(item.href);
  if (target) {
    log.info("✅ target found:", target);
    target.scrollIntoView({ behavior: "smooth" });
  } else {
    log.warn("❌ target not found for:", item.href);
    log.warn("🧪 current DOM:", document.body.innerHTML.slice(0, 500));
  }
}, 500);

              onClose(); // メニュー閉じるのは即時でもOK
            }}
            href={item.href}
          >
            {item.label}
          </MobileLink>
        ))}
      </MenuContainer>
    </Overlay>
  );
};

