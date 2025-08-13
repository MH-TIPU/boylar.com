@extends('layouts.app')

@section('title', 'Privacy Policy - Boylar')
@section('description', 'Privacy Policy for Boylar - Learn how we collect, use, and protect your personal information.')

@section('content')
<!-- Enhanced Privacy Policy Header -->
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
                        <span class="text-gradient">Privacy</span> Policy
                    </h1>
                    <p class="hero-subtitle">
                        Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
                    </p>
                    <div class="hero-meta">
                        <div class="meta-badge">
                            <i class="fas fa-calendar-alt me-2"></i>
                            <strong>Last updated:</strong> {{ date('F j, Y') }}
                        </div>
                        <div class="meta-badge">
                            <i class="fas fa-lock me-2"></i>
                            <strong>Data Protection</strong>
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
        <span>Read Policy</span>
        <div class="scroll-arrow">
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
</section>

<!-- Privacy Policy Content -->
<section class="section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card-custom p-5">
                    
                    <!-- Introduction -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">1. Introduction</h2>
                        <p>Welcome to Boylar ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>boylar.com</strong> and use our services.</p>
                        <p>By using our website and services, you agree to the collection and use of information in accordance with this policy.</p>
                    </div>

                    <!-- Information We Collect -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">2. Information We Collect</h2>
                        
                        <h4 class="fw-bold mb-3">2.1 Personal Information</h4>
                        <p>We may collect personal information that you provide directly to us, including:</p>
                        <ul class="mb-4">
                            <li>Name and contact information (email address, phone number, mailing address)</li>
                            <li>Company name and job title</li>
                            <li>Project requirements and specifications</li>
                            <li>Payment information (processed securely through third-party providers)</li>
                            <li>Communication preferences</li>
                        </ul>

                        <h4 class="fw-bold mb-3">2.2 Automatically Collected Information</h4>
                        <p>When you visit our website, we may automatically collect certain information, including:</p>
                        <ul class="mb-4">
                            <li>IP address and location data</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Pages visited and time spent on our site</li>
                            <li>Referring website</li>
                            <li>Device information</li>
                        </ul>

                        <h4 class="fw-bold mb-3">2.3 Cookies and Tracking Technologies</h4>
                        <p>We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.</p>
                    </div>

                    <!-- How We Use Information -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">3. How We Use Your Information</h2>
                        <p>We use the collected information for various purposes, including:</p>
                        <ul class="mb-4">
                            <li>Providing and maintaining our services</li>
                            <li>Processing your requests and transactions</li>
                            <li>Communicating with you about our services</li>
                            <li>Sending project updates and important notifications</li>
                            <li>Improving our website and services</li>
                            <li>Analyzing usage patterns and trends</li>
                            <li>Preventing fraud and ensuring security</li>
                            <li>Complying with legal obligations</li>
                            <li>Marketing our services (with your consent)</li>
                        </ul>
                    </div>

                    <!-- Information Sharing -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">4. Information Sharing and Disclosure</h2>
                        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                        
                        <h4 class="fw-bold mb-3">4.1 Service Providers</h4>
                        <p>We may share your information with trusted third-party service providers who assist us in operating our business, including:</p>
                        <ul class="mb-4">
                            <li>Cloud hosting providers</li>
                            <li>Payment processors</li>
                            <li>Email service providers</li>
                            <li>Analytics services</li>
                            <li>Project management tools</li>
                        </ul>

                        <h4 class="fw-bold mb-3">4.2 Legal Requirements</h4>
                        <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>

                        <h4 class="fw-bold mb-3">4.3 Business Transfers</h4>
                        <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
                    </div>

                    <!-- Data Security -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">5. Data Security</h2>
                        <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                        <ul class="mb-4">
                            <li>Encryption of data in transit and at rest</li>
                            <li>Regular security assessments</li>
                            <li>Access controls and authentication</li>
                            <li>Employee training on data protection</li>
                            <li>Secure development practices</li>
                        </ul>
                        <p>However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                    </div>

                    <!-- Data Retention -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">6. Data Retention</h2>
                        <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors we consider when determining retention periods include:</p>
                        <ul class="mb-4">
                            <li>The nature of the services provided</li>
                            <li>Legal and regulatory requirements</li>
                            <li>The purpose for which the information was collected</li>
                            <li>Our legitimate business interests</li>
                        </ul>
                    </div>

                    <!-- Your Rights -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">7. Your Privacy Rights</h2>
                        <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                        <ul class="mb-4">
                            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                            <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                            <li><strong>Restriction:</strong> Request limitation of processing your information</li>
                            <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                            <li><strong>Objection:</strong> Object to certain types of processing</li>
                            <li><strong>Withdraw Consent:</strong> Withdraw consent for processing based on consent</li>
                        </ul>
                        <p>To exercise these rights, please contact us using the information provided below.</p>
                    </div>

                    <!-- International Transfers -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">8. International Data Transfers</h2>
                        <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers are subject to appropriate safeguards and comply with applicable data protection laws.</p>
                    </div>

                    <!-- Children's Privacy -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">9. Children's Privacy</h2>
                        <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information, please contact us so we can take appropriate action.</p>
                    </div>

                    <!-- Updates to Policy -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">10. Updates to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by:</p>
                        <ul class="mb-4">
                            <li>Posting the updated policy on our website</li>
                            <li>Updating the "Last updated" date</li>
                            <li>Sending you an email notification (for significant changes)</li>
                        </ul>
                        <p>Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.</p>
                    </div>

                    <!-- Contact Information -->
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">11. Contact Us</h2>
                        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
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
                                    <h5 class="fw-bold mb-3">Response Time</h5>
                                    <p>We aim to respond to all privacy-related inquiries within:</p>
                                    <ul>
                                        <li>General inquiries: 48 hours</li>
                                        <li>Data access requests: 30 days</li>
                                        <li>Data deletion requests: 30 days</li>
                                        <li>Urgent security matters: 24 hours</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Legal Compliance -->
                    <div class="alert alert-info">
                        <h5 class="fw-bold mb-2">Legal Compliance</h5>
                        <p class="mb-0">This Privacy Policy is designed to comply with applicable data protection regulations, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant privacy laws.</p>
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
                    <h3 class="fw-bold mb-3">Have Questions About Our Privacy Practices?</h3>
                    <p class="lead text-muted mb-4">We're committed to transparency and protecting your privacy. Contact us if you need clarification on any aspect of this policy.</p>
                    <a href="{{ route('contact') }}" class="btn-primary-custom">
                        <i class="fas fa-envelope me-2"></i>Contact Us
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
