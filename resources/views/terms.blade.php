@extends('layouts.app')

@section('title', 'Terms of Service - Boylar')
@section('description', 'Terms of Service for Boylar - Review our terms and conditions for using our IT services and solutions.')

@section('content')
<!-- Enhanced Terms of Service Header -->
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
        <div class="row justify-content-center align-items-center" style="min-height: 80vh;">
            <div class="col-lg-8 text-center">
                <div class="hero-content">
                    <h1 class="hero-title floating">
                        <span class="text-gradient">Terms</span> of Service
                    </h1>
                    <p class="hero-subtitle">
                        These terms govern your use of our services and establish the legal framework for our business relationship.
                    </p>
                    <div class="hero-meta">
                        <div class="meta-badge">
                            <i class="fas fa-calendar-alt me-2"></i>
                            <strong>Last updated:</strong> {{ date('F j, Y') }}
                        </div>
                        <div class="meta-badge">
                            <i class="fas fa-shield-alt me-2"></i>
                            <strong>Legal Protection</strong>
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
        <span>Read Terms</span>
        <div class="scroll-arrow">
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
</section>

<!-- Terms of Service Content -->
<section class="section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card-custom p-5">
                    
                    <!-- Introduction -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">1. Acceptance of Terms</h2>
                        <p>By accessing our website at <strong>boylar.com</strong> or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                        <p>We are Boylar ("Company," "we," "our," or "us"), and these terms establish the legal framework for our business relationship with you ("Client," "you," or "your").</p>
                    </div>

                    <!-- Services -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">2. Our Services</h2>
                        <p>Boylar provides professional IT solutions including:</p>
                        <ul class="mb-4">
                            <li>Custom software development</li>
                            <li>Web application development</li>
                            <li>Mobile application development</li>
                            <li>Cloud solutions and migration</li>
                            <li>Cybersecurity services</li>
                            <li>Digital strategy consulting</li>
                            <li>IT support and maintenance</li>
                        </ul>
                        <p>Specific service details, deliverables, timelines, and pricing will be outlined in separate project agreements.</p>
                    </div>

                    <!-- User Responsibilities -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">3. User Responsibilities</h2>
                        <p>When using our services, you agree to:</p>
                        <ul class="mb-4">
                            <li>Provide accurate and complete information</li>
                            <li>Use our services only for lawful purposes</li>
                            <li>Respect intellectual property rights</li>
                            <li>Maintain the confidentiality of your account credentials</li>
                            <li>Notify us immediately of any security breaches</li>
                            <li>Comply with all applicable laws and regulations</li>
                        </ul>
                    </div>

                    <!-- Payment Terms -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">4. Payment Terms</h2>
                        <h4 class="fw-bold mb-3">4.1 Fees and Billing</h4>
                        <ul class="mb-4">
                            <li>All fees are quoted in USD unless otherwise specified</li>
                            <li>Payment terms will be specified in individual project agreements</li>
                            <li>Invoices are due within 15 days of receipt</li>
                            <li>Late payments may incur additional charges of 1.5% per month</li>
                        </ul>

                        <h4 class="fw-bold mb-3">4.2 Payment Methods</h4>
                        <p>We accept bank transfers, credit cards, and other mutually agreed payment methods.</p>

                        <h4 class="fw-bold mb-3">4.3 Refunds</h4>
                        <p>Development services are generally non-refundable once work has begun. Consulting services may be refunded if cancelled 24 hours in advance.</p>
                    </div>

                    <!-- Intellectual Property -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">5. Intellectual Property</h2>
                        <h4 class="fw-bold mb-3">5.1 Your Content</h4>
                        <p>You retain ownership of all content and materials you provide to us. You grant us a limited license to use your materials as necessary to provide our services.</p>

                        <h4 class="fw-bold mb-3">5.2 Our Services</h4>
                        <p>All content, trademarks, and intellectual property related to our services remain our property or that of our licensors.</p>

                        <h4 class="fw-bold mb-3">5.3 Developed Work</h4>
                        <p>Ownership of software, applications, and other work products will be clearly specified in individual project agreements.</p>
                    </div>

                    <!-- Confidentiality -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">6. Confidentiality</h2>
                        <p>Both parties agree to maintain the confidentiality of sensitive information shared during our business relationship, including:</p>
                        <ul class="mb-4">
                            <li>Business strategies and proprietary information</li>
                            <li>Technical specifications and source code</li>
                            <li>Customer data and financial information</li>
                            <li>Any information marked as confidential</li>
                        </ul>
                        <p>This obligation survives the termination of our agreement.</p>
                    </div>

                    <!-- Warranties and Disclaimers -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">7. Warranties and Disclaimers</h2>
                        <h4 class="fw-bold mb-3">7.1 Service Warranty</h4>
                        <p>We warrant that our services will be performed with professional skill and care in accordance with industry standards.</p>

                        <h4 class="fw-bold mb-3">7.2 Disclaimer</h4>
                        <div class="alert alert-warning">
                            <p class="mb-0"><strong>Except as expressly stated, our services are provided "as is" without warranties of any kind. We disclaim all implied warranties including merchantability, fitness for a particular purpose, and non-infringement.</strong></p>
                        </div>
                    </div>

                    <!-- Limitation of Liability -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">8. Limitation of Liability</h2>
                        <div class="alert alert-danger">
                            <h5 class="fw-bold mb-2">Important Liability Limitation</h5>
                            <p class="mb-2">To the maximum extent permitted by law, our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
                            <p class="mb-0">We shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or business opportunities.</p>
                        </div>
                    </div>

                    <!-- Termination -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">9. Termination</h2>
                        <p>Either party may terminate our agreement:</p>
                        <ul class="mb-4">
                            <li>With written notice as specified in project agreements</li>
                            <li>Immediately for material breach that remains uncured after 30 days notice</li>
                            <li>Immediately for violation of these terms</li>
                        </ul>
                        <p>Upon termination, all payment obligations for completed work remain in effect, and confidentiality obligations survive.</p>
                    </div>

                    <!-- Dispute Resolution -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">10. Dispute Resolution</h2>
                        <p>We encourage resolving disputes through direct communication. If formal resolution is needed, disputes will be resolved through binding arbitration under the rules of the American Arbitration Association.</p>
                        <p>The arbitration will be conducted in English, and the arbitrator's decision will be final and binding.</p>
                    </div>

                    <!-- Governing Law -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">11. Governing Law</h2>
                        <p>These Terms are governed by and construed in accordance with applicable laws. Any legal action must be brought in the appropriate jurisdiction.</p>
                    </div>

                    <!-- General Provisions -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">12. General Provisions</h2>
                        <h4 class="fw-bold mb-3">12.1 Entire Agreement</h4>
                        <p>These Terms, together with any specific service agreements, constitute the entire agreement between the parties.</p>

                        <h4 class="fw-bold mb-3">12.2 Changes to Terms</h4>
                        <p>We may update these Terms from time to time. We will notify you of any material changes by posting the updated Terms on our website and updating the "Last updated" date.</p>

                        <h4 class="fw-bold mb-3">12.3 Severability</h4>
                        <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
                    </div>

                    <!-- Contact Information -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">13. Contact Information</h2>
                        <p>If you have questions about these Terms of Service, please contact us:</p>
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <div class="card-custom p-4">
                                    <h5 class="fw-bold mb-3">Contact Information</h5>
                                    <p class="mb-2"><strong>Company:</strong> Boylar</p>
                                    <p class="mb-2"><strong>Email:</strong> dev.mosaraf@gmail.com</p>
                                    <p class="mb-2"><strong>Phone:</strong> 01943696858</p>
                                    <p class="mb-2"><strong>Address:</strong> 47/e, Indira Road, Farmgate, Dhaka</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card-custom p-4">
                                    <h5 class="fw-bold mb-3">Business Hours</h5>
                                    <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                                    <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                                    <p><strong>Sunday:</strong> Closed</p>
                                    <p class="mt-3"><strong>Emergency Support:</strong> Available 24/7 for active project clients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Agreement Acceptance -->
                    <div class="alert alert-success">
                        <h5 class="fw-bold mb-2">Agreement Acceptance</h5>
                        <p class="mb-0">By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. Your continued use of our services constitutes ongoing acceptance of these Terms and any modifications.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section bg-light">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
                <div class="card-custom p-5">
                    <h3 class="fw-bold mb-3">Ready to Get Started?</h3>
                    <p class="lead text-muted mb-4">Now that you understand our terms, let's discuss how we can help transform your business with our professional IT solutions.</p>
                    <div class="d-flex flex-wrap justify-content-center gap-3">
                        <a href="{{ route('contact') }}" class="btn-primary-custom">
                            <i class="fas fa-rocket me-2"></i>Start Your Project
                        </a>
                        <a href="{{ route('services') }}" class="btn btn-outline-primary">
                            <i class="fas fa-list me-2"></i>View Our Services
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
