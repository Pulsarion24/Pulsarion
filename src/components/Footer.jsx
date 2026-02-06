import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="position-relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="position-absolute top-0 start-50 translate-middle-x w-50 h-50 rounded-circle" style={{ background: 'rgba(100,255,218,0.05)', filter: 'blur(100px)' }}></div>

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="row g-5">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <Link to="/" className="d-flex align-items-center mb-4 text-decoration-none">
                            <img src="/images/pulsarion-logo.jpg" alt="Pulsarion" className="logo me-2" />
                            <span className="h4 mb-0 text-white font-weight-bold">Pulsarion</span>
                        </Link>
                        <p className="text-secondary mb-4">Innovating the Future, One Solution at a Time. We deliver cutting-edge technology solutions that transform businesses.</p>
                        <div className="social-links mt-3">
                            <a href="#" className="social-icon d-flex align-items-center justify-content-center rounded-circle"><FaFacebookF /></a>
                            <a href="#" className="social-icon d-flex align-items-center justify-content-center rounded-circle"><FaTwitter /></a>
                            <a href="#" className="social-icon d-flex align-items-center justify-content-center rounded-circle"><FaLinkedinIn /></a>
                            <a href="#" className="social-icon d-flex align-items-center justify-content-center rounded-circle"><FaInstagram /></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="footer-link d-block py-1">Home</Link></li>
                            <li><Link to="/about" className="footer-link d-block py-1">About Us</Link></li>
                            <li><Link to="/services" className="footer-link d-block py-1">Services</Link></li>
                            <li><Link to="/portfolio" className="footer-link d-block py-1">Portfolio</Link></li>
                            <li><Link to="/blog" className="footer-link d-block py-1">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-white mb-4">Services</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/services" className="footer-link d-block py-1">Software Dev</Link></li>
                            <li><Link to="/services" className="footer-link d-block py-1">Mobile Apps</Link></li>
                            <li><Link to="/services" className="footer-link d-block py-1">Web Dev</Link></li>
                            <li><Link to="/services" className="footer-link d-block py-1">Data Analytics</Link></li>
                            <li><Link to="/services" className="footer-link d-block py-1">IT Consulting</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-4">Contact Info</h5>
                        <ul className="list-unstyled text-secondary">
                            <li className="d-flex mb-3">
                                <FaMapMarkerAlt className="text-primary-c mt-1 me-3 flex-shrink-0" />
                                <span>Lusaka, Zambia</span>
                            </li>
                            <li className="d-flex mb-3">
                                <FaEnvelope className="text-primary-c mt-1 me-3 flex-shrink-0" />
                                <a href="mailto:pulsarionitsolutions@gmail.com" className="text-secondary text-decoration-none hover-primary">pulsarionitsolutions@gmail.com</a>
                            </li>
                            <li className="d-flex mb-3">
                                <FaPhone className="text-primary-c mt-1 me-3 flex-shrink-0" />
                                <div>
                                    <a href="tel:+260777342846" className="d-block text-secondary text-decoration-none hover-primary">+260 777 342 846</a>
                                    <a href="tel:+260977889886" className="d-block text-secondary text-decoration-none hover-primary">+260 97 7889886</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="copyright text-center text-secondary border-top border-dark mt-5 pt-4">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Pulsarion IT Solutions Limited. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
