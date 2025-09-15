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
  Hamburger,
} from "./Navbar.styles";
import { MobileMenu } from "./MobileMenu";
import Button from "@/crops/elements/Button";
import { MenuIcon } from "lucide-react";

const navConfig = navConfigJson as NavItem[];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleMenuClose = () => setMenuOpen(false);

  const handleScrollToSection = (href: string) => {
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // 👈 遅延をかけてDOMがレンダリングされるのを待つ
  };

  return (
      // Navbar.tsx で Wrapperに $fixed 渡せば切替可能！
    <NavbarWrapper $fixed={false}>
      {/* 🔄 ロゴ：Heroセクションへジャンプ */}
      <Logo>
        <Link href="/" scroll={true} aria-label="Scroll to Hero">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            priority
            style={{ cursor: "pointer" }}
          />
        </Link>
      </Logo>

      {/* 🔗 ナビゲーションリンク */}
      <NavItems>
      {navConfig.map((item, idx) =>
  item.type === "button" ? (
    <Button
      key={idx}
      variant="default"
      size="sm"
      // href は削除
      onClick={() => handleScrollToSection(item.href)}
    >
      {item.label}
    </Button>
  ) : (
    <StyledNavLink key={idx} href={item.href}>
      {item.label}
    </StyledNavLink>
  )
)}

      </NavItems>

      {/* 🍔 ハンバーガーボタン（モバイル） */}
      <Hamburger>
        <Button
          variant="circle"
          size="sm"
          ariaLabel="Open menu"
          onClick={handleMenuToggle}
          icon={<MenuIcon size={16} />}
        />
      </Hamburger>

      {/* 📱 モバイルメニュー */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        items={navConfig}
      />
    </NavbarWrapper>
  );
};

