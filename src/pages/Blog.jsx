import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowRight, FaCalendarAlt, FaTag } from 'react-icons/fa';

const Blog = () => {
    return (
        <div>
            {/* Page Header */}
            <header className="page-header position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover" }}></div>
                <div className="container position-relative z-1 text-center">
                    <h1 className="display-4 fw-bold text-white mb-3">Blog & Insights</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active text-primary-c" aria-current="page">Blog</li>
                        </ol>
                    </nav>
                </div>
            </header>

            {/* Blog Section */}
            <section id="blog-main" className="section-padding">
                <div className="container">
                    <div className="row g-5">
                        {/* Main Content */}
                        <div className="col-lg-8">
                            {/* Featured Article */}
                            <div className="glass-card p-0 overflow-hidden mb-5" data-aos="fade-up">
                                <div className="blog-img position-relative" style={{ height: '400px' }}>
                                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" alt="Digital Transformation" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                                    <div className="position-absolute bottom-0 start-0 bg-primary text-dark fw-bold px-3 py-1 m-3 rounded">
                                        Featured
                                    </div>
                                </div>
                                <div className="p-4 p-md-5">
                                    <div className="blog-meta mb-2 d-flex align-items-center">
                                        <FaTag className="me-2" /> <span>Digital Transformation</span>
                                        <span className="mx-2">•</span>
                                        <FaCalendarAlt className="me-2" /> <span>May 18, 2025</span>
                                    </div>
                                    <h2 className="blog-title h3 text-white mb-3">The Future of Digital Transformation in Zambia: Opportunities and Challenges</h2>
                                    <p className="blog-excerpt text-secondary mb-4">As Zambia continues to embrace digital technologies, businesses and organizations are faced with both unprecedented opportunities and unique challenges. This comprehensive article explores the current state of digital transformation...</p>
                                    <Link to="#" className="btn btn-primary">Read Full Article</Link>
                                </div>
                            </div>

                            {/* Blog Articles Grid */}
                            <div className="row g-4">
                                {[
                                    { title: "Essential Cybersecurity Practices", cat: "Cybersecurity", date: "May 15, 2025", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" },
                                    { title: "Digital Strategies for Businesses", cat: "Business", date: "May 8, 2025", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" },
                                    { title: "Blockchain Beyond Bitcoin", cat: "Technology", date: "April 30, 2025", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" },
                                    { title: "Mobile-First Africa", cat: "Mobile", date: "April 22, 2025", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" },
                                    { title: "AI for Small Business", cat: "AI", date: "April 15, 2025", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" },
                                    { title: "Cloud Computing Solutions", cat: "Cloud", date: "April 8, 2025", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" }
                                ].map((post, index) => (
                                    <div key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={index * 50}>
                                        <div className="blog-card h-100 d-flex flex-column glass-card p-0 overflow-hidden">
                                            <div className="blog-img" style={{ height: '200px' }}>
                                                <img src={post.img} alt={post.title} className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div className="blog-content p-4 flex-grow-1">
                                                <div className="blog-meta mb-2 small">
                                                    <span className="text-primary-c">{post.cat}</span> • <span className="text-secondary">{post.date}</span>
                                                </div>
                                                <h3 className="blog-title h5 text-white mb-3">{post.title}</h3>
                                                <Link to="#" className="btn btn-link p-0 text-decoration-none text-light-c hover-primary mt-auto">Read More <FaArrowRight className="ms-1" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <nav aria-label="Blog pagination" className="mt-5">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item"><Link className="page-link bg-transparent text-secondary border-secondary" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link bg-transparent text-secondary border-secondary" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link bg-transparent text-secondary border-secondary" to="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link bg-transparent text-secondary border-secondary" to="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            {/* Search */}
                            <div className="glass-card p-4 mb-4" data-aos="fade-left">
                                <h4 className="sidebar-title h5 text-white mb-3">Search</h4>
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-transparent text-white border-secondary" placeholder="Search..." />
                                        <button className="btn btn-outline-light" type="submit"><FaSearch /></button>
                                    </div>
                                </form>
                            </div>

                            {/* Categories */}
                            <div className="glass-card p-4 mb-4" data-aos="fade-left" data-aos-delay="100">
                                <h4 className="sidebar-title h5 text-white mb-3">Categories</h4>
                                <ul className="list-unstyled mb-0">
                                    {[
                                        { name: "Cybersecurity", count: 5 },
                                        { name: "Digital Transformation", count: 8 },
                                        { name: "Blockchain", count: 3 },
                                        { name: "Startup Tech", count: 6 },
                                        { name: "Mobile Dev", count: 4 },
                                        { name: "AI & ML", count: 7 },
                                        { name: "Cloud Computing", count: 5 }
                                    ].map((cat, idx) => (
                                        <li key={idx} className="mb-2">
                                            <Link to="#" className="d-flex justify-content-between text-secondary text-decoration-none hover-primary">
                                                <span>{cat.name}</span>
                                                <span className="badge bg-secondary opacity-50 rounded-pill">{cat.count}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter */}
                            <div className="glass-card p-4" data-aos="fade-left" data-aos-delay="200">
                                <h4 className="sidebar-title h5 text-white mb-3">Newsletter</h4>
                                <p className="text-secondary small mb-3">Subscribe to our newsletter for the latest technology insights.</p>
                                <form>
                                    <div className="mb-3">
                                        <input type="email" className="form-control bg-transparent text-white border-secondary" placeholder="Email address" />
                                    </div>
                                    <button className="btn btn-primary w-100" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
