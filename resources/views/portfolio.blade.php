@extends('layouts.app')

@section('title', 'Portfolio - Boylar')
@section('description', 'See our best work: real client websites, web apps, and digital solutions.')

@section('content')
<!-- Enhanced Portfolio Hero Section (identical to About) -->
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
                    Our <span class="text-gradient">Portfolio</span>
                </h1>
                <p class="hero-subtitle">
                    A showcase of our most impactful web projects, crafted for clients across industries. Explore our work and imagine what we can build for you.
                </p>
                <div class="hero-meta">
                    <div class="meta-badge">
                        <i class="fas fa-trophy me-2"></i>
                        <strong>100+ Projects</strong>
                    </div>
                    <div class="meta-badge">
                        <i class="fas fa-star me-2"></i>
                        <strong>98% Success Rate</strong>
                    </div>
                    <div class="meta-badge">
                        <i class="fas fa-globe me-2"></i>
                        <strong>Global Clients</strong>
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
        <span>View Projects</span>
        <div class="scroll-arrow">
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
</section>

<!-- Portfolio Filter & Grid -->
<section class="section bg-light">
    <div class="container">
        <div class="row justify-content-center mb-4">
            <div class="col-lg-8">
                <div class="text-center">
                    <div class="btn-group portfolio-filter mb-3" role="group">
                        <button type="button" class="btn btn-outline-primary active" data-filter="all">All</button>
                        <button type="button" class="btn btn-outline-primary" data-filter="web">Websites</button>
                        <button type="button" class="btn btn-outline-primary" data-filter="app">Apps</button>
                        <button type="button" class="btn btn-outline-primary" data-filter="other">Other</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-4 portfolio-grid">
            <!-- Real Client Websites -->
            <div class="col-lg-4 col-md-6 portfolio-item" data-category="web">
                <div class="card portfolio-card h-100 border-0 shadow-lg position-relative overflow-hidden bg-white rounded-4 animate-card">
                    <div class="portfolio-image d-flex align-items-center justify-content-center" style="height: 200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 1rem 1rem 0 0;">
                        <i class="fas fa-globe text-white" style="font-size: 2.5rem;"></i>
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title mb-2 fw-bold">
                            <a href="https://www.prothomaprokashan.com/" target="_blank" rel="noopener" class="stretched-link text-decoration-none text-gradient">prothomaprokashan.com</a>
                        </h5>
                        <p class="text-muted small mb-3">Book publisher & e-commerce platform</p>
                        <a href="https://www.prothomaprokashan.com/" target="_blank" rel="noopener" class="btn btn-sm btn-primary rounded-pill px-3">Visit Site <i class="fas fa-arrow-up-right-from-square ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item" data-category="web">
                <div class="card portfolio-card h-100 border-0 shadow-lg position-relative overflow-hidden bg-white rounded-4 animate-card">
                    <div class="portfolio-image d-flex align-items-center justify-content-center" style="height: 200px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 1rem 1rem 0 0;">
                        <i class="fas fa-globe text-white" style="font-size: 2.5rem;"></i>
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title mb-2 fw-bold">
                            <a href="https://www.mediastarbd.com/" target="_blank" rel="noopener" class="stretched-link text-decoration-none text-gradient">mediastarbd.com</a>
                        </h5>
                        <p class="text-muted small mb-3">Media & news portal</p>
                        <a href="https://www.mediastarbd.com/" target="_blank" rel="noopener" class="btn btn-sm btn-primary rounded-pill px-3">Visit Site <i class="fas fa-arrow-up-right-from-square ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item" data-category="web">
                <div class="card portfolio-card h-100 border-0 shadow-lg position-relative overflow-hidden bg-white rounded-4 animate-card">
                    <div class="portfolio-image d-flex align-items-center justify-content-center" style="height: 200px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 1rem 1rem 0 0;">
                        <i class="fas fa-globe text-white" style="font-size: 2.5rem;"></i>
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title mb-2 fw-bold">
                            <a href="https://bdmso.org/" target="_blank" rel="noopener" class="stretched-link text-decoration-none text-gradient">bdmso.org</a>
                        </h5>
                        <p class="text-muted small mb-3">Medical society organization</p>
                        <a href="https://bdmso.org/" target="_blank" rel="noopener" class="btn btn-sm btn-primary rounded-pill px-3">Visit Site <i class="fas fa-arrow-up-right-from-square ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item" data-category="web">
                <div class="card portfolio-card h-100 border-0 shadow-lg position-relative overflow-hidden bg-white rounded-4 animate-card">
                    <div class="portfolio-image d-flex align-items-center justify-content-center" style="height: 200px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 1rem 1rem 0 0;">
                        <i class="fas fa-globe text-white" style="font-size: 2.5rem;"></i>
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title mb-2 fw-bold">
                            <a href="https://bdaio.org/" target="_blank" rel="noopener" class="stretched-link text-decoration-none text-gradient">bdaio.org</a>
                        </h5>
                        <p class="text-muted small mb-3">AI organization in Bangladesh</p>
                        <a href="https://bdaio.org/" target="_blank" rel="noopener" class="btn btn-sm btn-primary rounded-pill px-3">Visit Site <i class="fas fa-arrow-up-right-from-square ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item" data-category="web">
                <div class="card portfolio-card h-100 border-0 shadow-lg position-relative overflow-hidden bg-white rounded-4 animate-card">
                    <div class="portfolio-image d-flex align-items-center justify-content-center" style="height: 200px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); border-radius: 1rem 1rem 0 0;">
                        <i class="fas fa-globe text-white" style="font-size: 2.5rem;"></i>
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title mb-2 fw-bold">
                            <a href="https://arkpowerltd.com.bd/" target="_blank" rel="noopener" class="stretched-link text-decoration-none text-gradient">arkpowerltd.com.bd</a>
                        </h5>
                        <p class="text-muted small mb-3">Power & energy company</p>
                        <a href="https://arkpowerltd.com.bd/" target="_blank" rel="noopener" class="btn btn-sm btn-primary rounded-pill px-3">Visit Site <i class="fas fa-arrow-up-right-from-square ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item" data-category="web">
                <div class="card portfolio-card h-100 border-0 shadow-lg position-relative overflow-hidden bg-white rounded-4 animate-card">
                    <div class="portfolio-image d-flex align-items-center justify-content-center" style="height: 200px; background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); border-radius: 1rem 1rem 0 0;">
                        <i class="fas fa-globe text-white" style="font-size: 2.5rem;"></i>
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title mb-2 fw-bold">
                            <a href="https://asifuahmed.me/" target="_blank" rel="noopener" class="stretched-link text-decoration-none text-gradient">asifuahmed.me</a>
                        </h5>
                        <p class="text-muted small mb-3">Personal portfolio site</p>
                        <a href="https://asifuahmed.me/" target="_blank" rel="noopener" class="btn btn-sm btn-primary rounded-pill px-3">Visit Site <i class="fas fa-arrow-up-right-from-square ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item" data-category="web">
                <div class="card portfolio-card h-100 border-0 shadow-lg position-relative overflow-hidden bg-white rounded-4 animate-card">
                    <div class="portfolio-image d-flex align-items-center justify-content-center" style="height: 200px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 1rem 1rem 0 0;">
                        <i class="fas fa-globe text-white" style="font-size: 2.5rem;"></i>
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title mb-2 fw-bold">
                            <a href="https://www.munirhasan.com/" target="_blank" rel="noopener" class="stretched-link text-decoration-none text-gradient">munirhasan.com</a>
                        </h5>
                        <p class="text-muted small mb-3">Personal blog & portfolio</p>
                        <a href="https://www.munirhasan.com/" target="_blank" rel="noopener" class="btn btn-sm btn-primary rounded-pill px-3">Visit Site <i class="fas fa-arrow-up-right-from-square ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item" data-category="web">
                <div class="card portfolio-card h-100 border-0 shadow-lg position-relative overflow-hidden bg-white rounded-4 animate-card">
                    <div class="portfolio-image d-flex align-items-center justify-content-center" style="height: 200px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 1rem 1rem 0 0;">
                        <i class="fas fa-globe text-white" style="font-size: 2.5rem;"></i>
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title mb-2 fw-bold">
                            <a href="https://maslab.org/" target="_blank" rel="noopener" class="stretched-link text-decoration-none text-gradient">maslab.org</a>
                        </h5>
                        <p class="text-muted small mb-3">Machine learning research lab</p>
                        <a href="https://maslab.org/" target="_blank" rel="noopener" class="btn btn-sm btn-primary rounded-pill px-3">Visit Site <i class="fas fa-arrow-up-right-from-square ms-1"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 portfolio-item" data-category="web">
                <div class="card portfolio-card h-100 border-0 shadow-lg position-relative overflow-hidden bg-white rounded-4 animate-card">
                    <div class="portfolio-image d-flex align-items-center justify-content-center" style="height: 200px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 1rem 1rem 0 0;">
                        <i class="fas fa-globe text-white" style="font-size: 2.5rem;"></i>
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title mb-2 fw-bold">
                            <a href="https://faisalization.com" target="_blank" rel="noopener" class="stretched-link text-decoration-none text-gradient">faisalization.com</a>
                        </h5>
                        <p class="text-muted small mb-3">Personal portfolio & blog</p>
                        <a href="https://faisalization.com" target="_blank" rel="noopener" class="btn btn-sm btn-primary rounded-pill px-3">Visit Site <i class="fas fa-arrow-up-right-from-square ms-1"></i></a>
                    </div>
                </div>
            </div>
            <!-- Sample App Project -->
            
        </div>
    </div>
