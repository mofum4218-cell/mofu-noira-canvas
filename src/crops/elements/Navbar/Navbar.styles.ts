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
  }
`;

export const NavItems = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledNavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const ContactButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: ${({ theme }) => theme.radius?.md ?? "8px"};
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

export const Hamburger = styled.button`
  background: none;
  border: none;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

