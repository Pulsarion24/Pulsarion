import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacyPolicy: false
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            privacyPolicy: false
        });
    };

    return (
        <div>
            {/* Page Header */}
            <header className="page-header position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover" }}></div>
                <div className="container position-relative z-1 text-center">
                    <h1 className="display-4 fw-bold text-white mb-3">Contact Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active text-primary-c" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </header>

            {/* Contact Content */}
            <section id="contact" className="section-padding">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h2 className="section-title text-center">Get In Touch</h2>
                            <p className="lead text-secondary">We're here to help you with your technology needs.</p>
                        </div>
                    </div>
                    <div className="row g-5">
                        {/* Contact Information */}
                        <div className="col-lg-5" data-aos="fade-right">
                            <div className="glass-card h-100 p-4 p-lg-5">
                                <h3 className="text-white mb-4">Contact Information</h3>
                                <p className="text-secondary mb-5">Feel free to reach out to us through any of the following channels:</p>

                                <div className="d-flex align-items-start mb-4">
                                    <div className="contact-icon flex-shrink-0 text-primary-c mt-1 fs-4">
                                        <FaEnvelope />
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="text-white mb-1">Email</h5>
                                        <a href="mailto:pulsarionitsolutions@gmail.com" className="text-secondary text-decoration-none hover-primary">pulsarionitsolutions@gmail.com</a>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start mb-4">
                                    <div className="contact-icon flex-shrink-0 text-primary-c mt-1 fs-4">
                                        <FaPhone />
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="text-white mb-1">Phone</h5>
                                        <a href="tel:+260777342846" className="d-block text-secondary text-decoration-none hover-primary mb-1">+260 777 342 846</a>
                                        <a href="tel:+260977889886" className="d-block text-secondary text-decoration-none hover-primary">+260 97 7889886</a>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start mb-4">
                                    <div className="contact-icon flex-shrink-0 text-primary-c mt-1 fs-4">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="text-white mb-1">Location</h5>
                                        <p className="text-secondary mb-0">Lusaka, Zambia</p>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h5 className="text-white mb-3">Connect With Us</h5>
                                    <div className="d-flex gap-2">
                                        {[<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />, <FaInstagram />].map((icon, i) => (
                                            <a key={i} href="#" className="social-icon d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px' }}>
                                                {icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-7" data-aos="fade-left">
                            <div className="glass-card p-4 p-lg-5">
                                <h3 className="text-white mb-4">Send Us a Message</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="name" className="text-secondary">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="email" className="text-secondary">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="phone" className="text-secondary">Phone Number</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="subject" className="text-secondary">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    placeholder="Message"
                                                    style={{ height: '150px' }}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                                <label htmlFor="message" className="text-secondary">Your Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="privacyPolicy"
                                                    checked={formData.privacyPolicy}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label className="form-check-label text-secondary small" htmlFor="privacyPolicy">
                                                    I agree with the <a href="#" className="text-primary-c">privacy policy</a> and terms of service.
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <button type="submit" className="btn btn-primary w-100 py-3">
                                                Send Message <FaPaperPlane className="ms-2" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section - Simplified to match theme */}
            <section className="p-0">
                <div style={{ height: '400px', filter: 'grayscale(100%) invert(90%)' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121976.9483644457!2d28.249005086409958!3d-15.416192725089626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b0b2ff9b093%3A0x1c959eb6d9be3c8a!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1621472700887!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Location Map"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
