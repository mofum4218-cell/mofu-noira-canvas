// src/crops/elements/Navbar/MobileMenu.styles.ts
import styled from "styled-components";

interface OverlayProps {
  $isOpen: boolean;
}

export const Overlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "$isOpen",
})<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.secondary}cc;
  backdrop-filter: blur(4px);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

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

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

