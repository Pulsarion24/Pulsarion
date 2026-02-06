import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaGlobe, FaDatabase, FaCogs, FaShieldAlt, FaArrowRight, FaLightbulb, FaLock, FaCheckCircle, FaUsers, FaWhatsapp, FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiTypescript, SiMysql, SiFirebase } from 'react-icons/si';

const Home = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const bounceHover = {
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 }
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <header className="hero position-relative">
                {/* Abstract Background Elements */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 5, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="position-absolute top-0 end-0 opacity-10"
                    style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }}
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        x: [0, -20, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="position-absolute bottom-0 start-0 opacity-10"
                    style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }}
                />

                <div className="container h-100 d-flex flex-column justify-content-center position-relative z-1">
                    <div className="row">
                        <div className="col-lg-9">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.p variants={itemVariants} className="text-primary-c mb-3 lead fw-bold letter-spacing-1">
                                    Welcome to Pulsarion IT Solutions
                                </motion.p>
                                <motion.h1 variants={itemVariants} className="display-3 fw-bold text-white mb-4">
                                    Innovating the Future,<br />
                                    <span className="text-gradient animate-gradient">One Solution at a Time.</span>
                                </motion.h1>
                                <motion.p variants={itemVariants} className="lead text-light-c mb-5" style={{ maxWidth: '600px' }}>
                                    We deliver cutting-edge technology solutions that transform businesses, institutions, and startups across Zambia and beyond.
                                </motion.p>
                                <motion.div variants={itemVariants} className="d-flex flex-wrap gap-3">
                                    <Link to="/contact" className="btn btn-primary btn-lg group">
                                        Request a Consultation <FaArrowRight className="ms-2 d-inline-block transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <Link to="/services" className="btn btn-outline-light btn-lg">Our Services</Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Tech Stack Ticker */}
            <div className="py-4" style={{ background: 'rgba(2, 12, 27, 0.8)', borderBottom: '1px solid rgba(100,255,218,0.05)' }}>
                <div className="container overflow-hidden">
                    <p className="text-center text-muted small mb-3 letter-spacing-1 text-uppercase">Powering solutions with modern application stacks</p>
                    <div className="d-flex justify-content-center flex-wrap gap-5 text-secondary fs-2 opacity-50">
                        <motion.div whileHover={{ color: '#61DAFB', opacity: 1, y: -5 }}><FaReact title="React" /></motion.div>
                        <motion.div whileHover={{ color: '#68A063', opacity: 1, y: -5 }}><FaNodeJs title="Node.js" /></motion.div>
                        <motion.div whileHover={{ color: '#3776AB', opacity: 1, y: -5 }}><FaPython title="Python" /></motion.div>
                        <motion.div whileHover={{ color: '#02569B', opacity: 1, y: -5 }}><SiFlutter title="Flutter" /></motion.div>
                        <motion.div whileHover={{ color: '#3178C6', opacity: 1, y: -5 }}><SiTypescript title="TypeScript" /></motion.div>
                        <motion.div whileHover={{ color: '#FF9900', opacity: 1, y: -5 }}><FaAws title="AWS" /></motion.div>
                        <motion.div whileHover={{ color: '#2496ED', opacity: 1, y: -5 }}><FaDocker title="Docker" /></motion.div>
                        <motion.div whileHover={{ color: '#47A248', opacity: 1, y: -5 }}><SiMongodb title="MongoDB" /></motion.div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section id="services" className="section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="row mb-5"
                    >
                        <div className="col-lg-6 mx-auto text-center">
                            <h2 className="section-title text-center">Our Services</h2>
                            <p className="lead text-secondary">Comprehensive IT solutions tailored to meet your unique business challenges.</p>
                        </div>
                    </motion.div>
                    <div className="row g-4">
                        {[
                            { icon: <FaCode />, title: "Custom Software", desc: "Tailored solutions for unique workflows." },
                            { icon: <FaMobileAlt />, title: "Mobile Apps", desc: "Native & cross-platform mobile experiences." },
                            { icon: <FaGlobe />, title: "Web Development", desc: "Responsive, high-performance websites." },
                            { icon: <FaDatabase />, title: "Data Solutions", desc: "Secure database architecture & management." },
                            { icon: <FaCogs />, title: "IT Consultancy", desc: "Strategic advice for digital transformation." },
                            { icon: <FaShieldAlt />, title: "Cybersecurity", desc: "Protecting your assets from digital threats." },
                        ].map((service, idx) => (
                            <div key={idx} className="col-md-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="service-card glass-card h-100"
                                >
                                    <div className="service-icon floating">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <Link to="/services" className="btn btn-link p-0 text-decoration-none text-primary-c group">
                                        Learn More <FaArrowRight className="ms-2 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section with Grid Layout */}
            <section id="about" className="section-padding position-relative">
                <div className="position-absolute start-0 top-0 w-100 h-100 bg-primary opacity-05" style={{ zIndex: -1 }}></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="position-relative"
                            >
                                <div className="position-absolute top-0 start-0 w-100 h-100 border border-primary rounded" style={{ transform: 'translate(-20px, -20px)', zIndex: -1 }}></div>
                                <img src="/images/founder.jpg" alt="Pulsarion Team" className="img-fluid rounded shadow-lg w-100" />
                                <div className="position-absolute bottom-0 end-0 glass-card p-3 m-4 floating-delayed">
                                    <h4 className="h2 text-primary-c mb-0">5+</h4>
                                    <p className="small mb-0 text-white">Years Experience</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-7 ps-lg-5">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="section-title">Why Choose Pulsarion?</h2>
                                <p className="lead text-light-c mb-4">We combine technical expertise with a deep understanding of the African business landscape.</p>

                                <div className="row g-3">
                                    {[
                                        { title: "Innovation First", icon: <FaLightbulb />, desc: "Always exploring new technologies." },
                                        { title: "Security Focused", icon: <FaLock />, desc: "Security is baked into every line of code." },
                                        { title: "Client Centric", icon: <FaUsers />, desc: "Your success is our primary metric." },
                                        { title: "Reliable Support", icon: <FaCheckCircle />, desc: "We are with you long after deployment." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="col-md-6">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="d-flex p-3 rounded h-100"
                                                style={{ background: 'rgba(17,34,64,0.4)', border: '1px solid rgba(100,255,218,0.05)' }}
                                            >
                                                <div className="text-primary-c fs-3 me-3">{item.icon}</div>
                                                <div>
                                                    <h5 className="text-white h6 mb-1">{item.title}</h5>
                                                    <p className="small text-secondary mb-0">{item.desc}</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/about" className="btn btn-primary mt-4">More About Us</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects with Parallax-like cards */}
            <section id="projects" className="section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="row mb-5"
                    >
                        <div className="col-lg-6 mx-auto text-center">
                            <h2 className="section-title text-center">Featured Work</h2>
                            <p className="lead text-secondary">Solutions that make a difference.</p>
                        </div>
                    </motion.div>
                    <div className="row g-4">
                        {[
                            { title: "EduClear", cat: "Education", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644" },
                            { title: "AgriCool Link", cat: "Agriculture", img: "https://images.unsplash.com/photo-1592982573332-d502e22e3752" },
                            { title: "HealthTrack", cat: "Healthcare", img: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8" }
                        ].map((project, idx) => (
                            <div key={idx} className="col-md-4">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="portfolio-item position-relative rounded overflow-hidden shadow-lg h-100 group"
                                >
                                    <img src={`${project.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} alt={project.title} className="img-fluid w-100 h-100" style={{ objectFit: 'cover', minHeight: '300px' }} />
                                    <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(to top, rgba(10,25,47,0.95), transparent)' }}>
                                        <span className="text-primary-c small fw-bold text-uppercase badge bg-primary bg-opacity-10 mb-2">{project.cat}</span>
                                        <h4 className="text-white mb-0">{project.title}</h4>
                                    </div>
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/portfolio" className="btn btn-outline-light">Explore Full Portfolio</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="section-padding text-center position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(45deg, rgba(10,25,47,0.9), rgba(17,34,64,0.95))', zIndex: 1 }}></div>
                <img src="/images/hero-bg.jpg" alt="bg" className="position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover' }} />

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-4 display-5 fw-bold text-white">Ready to Transform Your Business?</h2>
                        <p className="lead text-light-c mb-5">Contact us today to discuss how our solutions can help you achieve your business goals.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <motion.div whileHover={bounceHover}>
                                <Link to="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
                            </motion.div>
                            <motion.div whileHover={bounceHover}>
                                <a href="https://wa.me/260777342846" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
                                    <FaWhatsapp className="me-2" /> WhatsApp
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
