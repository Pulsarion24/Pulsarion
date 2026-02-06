import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobileAlt, FaGlobe, FaDatabase, FaCogs, FaShieldAlt, FaQuestionCircle } from 'react-icons/fa';

const Services = () => {
    return (
        <div>
            {/* Page Header */}
            <header className="page-header position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover" }}></div>
                <div className="container position-relative z-1 text-center">
                    <h1 className="display-4 fw-bold text-white mb-3">Our Services</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active text-primary-c" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </header>

            {/* Services List */}
            <section id="services-list" className="section-padding">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-title text-center">Comprehensive IT Solutions</h2>
                            <p className="lead text-secondary">We deliver end-to-end technology services designed to help your business grow and succeed in the digital era.</p>
                        </div>
                    </div>

                    {[
                        {
                            id: "software",
                            icon: <FaCode />,
                            title: "Custom Software Development",
                            desc: "We develop tailored software solutions that address your unique business challenges. From enterprise resource planning (ERP) systems to workflow automation tools, we build software that fits your specific needs.",
                            features: ["Requirement Analysis", "System Architecture Design", "Full-Stack Development", "QA & Testing"]
                        },
                        {
                            id: "mobile",
                            icon: <FaMobileAlt />,
                            title: "Mobile App Development",
                            desc: "Reach your customers wherever they are with intuitive, high-performance mobile applications. We build native and cross-platform apps that deliver seamless user experiences.",
                            features: ["iOS & Android Development", "UI/UX Design", "Cross-Platform (Flutter/React Native)", "App Store Optimization"]
                        },
                        {
                            id: "web",
                            icon: <FaGlobe />,
                            title: "Web Development",
                            desc: "Your website is your digital storefront. We create stunning, responsive, and user-friendly websites and web applications that engage visitors and convert them into customers.",
                            features: ["Corporate Websites", "E-commerce Platforms", "Web Portals", "CMS Development"]
                        },
                        {
                            id: "database",
                            icon: <FaDatabase />,
                            title: "Database Management",
                            desc: "Data is your most valuable asset. We design, implement, and manage robust database solutions that ensure your data is secure, accessible, and optimized for performance.",
                            features: ["Database Design", "Data Migration", "Performance Tuning", "Backup & Recovery"]
                        }
                    ].map((service, index) => (
                        <div key={index} id={service.id} className="row align-items-center mb-5 gx-5" data-aos="fade-up">
                            <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                                <div className="glass-card h-100 p-4 p-md-5">
                                    <div className="service-icon display-4 mb-4">{service.icon}</div>
                                    <h3 className="text-white mb-3">{service.title}</h3>
                                    <p className="text-secondary mb-4">{service.desc}</p>
                                    <ul className="list-unstyled">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="mb-2 d-flex align-items-center text-light-c">
                                                <span className="text-primary-c me-2">▹</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-1' : ''} mt-4 mt-lg-0`}>
                                {/* Placeholder for illustrative image/graphic - could be a code snippet or abstract graphic */}
                                <div className="p-4 rounded border border-dark position-relative overflow-hidden" style={{ background: 'var(--bg-card)', minHeight: '300px' }}>
                                    <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
                                        <div className="text-muted opacity-25" style={{ fontSize: '8rem' }}>{service.icon}</div>
                                    </div>
                                    <div className="position-relative z-1">
                                        <h4 className="text-light-c opacity-50">.Solution &#123;</h4>
                                        <div className="ps-4 text-primary-c opacity-75">
                                            <p className="mb-0">type: "{service.title}";</p>
                                            <p className="mb-0">status: "Ready to Deploy";</p>
                                            <p className="mb-0">efficiency: 100%;</p>
                                        </div>
                                        <h4 className="text-light-c opacity-50">&#125;</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Development Process */}
            <section className="section-padding" style={{ background: 'var(--bg-card)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-title text-center">Our Development Process</h2>
                            <p className="lead text-secondary">We follow a proven agile methodology to ensure your project is delivered on time, within budget, and to the highest standards.</p>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                            { step: "01", title: "Discovery", desc: "We gather requirements and understand your business goals." },
                            { step: "02", title: "Design", desc: "We create wireframes and prototypes to visualize the solution." },
                            { step: "03", title: "Develop", desc: "Our engineers write clean, scalable code to build your product." },
                            { step: "04", title: "Test", desc: "Rigorous testing ensures functionality, security, and performance." },
                            { step: "05", title: "Deploy", desc: "We launch your solution and provide ongoing support." }
                        ].map((phase, idx) => (
                            <div key={idx} className="col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="text-center position-relative">
                                    <div className="display-4 fw-bold text-dark opacity-25 position-absolute top-0 start-50 translate-middle-x" style={{ zIndex: 0 }}>{phase.step}</div>
                                    <div className="position-relative z-1 pt-4">
                                        <div className="bg-primary rounded-circle mx-auto mb-3" style={{ width: '10px', height: '10px' }}></div>
                                        <h5 className="text-white">{phase.title}</h5>
                                        <p className="small text-secondary">{phase.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6 mx-auto text-center">
                            <h2 className="section-title text-center">Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="faqAccordion">
                                {[
                                    { q: "How long does it take to develop a website?", a: "The timeline depends on the complexity of the project. A standard corporate website typically takes 2-4 weeks, while more complex web applications can take 8-12 weeks or more." },
                                    { q: "Do you provide maintenance after the project is completed?", a: "Yes, we offer ongoing maintenance and support packages to ensure your software remains secure, up-to-date, and performs optimally." },
                                    { q: "What technologies do you use?", a: "We use a wide range of modern technologies including React, Node.js, Python, PHP/Laravel, Flutter for mobile, and various cloud platforms like AWS and Google Cloud." }
                                ].map((item, idx) => (
                                    <div key={idx} className="accordion-item mb-3 border-0 bg-transparent">
                                        <h2 className="accordion-header" id={`heading${idx}`}>
                                            <button className="accordion-button collapsed glass-card text-light-c shadow-none" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded="false" aria-controls={`collapse${idx}`}>
                                                <FaQuestionCircle className="me-3 text-primary-c" /> {item.q}
                                            </button>
                                        </h2>
                                        <div id={`collapse${idx}`} className="accordion-collapse collapse" aria-labelledby={`heading${idx}`} data-bs-parent="#faqAccordion">
                                            <div className="accordion-body text-secondary ps-5 border-start border-primary ms-3 mt-2">
                                                {item.a}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
