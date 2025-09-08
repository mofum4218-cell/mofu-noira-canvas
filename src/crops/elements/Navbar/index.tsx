// src/crops/elements/Navbar/index.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
import Button from "@/crops/elements/Button"; // 共通ボタンコンポーネント
import { MenuIcon } from "lucide-react"; // アイコンは lucide でも SVG直読みでもOK

const navConfig = navConfigJson as NavItem[];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <NavbarWrapper>
      {/* 🔄 ロゴ：Heroセクションへジャンプ */}
      <Logo>
        <Link href="#hero" scroll={true} aria-label="Scroll to Hero">
          <Image
            src="/merge.png"
            alt="Logo"
            width={120}
            height={40}
            priority
            style={{ cursor: "pointer" }}
          />
        </Link>
      </Logo>

      {/* ナビゲーションリンク */}
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

    {/* ハンバーガー（モバイル） */}
<Hamburger>
  <Button
    variant="circle"
    size="sm"
    ariaLabel="Open menu"
    onClick={handleMenuToggle}
    icon={<MenuIcon size={16} />} // ← アイコンを中に入れるだけ！
  />
</Hamburger>
      {/* モバイルメニュー */}
      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} items={navConfig} />
    </NavbarWrapper>
  );
};

