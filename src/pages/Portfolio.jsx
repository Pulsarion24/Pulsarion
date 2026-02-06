import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const projects = [
        {
            id: 1,
            category: 'education',
            title: 'EduClear',
            description: 'School management system.',
            tech: ['PHP', 'MySQL', 'JS'],
            img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            modalId: 'projectModal1'
        },
        {
            id: 2,
            category: 'agriculture',
            title: 'AgriCool Link',
            description: 'Farmer marketplace platform.',
            tech: ['React', 'Node.js', 'Mongo'],
            img: 'https://images.unsplash.com/photo-1592982573332-d502e22e3752?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            modalId: 'projectModal2'
        },
        {
            id: 3,
            category: 'healthcare',
            title: 'HealthTrack',
            description: 'Clinical patient management.',
            tech: ['Angular', 'Firebase'],
            img: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            modalId: 'projectModal3'
        },
        {
            id: 4,
            category: 'ecommerce',
            title: 'ShopEasy',
            description: 'Retail e-commerce solution.',
            tech: ['Laravel', 'Vue.js'],
            img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            modalId: 'projectModal4'
        },
        {
            id: 5,
            category: 'mobile',
            title: 'TaskMaster',
            description: 'Productivity mobile app.',
            tech: ['React Native', 'Firebase'],
            img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            modalId: 'projectModal5'
        },
        {
            id: 6,
            category: 'mobile',
            title: 'FinTrack',
            description: 'Personal finance tracker.',
            tech: ['Flutter', 'Dart'],
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            modalId: 'projectModal6'
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div>
            {/* Page Header */}
            <header className="page-header position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.95)), url('https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover" }}></div>
                <div className="container position-relative z-1 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="display-4 fw-bold text-white mb-3"
                    >
                        Our Portfolio
                    </motion.h1>
                </div>
            </header>

            {/* Portfolio Section */}
            <section id="portfolio" className="section-padding">
                <div className="container">

                    {/* Filter Tabs */}
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <motion.div
                                className="d-inline-flex flex-wrap justify-content-center gap-2 p-2 rounded glass-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                {['all', 'education', 'agriculture', 'healthcare', 'ecommerce', 'mobile'].map((cat) => (
                                    <motion.button
                                        key={cat}
                                        onClick={() => handleFilterChange(cat)}
                                        className={`btn btn-sm text-capitalize ${filter === cat ? 'btn-primary' : 'text-secondary hover-text-white'}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{ minWidth: '80px', border: filter === cat ? null : 'none', background: filter === cat ? null : 'transparent' }}
                                    >
                                        {cat.replace('mobile', 'Mobile')}
                                    </motion.button>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Animated Grid */}
                    <motion.div
                        layout
                        className="row g-4"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.id}
                                    className="col-md-6 col-lg-4"
                                >
                                    <div className="portfolio-card h-100 d-flex flex-column glass-card p-0 overflow-hidden border-0 group">
                                        <div className="portfolio-img position-relative overflow-hidden" style={{ height: '240px' }}>
                                            <img src={project.img} alt={project.title} className="img-fluid w-100 h-100 transition-transform duration-500 group-hover:scale-110" style={{ objectFit: 'cover' }} />
                                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="btn btn-outline-primary rounded-circle p-3" data-bs-toggle="modal" data-bs-target={`#${project.modalId}`}>
                                                    <FaExternalLinkAlt />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="portfolio-content flex-grow-1 p-4">
                                            <span className="text-primary-c small text-uppercase fw-bold">{project.category}</span>
                                            <h3 className="h4 text-white mt-2 mb-2">{project.title}</h3>
                                            <p className="text-secondary small mb-3">{project.description}</p>
                                            <div className="technologies mt-auto">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="badge border border-secondary text-secondary me-2 mb-2 fw-normal bg-transparent">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Modals are kept static as they rely on Bootstrap's JS which controls visibility directly */}
            {projects.map(project => (
                <div key={project.id} className="modal fade" id={project.modalId} tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content border-0 text-white" style={{ background: '#112240' }}>
                            <div className="modal-header border-bottom border-secondary">
                                <h5 className="modal-title text-primary-c">{project.title}</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-4">
                                <img src={project.img} alt={project.title} className="img-fluid rounded w-100 mb-4" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                                <p className="text-secondary">{project.description} This project demonstrates our capability to deliver robust solutions.</p>
                                <div className="mt-3">
                                    <h6 className="text-white">Tech Stack:</h6>
                                    {project.tech.map((t, i) => <span key={i} className="badge bg-primary me-2">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
