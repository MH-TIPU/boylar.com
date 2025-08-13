@extends('layouts.app')

@section('title', 'Our Services - Boylar')
@section('description', 'Comprehensive IT services including software development, web applications, mobile apps, cloud solutions, and digital transformation.')

@section('content')
<!-- Enhanced Services Hero Section -->
<section class="hero-section">
    <div class="hero-background"></div>
    <div class="hero-grid"></div>
    <div class="hero-floating-elements">
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
        <div class="floating-shape"></div>
    </div>
    
    <div class="container">
        <div class="row align-items-center" style="min-height: 30vh; padding: 3rem 0;">
            <div class="col-lg-8 mx-auto text-center hero-content">
                <h1 class="hero-title floating">
                    Our <span class="text-gradient">Services</span>
                </h1>
                <p class="hero-subtitle">
                    Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.
                </p>
                <div class="hero-meta">
                    <div class="meta-badge">
                        <i class="fas fa-rocket me-2"></i>
                        <strong>Fast Delivery</strong>
                    </div>
                    <div class="meta-badge">
                        <i class="fas fa-award me-2"></i>
                        <strong>Premium Quality</strong>
                    </div>
                    <div class="meta-badge">
                        <i class="fas fa-headset me-2"></i>
                        <strong>24/7 Support</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Enhanced Scroll Indicator -->
    <div class="scroll-indicator">
        <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
        </div>
        <span>Explore Services</span>
        <div class="scroll-arrow">
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
</section>

<!-- Services Overview Section -->
<section class="section">
    <div class="container">
        <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center">
                <h2 class="section-title">What We Do Best</h2>
                <p class="section-subtitle">We specialize in cutting-edge technology solutions that drive business growth and digital innovation. Our expert team delivers exceptional results across multiple domains.</p>
            </div>
        </div>

        <div class="row g-4">
            <!-- Software Development -->
            <div class="col-lg-6">
                <div class="service-card h-100">
                    <div class="service-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3 class="service-title">Custom Software Development</h3>
                    <p class="service-description">We create bespoke software solutions tailored to your specific business needs, using cutting-edge technologies and industry best practices.</p>
                    <ul class="service-features">
                        <li><i class="fas fa-check"></i> Full-stack web applications</li>
                        <li><i class="fas fa-check"></i> Enterprise software solutions</li>
                        <li><i class="fas fa-check"></i> API development & integration</li>
                        <li><i class="fas fa-check"></i> Database design & optimization</li>
                    </ul>
                    <div class="service-tech">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Laravel</span>
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">Python</span>
                    </div>
                </div>
            </div>

            <!-- Mobile Development -->
            <div class="col-lg-6">
                <div class="service-card h-100">
                    <div class="service-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3 class="service-title">Mobile App Development</h3>
                    <p class="service-description">Build powerful, user-friendly mobile applications for iOS and Android platforms that engage users and drive business growth.</p>
                    <ul class="service-features">
                        <li><i class="fas fa-check"></i> Native iOS & Android apps</li>
                        <li><i class="fas fa-check"></i> Cross-platform solutions</li>
                        <li><i class="fas fa-check"></i> UI/UX design optimization</li>
                        <li><i class="fas fa-check"></i> App store deployment</li>
                    </ul>
                    <div class="service-tech">
                        <span class="tech-tag">React Native</span>
                        <span class="tech-tag">Flutter</span>
                        <span class="tech-tag">Swift</span>
                        <span class="tech-tag">Kotlin</span>
                    </div>
                </div>
            </div>

            <!-- Cloud Solutions -->
            <div class="col-lg-6">
                <div class="service-card h-100">
                    <div class="service-icon">
                        <i class="fas fa-cloud"></i>
                    </div>
                    <h3 class="service-title">Cloud Solutions & Migration</h3>
                    <p class="service-description">Modernize your infrastructure with scalable cloud solutions that improve performance, reduce costs, and enhance security.</p>
                    <ul class="service-features">
                        <li><i class="fas fa-check"></i> Cloud migration strategy</li>
                        <li><i class="fas fa-check"></i> Infrastructure as Code</li>
                        <li><i class="fas fa-check"></i> Auto-scaling solutions</li>
                        <li><i class="fas fa-check"></i> DevOps implementation</li>
                    </ul>
                    <div class="service-tech">
                        <span class="tech-tag">AWS</span>
                        <span class="tech-tag">Azure</span>
                        <span class="tech-tag">Docker</span>
                        <span class="tech-tag">Kubernetes</span>
                    </div>
                </div>
            </div>

            <!-- Cybersecurity -->
            <div class="col-lg-6">
                <div class="service-card h-100">
                    <div class="service-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 class="service-title">Cybersecurity Services</h3>
                    <p class="service-description">Protect your digital assets with comprehensive security solutions that safeguard against modern cyber threats.</p>
                    <ul class="service-features">
                        <li><i class="fas fa-check"></i> Security audits & assessments</li>
                        <li><i class="fas fa-check"></i> Penetration testing</li>
                        <li><i class="fas fa-check"></i> Security monitoring</li>
                        <li><i class="fas fa-check"></i> Compliance management</li>
                    </ul>
                    <div class="service-tech">
                        <span class="tech-tag">OWASP</span>
                        <span class="tech-tag">ISO 27001</span>
                        <span class="tech-tag">GDPR</span>
                        <span class="tech-tag">SOC 2</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Process Section -->