</section>

<!-- Technologies Section -->
<section class="section">
    <div class="container">
        <h2 class="section-title text-center mb-4">Technologies We Use</h2>
        <div class="row g-4 text-center justify-content-center">
            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                <div class="tech-item p-3 bg-light rounded shadow-sm">
                    <i class="fab fa-laravel" style="font-size: 2.5rem; color: #ff2d20;"></i>
                    <h6 class="mt-2">Laravel</h6>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                <div class="tech-item p-3 bg-light rounded shadow-sm">
                    <i class="fab fa-react" style="font-size: 2.5rem; color: #61dafb;"></i>
                    <h6 class="mt-2">React</h6>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                <div class="tech-item p-3 bg-light rounded shadow-sm">
                    <i class="fab fa-vuejs" style="font-size: 2.5rem; color: #4fc08d;"></i>
                    <h6 class="mt-2">Vue.js</h6>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                <div class="tech-item p-3 bg-light rounded shadow-sm">
                    <i class="fab fa-node-js" style="font-size: 2.5rem; color: #339933;"></i>
                    <h6 class="mt-2">Node.js</h6>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                <div class="tech-item p-3 bg-light rounded shadow-sm">
                    <i class="fab fa-python" style="font-size: 2.5rem; color: #3776ab;"></i>
                    <h6 class="mt-2">Python</h6>
                </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                <div class="tech-item p-3 bg-light rounded shadow-sm">
                    <i class="fab fa-aws" style="font-size: 2.5rem; color: #ff9900;"></i>
                    <h6 class="mt-2">AWS</h6>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Client Testimonials Section -->
