@extends('layouts.app')

@section('title', 'Boylar - Professional IT Solutions')
@section('description', 'Transform your business with cutting-edge technology solutions. We specialize in software development, web applications, and digital transformation.')

@section('content')
<!-- Enhanced Hero Section -->
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
        <div class="row align-items-center min-vh-100">
            <div class="col-lg-6 hero-content">
                <div class="hero-text">
                    <h1 class="hero-title floating">
                        <span class="text-gradient">Transform</span> Ideas <br>
                        Into <span class="text-gradient">Reality</span>
                    </h1>
                    <p class="hero-subtitle">
                        We craft innovative software solutions that drive business growth and digital transformation. 
                        <strong>Speed is our advantage</strong> - from concept to deployment, we deliver fast without compromising quality.
                    </p>
                    <div class="hero-buttons">
                        <a href="{{ route('services') }}" class="btn-primary-custom me-3">
                            <i class="fas fa-rocket me-2"></i>Get Fast Results
                        </a>
                        <a href="{{ route('portfolio') }}" class="btn-primary-custom">
                            <i class="fas fa-briefcase me-2"></i>Our Work
                        </a>
                    </div>
                    
                    <!-- Hero Stats -->
                    <div class="hero-stats mt-5">
                        <div class="row text-center">
                            <div class="col-4">
                                <div class="stat-item">
                                    <h3 class="stat-number text-gradient" data-count="100">0+</h3>
                                    <p class="stat-label">Projects</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="stat-item">
                                    <h3 class="stat-number text-gradient" data-count="98">0%</h3>
                                    <p class="stat-label">Success Rate</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="stat-item">
                                    <h3 class="stat-number text-gradient">24/7</h3>
                                    <p class="stat-label">Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="hero-visual">
                    <div class="floating-elements">
                        <!-- Enhanced Main Hero Card -->
                        <div class="hero-main-card glassmorphism floating">
                            <div class="card-header">
                                <div class="traffic-lights">
                                    <span class="light red"></span>
                                    <span class="light yellow"></span>
                                    <span class="light green"></span>
                                </div>
                                <div class="card-title">innovation.js</div>
                            </div>
                            <div class="card-content">
                                <div class="code-lines">
                                    <div class="code-line">
                                        <span class="code-keyword">const</span> 
                                        <span class="code-variable">success</span> = 
                                        <span class="code-function">buildSolution</span>({
                                    </div>
                                    <div class="code-line">
                                        &nbsp;&nbsp;<span class="code-property">speed</span>: 
                                        <span class="code-string">'lightning-fast'</span>,
                                    </div>
                                    <div class="code-line">
                                        &nbsp;&nbsp;<span class="code-property">quality</span>: 
                                        <span class="code-string">'premium'</span>,
                                    </div>
                                    <div class="code-line">
                                        &nbsp;&nbsp;<span class="code-property">innovation</span>: 
                                        <span class="code-boolean">true</span>
                                    </div>
                                    <div class="code-line">});)</div>
                                    <div class="code-line">
                                        <span class="code-comment">// Ready to transform your business?</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Enhanced Floating Tech Icons -->
                        <div class="floating-tech">
                            <div class="tech-icon tech-1 floating" style="animation-delay: 0.5s;" data-tooltip="React">
                                <i class="fab fa-react"></i>
                            </div>
                            <div class="tech-icon tech-2 floating" style="animation-delay: 1s;" data-tooltip="Laravel">
                                <i class="fab fa-laravel"></i>
                            </div>
                            <div class="tech-icon tech-3 floating" style="animation-delay: 1.5s;" data-tooltip="Node.js">
                                <i class="fab fa-node-js"></i>
                            </div>
                            <div class="tech-icon tech-4 floating" style="animation-delay: 2s;" data-tooltip="Python">
                                <i class="fab fa-python"></i>
                            </div>
                            <div class="tech-icon tech-5 floating" style="animation-delay: 2.5s;" data-tooltip="Vue.js">
                                <i class="fab fa-vuejs"></i>
                            </div>
                            <div class="tech-icon tech-6 floating" style="animation-delay: 3s;" data-tooltip="AWS">
                                <i class="fab fa-aws"></i>
                            </div>
                        </div>


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
        <span>Discover More</span>
        <div class="scroll-arrow">
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
</section>

