// src/crops/elements/Footer/index.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import org from "@/config/org/org.json";
import MergeIcon from "@/crops/elements/MergeIcon";
import navItems from "@/config/nav/nav.json";

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 3rem 2rem 2rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: auto;
`;

const CenterLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

// Linkを直接スタイリング（legacyBehavior不要）
const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const TopRightNav = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  display: flex;
  gap: 1.25rem;
`;

const BottomRight = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 2rem;

  p {
    margin: 0.3rem 0;
  }

  .built-by {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: flex-end;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 0 0.25rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      {/* 右上ナビゲーション */}
      <TopRightNav>
        {navItems.map((item, idx) => (
          <NavLink key={idx} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </TopRightNav>

      {/* 中央ロゴ＋社名（外部遷移は <a> でOK） */}
      <CenterLogo href={org.siteUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src="/merge.png"
          alt="Merge Logo"
          width={42}
          height={42}
          sizes="42px"
          priority
          style={{ width: 42, height: 42 }} // レイアウト崩れ防止
        />
        CodeyNode .Inc
      </CenterLogo>

      {/* 下部：法規・クレジット・MergeIcon */}
      <BottomRight>
        <p>
          <Link href="/terms">利用規約</Link> |{" "}
          <Link href="/privacy">プライバシー</Link> |{" "}
          <Link href="/legal">特定商取引法</Link>
        </p>

        <p>{org.email}</p>
        <p>{org.copyright}</p>

        <div className="built-by">
          <MergeIcon />
          <p>
            build with <strong>CodeyNode</strong>
          </p>
        </div>
      </BottomRight>
    </FooterWrapper>
  );
};

export default Footer;

