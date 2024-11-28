'use client'

import React, { useState, useEffect } from "react";
import logo from '../../assets/images/logo.png';
import { usePathname } from "next/navigation";

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
    const [page, setPage] = useState('');

    // Set the current page path
    useEffect(() => {
        
    }, [pathname]);

    return (
        <header className={`boxcar-header header-style-v1 header-default ${pathname !== '/' && 'style-two inner-header cus-style-1'} `}>
            <div className="header-inner">
                <div className="inner-container">
                    <div className="c-box">
                        <div className="logo-inner">
                            <div className="logo">
                                <a href="/">
                                    <img src={logo.src} alt="Boxcar" title="Boxcar" />
                                </a>
                            </div>
                        </div>
                        <div className="nav-out-bar">
                            <nav className="nav main-menu">
                                <ul className="navigation" id="navbar">
                                    {navLinks.map((link, index) => (
                                        <li key={index} className={page === link.url ? "active" : ""}>
                                            <a href={link.url}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="right-box">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-popup">
                <span className="search-back-drop"></span>
                <button className="close-search">
                    <span className="fa fa-times"></span>
                </button>
                <div className="search-inner">
                    <form method="post" action="#">
                        <div className="form-group">
                            <input
                                type="search"
                                name="search-field"
                                placeholder="Search..."
                                required
                            />
                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="nav-mobile"></div>
        </header>
    );
};

export default Header;
