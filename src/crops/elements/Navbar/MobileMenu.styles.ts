// src/crops/elements/Navbar/MobileMenu.styles.ts
import styled from "styled-components";

interface OverlayProps {
  $isOpen: boolean;
}

// 💡 モバイルメニューオーバーレイ
export const Overlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "$isOpen",
})<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.secondary}cc; // ← 半透明
  backdrop-filter: blur(4px);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// メニュー全体の枠
export const MenuContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 300px;
  max-width: 90%;
  position: relative;
`;

// 💡 モバイルリンク視認性対応済み！
export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text}; // ← 視認性重視で text に戻す（背景次第で使い分け）
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.accent}; // ← hoverで変化
  }
`;

// 閉じるボタン位置
export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