<section class="section bg-light">
    <div class="container">
        <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center">
                <h2 class="section-title">Our Development Process</h2>
                <p class="section-subtitle">We follow a proven methodology that ensures quality delivery, transparent communication, and successful project outcomes.</p>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-3 col-md-6">
                <div class="process-step">
                    <div class="process-number">01</div>
                    <div class="process-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h4 class="process-title">Discovery & Planning</h4>
                    <p class="process-description">We analyze your requirements, define project scope, and create a detailed roadmap for success.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="process-step">
                    <div class="process-number">02</div>
                    <div class="process-icon">
                        <i class="fas fa-pencil-ruler"></i>
                    </div>
                    <h4 class="process-title">Design & Architecture</h4>
                    <p class="process-description">Our team creates intuitive designs and robust system architecture tailored to your needs.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="process-step">
                    <div class="process-number">03</div>
                    <div class="process-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h4 class="process-title">Development & Testing</h4>
                    <p class="process-description">We build your solution using agile methodologies with continuous testing and quality assurance.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="process-step">
                    <div class="process-number">04</div>
                    <div class="process-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h4 class="process-title">Launch & Support</h4>
                    <p class="process-description">We deploy your solution and provide ongoing support to ensure optimal performance.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h2 class="section-title text-start">Why Choose Boylar?</h2>
                <p class="section-subtitle text-start">We combine technical expertise with business understanding to deliver solutions that truly make a difference.</p>
                
                <div class="feature-list">
                    <div class="feature-item">
                        <div class="feature-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <div class="feature-content">
                            <h5>Lightning Fast Development</h5>
                            <p>Our streamlined processes and experienced team ensure rapid delivery without compromising quality.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="feature-content">
                            <h5>Expert Team</h5>
                            <p>Work with seasoned professionals who have deep expertise across multiple technology stacks.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            <i class="fas fa-handshake"></i>
                        </div>
                        <div class="feature-content">
                            <h5>Partnership Approach</h5>
                            <p>We're not just vendors – we're your technology partners committed to your long-term success.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">100+</div>
                        <div class="stat-label">Projects Completed</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">98%</div>
                        <div class="stat-label">Client Satisfaction</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">5+</div>
                        <div class="stat-label">Years Experience</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">24/7</div>
                        <div class="stat-label">Support Available</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section bg-light">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-lg-10">
                <div class="card-custom p-5">
                    <div class="mb-4">
                        <span class="badge bg-primary text-white px-3 py-2">
                            <i class="fas fa-rocket me-2"></i>Ready to Get Started?
                        </span>
                    </div>
                    
                    <h2 class="fw-bold mb-4">
                        Let's Build Something <span class="text-primary">Amazing</span> Together
                    </h2>
                    
                    <p class="lead text-muted mb-5">
                        Ready to transform your ideas into powerful digital solutions? Get in touch with us today for a free consultation and discover how we can accelerate your business growth.
                    </p>
                    
                    <div class="d-flex flex-wrap justify-content-center gap-3 mb-5">
                        <a href="{{ route('contact') }}" class="btn-primary-custom">
                            <i class="fas fa-rocket me-2"></i>Start Your Project
                        </a>
                        <a href="{{ route('portfolio') }}" class="btn btn-outline-primary">
                            <i class="fas fa-briefcase me-2"></i>View Our Work
                        </a>
                    </div>
                    
                    <div class="row text-center">
                        <div class="col-md-3 col-6 mb-3">
                            <div class="d-flex flex-column align-items-center">
                                <i class="fas fa-clock text-primary fs-4 mb-2"></i>
                                <span class="small text-muted">Fast Delivery</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 mb-3">
                            <div class="d-flex flex-column align-items-center">
                                <i class="fas fa-award text-primary fs-4 mb-2"></i>
                                <span class="small text-muted">Premium Quality</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 mb-3">
                            <div class="d-flex flex-column align-items-center">
                                <i class="fas fa-headset text-primary fs-4 mb-2"></i>
                                <span class="small text-muted">24/7 Support</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 mb-3">
                            <div class="d-flex flex-column align-items-center">
                                <i class="fas fa-lock text-primary fs-4 mb-2"></i>
                                <span class="small text-muted">Secure & Safe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
