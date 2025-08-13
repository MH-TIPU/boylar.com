@extends('layouts.app')

@section('title', 'About Us - Boylar')
@section('description', 'Learn about Boylar, our mission, team, and commitment to delivering exceptional IT solutions.')

@section('content')
<!-- Enhanced About Hero Section -->
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
        <div class="row align-items-center" style="min-height: 80vh;">
            <div class="col-lg-8 mx-auto text-center hero-content">
                <h1 class="hero-title floating">
                    About <span class="text-gradient">Boylar</span>
                </h1>
                <p class="hero-subtitle">
                    We are passionate software engineers dedicated to transforming ideas into powerful digital solutions that drive business success.
                </p>
                <div class="hero-meta">
                    <div class="meta-badge">
                        <i class="fas fa-users me-2"></i>
                        <strong>Expert Team</strong>
                    </div>
                    <div class="meta-badge">
                        <i class="fas fa-lightbulb me-2"></i>
                        <strong>Innovation Driven</strong>
                    </div>
                    <div class="meta-badge">
                        <i class="fas fa-heart me-2"></i>
                        <strong>Client Focused</strong>
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
        <span>Our Story</span>
        <div class="scroll-arrow">
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
</section>

<!-- Story Section -->
<section class="section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h2 class="section-title text-start">Our Story</h2>
                <p class="mb-4">Founded with a vision to bridge the gap between technology and business success, Boylar emerged from a simple belief: every great idea deserves exceptional execution.</p>
                <p class="mb-4">As a software engineer with years of experience in the industry, I've seen firsthand how the right technology solutions can transform businesses. That's why I founded Boylar - to help entrepreneurs and companies turn their visions into reality through innovative software development.</p>
                <p>We're not just another IT company. We're your technology partners, committed to understanding your unique challenges and crafting solutions that exceed your expectations.</p>
            </div>
            <div class="col-lg-6">
                <div class="text-center">
                    <i class="fas fa-lightbulb" style="font-size: 12rem; color: var(--primary-color); opacity: 0.1;"></i>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Mission & Vision -->
<section class="section bg-light">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-6">
                <div class="card card-custom p-5 h-100">
                    <div class="card-icon mx-auto mb-4">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3 class="text-center mb-4">Our Mission</h3>
                    <p class="text-center text-muted">To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation. We are committed to delivering exceptional software that solves real-world problems.</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card card-custom p-5 h-100">
                    <div class="card-icon mx-auto mb-4">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3 class="text-center mb-4">Our Vision</h3>
                    <p class="text-center text-muted">To be the leading IT company known for excellence in software development, where cutting-edge technology meets exceptional customer service, creating lasting partnerships that fuel business success.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Values -->
<section class="section">
    <div class="container">
        <h2 class="section-title">Our Values</h2>
        <p class="section-subtitle">The principles that guide everything we do</p>
        
        <div class="row g-4">
            <div class="col-lg-3 col-md-6">
                <div class="card card-custom p-4 text-center h-100">
                    <div class="card-icon mx-auto">
                        <i class="fas fa-star"></i>
                    </div>
                    <h5>Excellence</h5>
                    <p class="text-muted small">We strive for perfection in every line of code and every client interaction.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card card-custom p-4 text-center h-100">
                    <div class="card-icon mx-auto">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h5>Innovation</h5>
                    <p class="text-muted small">We embrace new technologies and creative solutions to solve complex challenges.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card card-custom p-4 text-center h-100">
                    <div class="card-icon mx-auto">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h5>Integrity</h5>
                    <p class="text-muted small">We build trust through transparency, honesty, and ethical business practices.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card card-custom p-4 text-center h-100">
                    <div class="card-icon mx-auto">
                        <i class="fas fa-users"></i>
                    </div>
                    <h5>Collaboration</h5>
                    <p class="text-muted small">We work closely with our clients as partners in their digital transformation journey.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Expertise -->
<section class="section bg-light">
    <div class="container">
        <h2 class="section-title">Our Expertise</h2>
        <p class="section-subtitle">Technologies and skills that power our solutions</p>
        
        <div class="row g-4">
            <div class="col-lg-4 col-md-6">
                <div class="card card-custom p-4">
                    <h5><i class="fas fa-code text-primary me-2"></i>Programming Languages</h5>
                    <p class="text-muted mb-3">Proficiency in modern programming languages</p>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-primary">PHP</span>
                        <span class="badge bg-primary">JavaScript</span>
                        <span class="badge bg-primary">Python</span>
                        <span class="badge bg-primary">TypeScript</span>
                        <span class="badge bg-primary">Java</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card card-custom p-4">
                    <h5><i class="fas fa-layer-group text-primary me-2"></i>Frameworks</h5>
                    <p class="text-muted mb-3">Modern frameworks for rapid development</p>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-primary">Laravel</span>
                        <span class="badge bg-primary">React</span>
                        <span class="badge bg-primary">Vue.js</span>
                        <span class="badge bg-primary">Node.js</span>
                        <span class="badge bg-primary">Next.js</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card card-custom p-4">
                    <h5><i class="fas fa-database text-primary me-2"></i>Databases</h5>
                    <p class="text-muted mb-3">Robust data management solutions</p>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-primary">MySQL</span>
                        <span class="badge bg-primary">PostgreSQL</span>
                        <span class="badge bg-primary">MongoDB</span>
                        <span class="badge bg-primary">Redis</span>
                        <span class="badge bg-primary">SQLite</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card card-custom p-4">
                    <h5><i class="fas fa-cloud text-primary me-2"></i>Cloud Platforms</h5>
                    <p class="text-muted mb-3">Scalable cloud infrastructure</p>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-primary">AWS</span>
                        <span class="badge bg-primary">Google Cloud</span>
                        <span class="badge bg-primary">Microsoft Azure</span>
                        <span class="badge bg-primary">DigitalOcean</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card card-custom p-4">
                    <h5><i class="fas fa-tools text-primary me-2"></i>Development Tools</h5>
                    <p class="text-muted mb-3">Professional development workflow</p>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-primary">Git</span>
                        <span class="badge bg-primary">Docker</span>
                        <span class="badge bg-primary">Kubernetes</span>
                        <span class="badge bg-primary">Jenkins</span>
                        <span class="badge bg-primary">VS Code</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card card-custom p-4">
                    <h5><i class="fas fa-mobile-alt text-primary me-2"></i>Mobile Development</h5>
                    <p class="text-muted mb-3">Cross-platform mobile solutions</p>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-primary">React Native</span>
                        <span class="badge bg-primary">Flutter</span>
                        <span class="badge bg-primary">Ionic</span>
                        <span class="badge bg-primary">Swift</span>
                        <span class="badge bg-primary">Kotlin</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-lg-8">
                <h2 class="section-title">Ready to Work Together?</h2>
                <p class="section-subtitle">Let's discuss how we can help bring your vision to life with our expertise and passion for technology.</p>
                <div class="cta-buttons">
                    <a href="{{ route('contact') }}" class="btn-primary-custom me-3">Get In Touch</a>
                    <a href="{{ route('services') }}" class="btn btn-outline-primary">Our Services</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
