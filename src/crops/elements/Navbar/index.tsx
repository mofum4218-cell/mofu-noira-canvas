// src/crops/elements/Navbar/index.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// ❌ currentTheme 未使用 → 削除
// import { useTheme } from "@/greenhouse/themes/ThemeContext";
import navConfigJson from "@/config/nav/nav.json";
import { NavItem } from "./types";
import {
  NavbarWrapper,
  Logo,
  NavItems,
  StyledNavLink,
  ContactButton,
  Hamburger,
} from "./Navbar.styles";
import { MobileMenu } from "./MobileMenu";

const navConfig = navConfigJson as NavItem[];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <NavbarWrapper>
      {/* ロゴ */}
      <Logo>
        <Link href="/" aria-label="Home">
          <Image src="/merge.png" alt="Logo" width={120} height={40} priority />
        </Link>
      </Logo>

      {/* ナビアイテム */}
      <NavItems>
        {navConfig.map((item, idx) =>
          item.type === "button" ? (
            <ContactButton key={idx}>{item.label}</ContactButton>
          ) : (
            <StyledNavLink key={idx} href={item.href}>
              {item.label}
            </StyledNavLink>
          )
        )}
      </NavItems>

      {/* ハンバーガー（モバイル用） */}
      <Hamburger onClick={handleMenuToggle} aria-label="Open menu">
        <Image src="/menu.svg" alt="menu" width={24} height={24} />
      </Hamburger>

      {/* モーダルメニュー */}
      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} items={navConfig} />
    </NavbarWrapper>
  );
};