<!-- Services Overview -->
<section class="section">
    <div class="container">
        <h2 class="section-title">What We Do</h2>
        <p class="section-subtitle">We provide comprehensive IT solutions to help your business thrive in the digital age</p>
        
        <div class="row g-5">
            <div class="col-lg-4 col-md-6">
                <div class="card-custom p-5 text-center fade-in">
                    <div class="card-icon mx-auto">
                        <i class="fas fa-code"></i>
                    </div>
                    <h4 class="mb-3 fw-bold">Software Development</h4>
                    <p class="text-muted">Custom software solutions built with modern technologies and best practices to meet your specific business needs.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card-custom p-5 text-center fade-in" style="animation-delay: 0.1s;">
                    <div class="card-icon mx-auto">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h4 class="mb-3 fw-bold">Web Development</h4>
                    <p class="text-muted">Responsive, fast, and secure web applications that provide exceptional user experiences across all devices.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card-custom p-5 text-center fade-in" style="animation-delay: 0.2s;">
                    <div class="card-icon mx-auto">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h4 class="mb-3 fw-bold">Mobile Apps</h4>
                    <p class="text-muted">Native and cross-platform mobile applications that engage users and drive business growth.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card-custom p-5 text-center fade-in" style="animation-delay: 0.3s;">
                    <div class="card-icon mx-auto">
                        <i class="fas fa-cloud"></i>
                    </div>
                    <h4 class="mb-3 fw-bold">Cloud Solutions</h4>
                    <p class="text-muted">Scalable cloud infrastructure and migration services to optimize performance and reduce costs.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card-custom p-5 text-center fade-in" style="animation-delay: 0.4s;">
                    <div class="card-icon mx-auto">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h4 class="mb-3 fw-bold">Cybersecurity</h4>
                    <p class="text-muted">Comprehensive security solutions to protect your digital assets and ensure compliance.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card-custom p-5 text-center fade-in" style="animation-delay: 0.5s;">
                    <div class="card-icon mx-auto">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h4 class="mb-3 fw-bold">Digital Strategy</h4>
                    <p class="text-muted">Strategic consulting to guide your digital transformation and technology roadmap.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h2 class="section-title text-start">Why Choose Boylar?</h2>
                <p class="lead text-muted mb-4">With years of experience in software engineering and a passion for innovation, we deliver solutions that exceed expectations and drive business growth.</p>
                
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="feature-content">
                                <h5 class="fw-bold mb-2">Expert Team</h5>
                                <p class="text-muted small">Skilled developers and engineers with proven track records</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-bolt"></i>
                            </div>
                            <div class="feature-content">
                                <h5 class="fw-bold mb-2">Lightning Fast Delivery</h5>
                                <p class="text-muted small">Our "Do Fast" approach ensures rapid development and deployment</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <div class="feature-content">
                                <h5 class="fw-bold mb-2">Custom Solutions</h5>
                                <p class="text-muted small">Tailored to your specific business requirements</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-headset"></i>
                            </div>
                            <div class="feature-content">
                                <h5 class="fw-bold mb-2">24/7 Support</h5>
                                <p class="text-muted small">Continuous support and maintenance services</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a href="{{ route('about') }}" class="btn-primary-custom mt-4">Learn More About Us</a>
            </div>
            <div class="col-lg-6">
                <div class="position-relative">
                    <div class="floating-card-large">
                        <div class="card-custom p-5 text-center">
                            <div class="mb-4">
                                <div class="stats-circle mx-auto">
                                    <i class="fas fa-brain text-primary"></i>
                                </div>
                            </div>
                            <h4 class="fw-bold mb-3">Innovation at Heart</h4>
                            <p class="text-muted mb-4">We combine cutting-edge technology with creative problem-solving to deliver exceptional results.</p>
                            <div class="d-flex justify-content-center gap-3">
                                <div class="tech-badge">
                                    <i class="fab fa-react"></i>
                                    <span>React</span>
                                </div>
                                <div class="tech-badge">
                                    <i class="fab fa-laravel"></i>
                                    <span>Laravel</span>
                                </div>
                                <div class="tech-badge">
                                    <i class="fab fa-aws"></i>
                                    <span>AWS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="section" style="padding: 4rem 0; margin: 2rem 0; background: #ffffff;">
    <div class="container">
        <div class="row text-center">
            <div class="col-12 mb-5">
                <h2 class="section-title" style="font-size: 3rem; font-weight: 700; color: #0f172a; margin-bottom: 1.5rem;">Our Success in Numbers</h2>
                <p style="font-size: 1.1rem; font-weight: 400; color: #64748b;">Delivering excellence through measurable results</p>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="stats-card glassmorphism border-gradient shadow-lg position-relative overflow-hidden animate-card h-100">
                    <div class="stats-icon mb-3">
                        <i class="fas fa-bolt fa-2x text-primary"></i>
                    </div>
                    <div class="stats-number gradient-text">2x</div>
                    <div class="stats-label">Faster Delivery</div>
                    <div class="stats-description">Our "Do Fast" approach delivers projects twice as fast as industry average</div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="stats-card glassmorphism border-gradient shadow-lg position-relative overflow-hidden animate-card h-100">
                    <div class="stats-icon mb-3">
                        <i class="fas fa-smile-beam fa-2x" style="color: #ec4899;"></i>
                    </div>
                    <div class="stats-number gradient-text">98%</div>
                    <div class="stats-label">Client Satisfaction</div>
                    <div class="stats-description">High satisfaction rate with quality and speed of service</div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="stats-card glassmorphism border-gradient shadow-lg position-relative overflow-hidden animate-card h-100">
                    <div class="stats-icon mb-3">
                        <i class="fas fa-stopwatch fa-2x" style="color: #0ea5e9;"></i>
                    </div>
                    <div class="stats-number gradient-text">48hr</div>
                    <div class="stats-label">Quick Response</div>
                    <div class="stats-description">Fast response time for project kickoffs and support</div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="stats-card glassmorphism border-gradient shadow-lg position-relative overflow-hidden animate-card h-100">
                    <div class="stats-icon mb-3">
                        <i class="fas fa-headset fa-2x" style="color: #10b981;"></i>
                    </div>
                    <div class="stats-number gradient-text">24/7</div>
                    <div class="stats-label">Support Available</div>
                    <div class="stats-description">Round-the-clock support for rapid issue resolution</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card-custom p-5 text-center glass-effect">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <h2 class="fw-bold mb-3">Ready to Transform Your Business?</h2>
                            <p class="lead text-muted mb-4">Join hundreds of satisfied clients who've transformed their digital presence with our expertise. Let's discuss how we can help you achieve your goals.</p>
                            <div class="d-flex flex-wrap justify-content-center gap-3">
                                <a href="{{ route('contact') }}" class="btn-primary-custom">
                                    <i class="fas fa-rocket me-2"></i>
                                    Start Your Project
                                </a>
                                <a href="{{ route('portfolio') }}" class="btn btn-outline-primary">
                                    <i class="fas fa-eye me-2"></i>
                                    View Our Work
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="floating" style="animation-delay: 0.5s;">
                                <div class="stats-circle mx-auto">
                                    <i class="fas fa-handshake"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Trust indicators -->
                    <div class="row mt-5 pt-4 border-top">
                        <div class="col-md-4 text-center mb-3">
                            <div class="d-flex align-items-center justify-content-center">
                                <i class="fas fa-award text-primary me-2"></i>
                                <span class="fw-bold">Quality Guaranteed</span>
                            </div>
                        </div>
                        <div class="col-md-4 text-center mb-3">
                            <div class="d-flex align-items-center justify-content-center">
                                <i class="fas fa-clock text-primary me-2"></i>
                                <span class="fw-bold">Fast Delivery</span>
                            </div>
                        </div>
                        <div class="col-md-4 text-center mb-3">
                            <div class="d-flex align-items-center justify-content-center">
                                <i class="fas fa-shield-alt text-primary me-2"></i>
                                <span class="fw-bold">Secure & Reliable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

@push('styles')
<style>
.stats-card.glassmorphism {
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(12px);
    border-radius: 1.5rem;
    border: 2.5px solid transparent;
    box-shadow: 0 8px 32px rgba(102,126,234,0.10), 0 1.5px 0 0 #e9ecef;
    transition: box-shadow 0.3s, transform 0.3s, border 0.3s;
    padding: 3rem 2.25rem 2.5rem 2.25rem;
    min-height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.stats-number.gradient-text {
    font-size: 2.7rem;
    font-weight: 800;
    color: #111 !important;
    background: none !important;
    -webkit-background-clip: initial !important;
    -webkit-text-fill-color: initial !important;
    background-clip: initial !important;
    margin-bottom: 0.5rem;
}
@media (max-width: 768px) {
    .stats-card.glassmorphism {
        min-height: 260px;
        padding: 2rem 1rem 2rem 1rem;
    }
    .stats-number.gradient-text {
        font-size: 2rem;
    }
}
</style>
@endpush
