import React from "react";
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <header class="boxcar-header header-style-v1 header-default">
      <div className="header-inner">
        <div className="inner-container">
          <div className="c-box">
            <div className="logo-inner">
              <div className="logo">
                <a href="index.html">
                  <img src={logo.src} alt="" title="Boxcar" />
                </a>
              </div>
            </div>
            <div className="nav-out-bar">
              <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="cars.html">Current Stock</a>
                  </li>
                  <li>
                    <a href="sellyourcar.html">Sell Your Car</a>
                  </li>
                  <li>
                    <a href="ourshowroom.html">Our Showroom</a>
                  </li>
                  <li>
                    <a href="finance.html">EMI Calculator</a>
                  </li>
                  <li>
                    <a href="insurance.html">Insurance</a>
                  </li>
                  <li>
                    <a href="blogs.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
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
          <form
            method="post"
            action="https://creativelayers.net/themes/boxcar-html/index.html"
          >
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                value=""
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
