// src/crops/elements/Navbar/Navbar.styles.ts
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primary};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: auto;
    cursor: pointer;
  }
`;

export const NavItems = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
// ナビ内リンク（共通リンク用）
export const StyledNavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

// モバイル用ハンバーガーボタン
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
