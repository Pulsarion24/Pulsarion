import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaLock, FaCheckCircle, FaUsers, FaHandshake, FaRocket } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            {/* Page Header */}
            <header className="page-header position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover" }}></div>
                <div className="container position-relative z-1 text-center">
                    <h1 className="display-4 fw-bold text-white mb-3">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active text-primary-c" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </header>

            {/* Company Overview */}
            <section id="overview" className="section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                            <div className="position-relative">
                                <div className="position-absolute bottom-0 end-0 w-100 h-100 bg-primary opacity-10 rounded" style={{ transform: 'translate(15px, 15px)', zIndex: -1 }}></div>
                                <img src="/images/founder.jpg" alt="Pulsarion Team" className="img-fluid rounded shadow w-100" style={{ border: '1px solid rgba(100,255,218,0.2)' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
                            <h2 className="section-title">Who We Are</h2>
                            <p className="lead text-light-c">Pulsarion IT Solutions Limited is a leading technology company based in Zambia, dedicated to providing innovative IT solutions.</p>
                            <p className="text-secondary">Founded with a vision to transform businesses through technology, we have grown to become a trusted partner for organizations seeking reliable, secure, and efficient digital solutions.</p>
                            <p className="text-secondary">Our team of skilled professionals combines technical expertise with industry knowledge to deliver solutions that address specific business challenges and drive growth.</p>

                            <div className="row mt-4">
                                <div className="col-sm-6 mb-4">
                                    <div className="glass-card h-100 p-3 text-center">
                                        <h3 className="text-primary-c display-5 fw-bold mb-0">50+</h3>
                                        <p className="small text-secondary mb-0">Projects Completed</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="glass-card h-100 p-3 text-center">
                                        <h3 className="text-primary-c display-5 fw-bold mb-0">98%</h3>
                                        <p className="small text-secondary mb-0">Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission-vision" className="section-padding" style={{ background: 'var(--bg-card)' }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6" data-aos="fade-up">
                            <div className="p-5 border border-dark rounded h-100" style={{ background: 'linear-gradient(135deg, rgba(17,34,64,1) 0%, rgba(10,25,47,1) 100%)' }}>
                                <div className="text-primary-c fs-1 mb-3"><FaRocket /></div>
                                <h3 className="text-white">Our Mission</h3>
                                <p className="text-secondary mb-0">To empower businesses and institutions with innovative, reliable, and secure technology solutions that drive efficiency, growth, and digital transformation in Zambia and beyond.</p>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="p-5 border border-dark rounded h-100" style={{ background: 'linear-gradient(135deg, rgba(17,34,64,1) 0%, rgba(10,25,47,1) 100%)' }}>
                                <div className="text-primary-c fs-1 mb-3"><FaLightbulb /></div>
                                <h3 className="text-white">Our Vision</h3>
                                <p className="text-secondary mb-0">To be the premier provider of cutting-edge IT solutions in the region, recognized for our technical excellence, customer-centric approach, and contribution to the digital ecosystem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section id="values" className="section-padding">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6 mx-auto text-center">
                            <h2 className="section-title text-center">Our Core Values</h2>
                            <p className="lead text-secondary">These principles guide our actions and define our culture.</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: <FaLightbulb />, title: "Innovation", desc: "We constantly seek new and better ways to solve problems and deliver value." },
                            { icon: <FaCheckCircle />, title: "Excellence", desc: "We are committed to delivering the highest quality in everything we do." },
                            { icon: <FaLock />, title: "Integrity", desc: "We conduct our business with honesty, transparency, and ethical standards." },
                            { icon: <FaUsers />, title: "Collaboration", desc: "We believe in the power of teamwork and working closely with our clients." }
                        ].map((value, idx) => (
                            <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="glass-card text-center h-100">
                                    <div className="text-primary-c fs-2 mb-3">{value.icon}</div>
                                    <h4 className="h5 text-white">{value.title}</h4>
                                    <p className="small text-secondary mb-0">{value.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center" style={{ background: 'linear-gradient(rgba(10,25,47,0.9), rgba(10,25,47,0.8)), url("/images/hero-bg.jpg") center/cover fixed' }}>
                <div className="container">
                    <h2 className="text-white mb-4">Want to Join Our Team?</h2>
                    <p className="lead text-light-c mb-4">We are always looking for talented individuals to join us.</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
            </section>
        </div>
    );
};

export default About;
