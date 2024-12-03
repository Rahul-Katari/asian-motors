'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/images/logo.png';

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/About' },
  { name: 'Current Stock', url: '/CurrentStock' },
  { name: 'Sell Your Car', url: '/SellYourCar' },
  { name: 'Our Showroom', url: '/OurShowroom' },
  { name: 'EMI Calculator', url: '/EmiCalculator' },
  { name: 'Insurance', url: '/Insurance' },
  { name: 'Blog', url: '/Blog' },
  { name: 'Contact Us', url: '/Contact' },
];

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Logic to handle pathname changes (if needed).
  }, [pathname]);

  return (
    <header className={`boxcar-header header-style-v1 header-default ${pathname !== '/' ? 'style-two inner-header cus-style-1' : 'home-page'} `}>
      <div className="header-inner">
        <div className="inner-container">
          <div className="c-box">
            <div className="logo-inner">
              <div className="logo">
                <Link href="/">
                  <img src={logo.src} alt="Boxcar" title="Boxcar" />
                </Link>
              </div>
            </div>
            <div className="nav-out-bar d-none d-md-block">
              <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                  {navLinks.map((link, index) => (
                    <li key={index} className={pathname === link.url ? "active" : ""}>
                      <Link href={link.url}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* Mobile Navigation */}
            <div className="right-box d-block d-md-none">
              <Navbar expand="md" className="">
                <Container fluid>
                  {/* Custom Offcanvas Toggle */}
                  <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0 outline-0 shadow-none">
                    <div className="mobile-navigation">
                      <a href="#nav-mobile" title="">
                        <svg
                          width="22"
                          height="11"
                          viewBox="0 0 22 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="22" height="2" fill="white"></rect>
                          <rect y="9" width="22" height="2" fill="white"></rect>
                        </svg>
                      </a>
                    </div>
                  </Navbar.Toggle>
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id="offcanvasNavbarLabel">
                        Menu
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        {navLinks.map((link, index) => (
                          <Nav.Link key={index} href={link.url}>
                            {link.name}
                          </Nav.Link>
                        ))}
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
