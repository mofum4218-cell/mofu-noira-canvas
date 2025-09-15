// src/crops/elements/Navbar/Navbar.styles.ts
import styled from "styled-components";

// 💡 fixed or absolute 切り替え可能に！
export const NavbarWrapper = styled.nav<{ $fixed?: boolean }>`
  position: ${({ $fixed = false }) => ($fixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  // 💡 透過で背景を活かす（必要に応じて下で調整）
  background-color: transparent;
`;

// ロゴ
export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: auto;
    cursor: pointer;
  }
`;

// デスクトップナビ項目
export const NavItems = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

// 💡 ナビリンク色（視認性強化）
export const StyledNavLink = styled.a`
  color: ${({ theme }) => theme?.text ?? "#fff"}; // ← ここ強制白じゃなく theme.text に戻してみた
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.accent}; // ← アクセント色で明確に変化
  }
`;

// モバイル用ハンバーガー
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

