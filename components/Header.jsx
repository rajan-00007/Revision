"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #2563eb; 
  color: white;
  padding: 1rem 0;
`

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
`

const NavItem = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
background-color: ${({ $active }) =>
    $active ? '#1D4ED8' : 'transparent'};

`

export default function Header() {
    const pathname = usePathname()

    return (
        <HeaderContainer>
            <Nav>
                <h1 className="text-xl  font-bold">MyApp</h1>
                <NavList>
                    <li>
                        <NavItem $active={pathname === '/'} href="/">
                            Home
                        </NavItem>
                    </li>
                    <li>
                        <NavItem $active={pathname === '/about'} href="/shadcn">
                            Shadcn
                        </NavItem>
                    </li>
                    <li>
                        <NavItem $active={pathname === '/products'} href="/products">
                            Products
                        </NavItem>
                    </li>
                    <li>
                        <NavItem $active={pathname === '/zod'} href="/zod">
                            Zod
                        </NavItem>
                    </li>
                    <li>
                        <NavItem $active={pathname === '/react-hook-form'} href="/react-hook-form">
                            RFH
                        </NavItem>
                    </li>
                    <li>
                        <NavItem $active={pathname === '/login'} href="/login">
                            Login
                        </NavItem>
                    </li>

                    <li>
                        <NavItem $active={pathname === '/day-3/register'} href="/day-3/register">
                            Day-3
                        </NavItem>
                    </li>
                </NavList>
            </Nav>
        </HeaderContainer>
    )
}