<section class="section bg-light py-5">
    <div class="container">
        <h2 class="section-title text-center mb-4">What Our Clients Say</h2>
        <div class="row g-4 justify-content-center">
            <div class="col-lg-4 col-md-6">
                <div class="card shadow-sm border-0 p-4 h-100 text-center rounded-4">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" class="rounded-circle mb-3" style="width:70px; height:70px; object-fit:cover;">
                    <blockquote class="blockquote mb-3">“Boylar delivered our project on time and exceeded our expectations. The team is creative, responsive, and truly cares about our success.”</blockquote>
                    <figcaption class="blockquote-footer mb-0">Md. Rahim, <cite title="Company">Prothoma Prokashan</cite></figcaption>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card shadow-sm border-0 p-4 h-100 text-center rounded-4">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" class="rounded-circle mb-3" style="width:70px; height:70px; object-fit:cover;">
                    <blockquote class="blockquote mb-3">“The Boylar team is innovative and professional. They turned our ideas into a beautiful, functional website.”</blockquote>
                    <figcaption class="blockquote-footer mb-0">Sarah Akter, <cite title="Company">MediaStar BD</cite></figcaption>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card shadow-sm border-0 p-4 h-100 text-center rounded-4">
                    <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Client" class="rounded-circle mb-3" style="width:70px; height:70px; object-fit:cover;">
                    <blockquote class="blockquote mb-3">“Excellent communication and technical skills. We highly recommend Boylar for any web development project.”</blockquote>
                    <figcaption class="blockquote-footer mb-0">Dr. Hasan, <cite title="Company">BDMSO</cite></figcaption>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Awards & Recognitions Section -->
