"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { Menu, X } from "lucide-react";

const HeaderContainer = styled.header`
  background-color: #2563eb;
  color: white;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: relative;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: 900px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #2563eb;
    padding: 1rem;
    align-items: center;
    box-shadow: 0 4px 6px -1px #0000001a;
    z-index: 50;
    border-top: 1px solid #ffffff1a;
  }
`;

const NavItem = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
  background-color: ${({ $active }) => ($active ? "#1D4ED8" : "transparent")};
`;

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <h1 className="text-xl  font-bold">MyApp</h1>

        <MobileMenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>

        <NavList $isOpen={isMenuOpen}>
          <li>
            <NavItem $active={pathname === "/"} href="/">
              Home
            </NavItem>
          </li>
          <li>
            <NavItem $active={pathname === "/about"} href="/shadcn">
              Shadcn
            </NavItem>
          </li>
          <li>
            <NavItem $active={pathname === "/products"} href="/products">
              Products
            </NavItem>
          </li>
          <li>
            <NavItem $active={pathname === "/zod"} href="/zod">
              Zod
            </NavItem>
          </li>
          <li>
            <NavItem
              $active={pathname === "/react-hook-form"}
              href="/react-hook-form"
            >
              RFH
            </NavItem>
          </li>
          <li>
            <NavItem $active={pathname === "/login"} href="/login">
              Login
            </NavItem>
          </li>

          <li>
            <NavItem
              $active={pathname === "/day-3/register"}
              href="/day-3/register"
            >
              Day-3
            </NavItem>
          </li>

          <li>
            <NavItem
              $active={pathname === "/day-3/dashboard"}
              href="/day-3/dashboard"
            >
              Dashboard
            </NavItem>
          </li>

          <li>
            <NavItem $active={pathname === "/day4"} href="/day4">
              DAY-4
            </NavItem>
          </li>

          <li>
            <NavItem $active={pathname === "/add-new-building"} href="/add-new-building">
             Add Building
            </NavItem>
          </li>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}
