'use client';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="boxcar-footer footer-style-one">
            {/* Footer Top */}
            <div className="footer-top">
                <div className="boxcar-container">
                    <div className="right-box">
                        <div className="top-left wow fadeInUp">
                            <h6 className="title">Join the Asian Motors Family</h6>
                            <div className="text">
                                Stay ahead with the latest car deals, expert tips, and exclusive updates! Sign up now and never miss an offer.
                            </div>
                        </div>
                        <div className="subscribe-form wow fadeInUp" data-wow-delay="100ms">
                            <form method="post" action="#">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="email"
                                        placeholder="Your e-mail address"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="theme-btn btn-style-one hover-light"
                                    >
                                        <span className="btn-title">Sign Up</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Widgets Section */}
            <div className="widgets-section">
                <div className="boxcar-container">
                    <div className="footer-column-two">
                        <div className="row">
                            {/* Google Map */}
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <iframe
                                    className="w-100 h-100 rounded"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5126382721237!2d78.42766897516495!3d17.387169083499945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974c8699442f%3A0x313ffd283ff2a494!2sASIAN%20MOTORS%20ATTAPUR!5e0!3m2!1sen!2sin!4v1731341219369!5m2!1sen!2sin"
                                    style={{ border: 0, minHeight: '225px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            {/* Links */}
                            <div className="row col-lg-8 mt-md-0 mt-5">
                                {/* Quick Links */}
                                <FooterColumn
                                    title="Quick Links"
                                    links={[
                                        { text: 'Insurance', href: '#' },
                                        { text: 'EMI Calculator', href: '#' },
                                        { text: 'Sell Your Car', href: '#' },
                                        { text: 'Blogs', href: '#' },
                                        { text: 'Contact Us', href: '/contact' },
                                        { text: 'FAQ\'s', href: '/faq' },
                                        { text: 'Privacy Policy', href: '/privacy' },
                                        { text: 'Terms & Conditions', href: '/terms' },
                                    ]}
                                    delay="100ms"
                                />

                                {/* Our Brands */}
                                <FooterColumn
                                    title="Our Brands"
                                    links={[
                                        { text: 'Aston Martin', href: '#' },
                                        { text: 'Audi', href: '#' },
                                        { text: 'Bentley', href: '#' },
                                        { text: 'BMW', href: '#' },
                                        { text: 'Bugatti', href: '#' },
                                        { text: 'Ferrari', href: '#' },
                                        { text: 'Jaguar', href: '#' },
                                        { text: 'Lamborghini', href: '#' },
                                    ]}
                                    delay="200ms"
                                />

                                {/* Vehicle Types */}
                                <FooterColumn
                                    title="Vehicles Type"
                                    links={[
                                        { text: 'Pickup', href: '#' },
                                        { text: 'Coup', href: '#' },
                                        { text: 'Family MPV', href: '#' },
                                        { text: 'Sedan', href: '#' },
                                        { text: 'SUVs', href: '#' },
                                        { text: 'Sport Coupe', href: '#' },
                                        { text: 'Convertible', href: '#' },
                                        { text: 'Wagon', href: '#' },
                                    ]}
                                    delay="300ms"
                                />

                                {/* Social Links */}
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div
                                        className="footer-widget social-widget wow fadeInUp"
                                        data-wow-delay="400ms"
                                    >
                                        <div className="widget-content">
                                            <div className="social-icons">
                                                <h6 className="widget-title">Connect With Us</h6>
                                                <div>
                                                    <a href="tel:09391037686" className="text-white">
                                                        093910 37686
                                                    </a>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-linkedin-in"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="boxcar-container">
                    <div className="inner-container">
                        <div className="copyright-text wow fadeInUp">
                            © 2024 asianmotors.com. All rights reserved.
                        </div>
                        <ul className="footer-nav wow fadeInUp" data-wow-delay="200ms">
                            <li>
                                <Link href="/terms">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="/privacy">Privacy Notice</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, links, delay }) => (
    <div className="col-lg-3 col-md-6 col-sm-12">
        <div className={`footer-widget links-widget wow fadeInUp`} data-wow-delay={delay}>
            <h4 className="widget-title">{title}</h4>
            <div className="widget-content">
                <ul className="user-links style-two">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default Footer;