<section class="section py-5">
    <div class="container">
        <h2 class="section-title text-center mb-4">Awards & Recognitions</h2>
        <div class="row g-4 justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6 text-center">
                <div class="p-4 bg-white rounded-4 shadow-sm h-100">
                    <i class="fas fa-award fa-3x text-warning mb-3"></i>
                    <h5 class="fw-bold mb-2">Top Web Agency 2024</h5>
                    <p class="text-muted small mb-0">Recognized for outstanding web development and client satisfaction.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 text-center">
                <div class="p-4 bg-white rounded-4 shadow-sm h-100">
                    <i class="fas fa-medal fa-3x text-primary mb-3"></i>
                    <h5 class="fw-bold mb-2">Innovation Award</h5>
                    <p class="text-muted small mb-0">Awarded for creative solutions and technical excellence.</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 text-center">
                <div class="p-4 bg-white rounded-4 shadow-sm h-100">
                    <i class="fas fa-trophy fa-3x text-success mb-3"></i>
                    <h5 class="fw-bold mb-2">Client Choice 2023</h5>
                    <p class="text-muted small mb-0">Voted best by our clients for reliability and results.</p>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

@push('scripts')
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio filter functionality
    const filterButtons = document.querySelectorAll('.portfolio-filter button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
</script>
@endpush

@push('styles')
<style>
.section-title {
    font-size: 2.5rem;
    font-weight: 700;
}
.section-subtitle {
    font-size: 1.15rem;
    color: #6c757d;
}
.meta-badge {
    background: #f8f9fa;
    color: #4a4a4a;
    border-radius: 2rem;
    padding: 0.5rem 1.25rem;
    font-size: 1rem;
    margin: 0 0.25rem 0.5rem;
    display: inline-flex;
    align-items: center;
    font-weight: 500;
}
.text-gradient {
    background: linear-gradient(90deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}
.portfolio-filter .btn {
    margin: 0 0.25rem 0.5rem;
}
.portfolio-card, .tech-item {
    transition: all 0.3s cubic-bezier(.4,2,.3,1);
}
.portfolio-card:hover, .tech-item:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px rgba(102,126,234,0.12);
}
.portfolio-image {
    border-radius: 0.5rem 0.5rem 0 0;
    overflow: hidden;
}
.portfolio-card.animate-card {
    border: 1.5px solid transparent;
    background-clip: padding-box;
    box-shadow: 0 8px 32px rgba(102,126,234,0.10), 0 1.5px 0 0 #e9ecef;
    transition: box-shadow 0.3s, transform 0.3s, border 0.3s;
}
.portfolio-card.animate-card:hover {
    box-shadow: 0 16px 48px rgba(102,126,234,0.18), 0 2px 0 0 #d1d5db;
    border: 1.5px solid #764ba2;
    transform: translateY(-10px) scale(1.03);
    z-index: 2;
}
.portfolio-card .btn {
    margin-top: 0.5rem;
    font-weight: 500;
    letter-spacing: 0.02em;
}
.portfolio-card .card-title a.text-gradient {
    background: linear-gradient(90deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}
@media (max-width: 768px) {
    .portfolio-filter {
        flex-direction: column;
    }
    .portfolio-filter .btn {
        margin: 0.25rem 0;
    }
}
</style>
@endpush