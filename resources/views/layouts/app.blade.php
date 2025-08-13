<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Boylar - Professional IT Solutions')</title>
    <meta name="description" content="@yield('description', 'Boylar is a leading IT company providing professional software development, web solutions, and technology consulting services.')">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary: #6366f1;
            --secondary: #ec4899;
            --accent: #10b981;
            --dark: #0f172a;
            --gray: #64748b;
            --light: #f8fafc;
            --white: #ffffff;
            --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            --gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            --gradient-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background: var(--light);
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        /* Ultra Modern Navigation */
        .navbar {
            background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.95) 0%, 
                rgba(248, 250, 252, 0.95) 50%, 
                rgba(255, 255, 255, 0.95) 100%);
            backdrop-filter: blur(25px) saturate(180%);
            border: none;
            border-bottom: 1px solid rgba(99, 102, 241, 0.08);
            box-shadow: 
                0 8px 32px rgba(99, 102, 241, 0.12),
                0 4px 16px rgba(0, 0, 0, 0.04),
                inset 0 1px 0 rgba(255, 255, 255, 0.8);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 1.2rem 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            position: relative;
        }

        .navbar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(99, 102, 241, 0.6) 20%, 
                rgba(168, 85, 247, 0.6) 50%, 
                rgba(236, 72, 153, 0.6) 80%, 
                transparent 100%);
            animation: borderGlow 3s ease-in-out infinite;
        }

        .navbar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
                rgba(99, 102, 241, 0.02) 0%, 
                rgba(168, 85, 247, 0.01) 50%, 
                rgba(236, 72, 153, 0.02) 100%);
            pointer-events: none;
        }

        .navbar.scrolled {
            background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.98) 0%, 
                rgba(248, 250, 252, 0.98) 50%, 
                rgba(255, 255, 255, 0.98) 100%);
            box-shadow: 
                0 12px 40px rgba(99, 102, 241, 0.15),
                0 6px 20px rgba(0, 0, 0, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.9);
            padding: 0.8rem 0;
            backdrop-filter: blur(30px) saturate(200%);
            transform: translateY(0);
        }

        @keyframes borderGlow {
            0%, 100% { opacity: 0.6; transform: scaleX(1); }
            50% { opacity: 1; transform: scaleX(1.02); }
        }

        .navbar-brand {
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            padding: 0.25rem 0.5rem;
        }

        .navbar-brand:hover {
            transform: scale(1.02) translateY(-1px);
        }
        }

        /* Bold Logo Enhancements */
        .logo-text {
            font-weight: 900;
            font-size: 2.1rem;
            letter-spacing: -0.01em;
            display: flex;
            align-items: center;
            gap: 0.7rem;
            position: relative;
        }
        .logo-badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            box-shadow: 0 6px 18px rgba(99, 102, 241, 0.18);
            border: 1.5px solid rgba(255,255,255,0.7);
        }
        .logo-badge i {
            font-size: 1.2rem;
            line-height: 1;
        }
        .logo-wordmark {
            font-family: inherit;
            font-weight: 900;
            letter-spacing: -0.01em;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 60%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 200% 200%;
            animation: logoGradient 3s ease-in-out infinite;
            text-transform: uppercase;
            font-size: 1.25em;
            line-height: 1;
            text-shadow: 0 2px 8px rgba(99, 102, 241, 0.10);
        }
        @media (max-width: 768px) { .logo-text { font-size: 1.6rem; } }
        @media (max-width: 576px) { .logo-text { font-size: 1.3rem; } }

        .motto-text {
            font-size: 0.65rem;
            font-weight: 600;
            background: var(--gradient-2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-transform: none;
            letter-spacing: 0.1em;
            animation: cookingFast 2s ease-in-out infinite;
            position: relative;
            text-align: center;
        }

        @keyframes cookingFast {
            0% { 
                transform: translateX(0) scale(1);
                opacity: 1;
            }
            25% { 
                transform: translateX(2px) scale(1.05);
                opacity: 0.9;
            }
            50% { 
                transform: translateX(-2px) scale(1.1);
                opacity: 0.8;
            }
            75% { 
                transform: translateX(1px) scale(1.05);
                opacity: 0.9;
            }
            100% { 
                transform: translateX(0) scale(1);
                opacity: 1;
            }
        }

        .motto-text::before {
            content: '🔥';
            position: absolute;
            left: -15px;
            animation: flame 1.5s ease-in-out infinite;
        }

        .motto-text::after {
            content: '⚡';
            position: absolute;
            right: -15px;
            animation: lightning 1.8s ease-in-out infinite;
        }

        @keyframes flame {
            0%, 100% { 
                opacity: 0.7;
                transform: scale(0.8) rotate(-5deg);
            }
            50% { 
                opacity: 1;
                transform: scale(1.2) rotate(5deg);
            }
        }

        @keyframes lightning {
            0%, 100% { 
                opacity: 0.6;
                transform: scale(0.9) rotate(10deg);
            }
            50% { 
                opacity: 1;
                transform: scale(1.1) rotate(-10deg);
            }
        }
        }

        /* Clean Navigation Links */
        .navbar-nav {
            position: relative;
        }

        .navbar-nav .nav-link {
            font-weight: 500;
            color: var(--dark) !important;
            margin: 0 0.5rem;
            padding: 0.75rem 1.5rem !important;
            border-radius: 25px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            font-size: 0.9rem;
            overflow: hidden;
            background: transparent;
            border: none;
        }

        .navbar-nav .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, 
                rgba(99, 102, 241, 0.08) 0%, 
                rgba(168, 85, 247, 0.06) 100%);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: -1;
            border-radius: 25px;
        }

        .navbar-nav .nav-link::after {
            content: '';
            position: absolute;
            bottom: 2px;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, 
                var(--primary) 0%, 
                var(--secondary) 100%);
            border-radius: 1px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform: translateX(-50%);
        }

        .navbar-nav .nav-link:hover {
            color: var(--primary) !important;
            transform: translateY(-1px);
        }

        .navbar-nav .nav-link:hover::before {
            left: 0;
        }

        .navbar-nav .nav-link:hover::after {
            width: 70%;
        }

        .navbar-nav .nav-link.active {
            color: var(--primary) !important;
            font-weight: 600;
            background: rgba(99, 102, 241, 0.08);
            border-radius: 25px;
        }

        .navbar-nav .nav-link.active::before {
            left: 0;
            background: rgba(99, 102, 241, 0.06);
        }

        .navbar-nav .nav-link.active::after {
            width: 80%;
            background: var(--primary);
        }

        /* Mobile Menu Toggle */
        .navbar-toggler {
            border: none;
            padding: 0.5rem;
            border-radius: 8px;
            background: transparent;
            transition: all 0.3s ease;
        }

        .navbar-toggler:hover {
            background: rgba(99, 102, 241, 0.08);
            transform: scale(1.05);
        }

        .navbar-toggler:focus {
            box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }

        /* More Interesting Hero Section */
        .hero-section {
            min-height: 100vh;
            position: relative;
            display: flex;
            align-items: center;
            overflow: hidden;
            background: linear-gradient(135deg, 
                rgba(249, 250, 251, 0.95) 0%, 
                rgba(243, 244, 246, 0.92) 25%, 
                rgba(229, 231, 235, 0.90) 50%, 
                rgba(243, 244, 246, 0.92) 75%, 
                rgba(249, 250, 251, 0.95) 100%);
            background-size: 400% 400%;
            animation: lightGradientShift 20s ease infinite;
        }

        .hero-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 60%),
                radial-gradient(circle at 40% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 70%),
                linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.03) 50%, transparent 70%);
            z-index: 1;
            animation: float 25s ease-in-out infinite;
        }

        .hero-section .container {
            position: relative;
            z-index: 2;
        }

        .hero-content {
            z-index: 3;
        }

        .hero-title {
            font-size: clamp(2.5rem, 8vw, 4rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            color: #1f2937;
            position: relative;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .hero-title .text-gradient {
            background: linear-gradient(135deg, 
                #3b82f6 0%, 
                #8b5cf6 25%, 
                #6366f1 50%, 
                #3b82f6 75%,
                #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 200% 200%;
            animation: lightGradientText 4s ease-in-out infinite;
            position: relative;
            filter: drop-shadow(0 2px 8px rgba(59, 130, 246, 0.2));
        }

        .hero-title .text-gradient::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
                rgba(59, 130, 246, 0.1) 0%, 
                rgba(139, 92, 246, 0.08) 50%, 
                rgba(99, 102, 241, 0.1) 100%);
            filter: blur(20px);
            opacity: 0;
            animation: lightGlow 4s ease-in-out infinite;
            z-index: -1;
        }

        .hero-subtitle {
            font-size: 1.25rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            color: #4b5563;
            font-weight: 400;
            position: relative;
            animation: fadeInUp 1s ease-out 0.3s both;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        /* Floating Elements */
        .hero-floating-elements {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            pointer-events: none;
        }

        .floating-shape {
            position: absolute;
            border-radius: 50%;
            background: linear-gradient(135deg, 
                rgba(99, 102, 241, 0.15) 0%, 
                rgba(168, 85, 247, 0.12) 100%);
            animation: floatingShapes 15s ease-in-out infinite;
        }

        .floating-shape:nth-child(1) {
            width: 60px;
            height: 60px;
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-shape:nth-child(2) {
            width: 40px;
            height: 40px;
            top: 60%;
            right: 15%;
            animation-delay: 2s;
        }

        .floating-shape:nth-child(3) {
            width: 80px;
            height: 80px;
            bottom: 30%;
            left: 5%;
            animation-delay: 4s;
        }

        .floating-shape:nth-child(4) {
            width: 30px;
            height: 30px;
            top: 15%;
            right: 25%;
            animation-delay: 1s;
        }

        /* Interactive Grid Pattern */
        .hero-grid {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                linear-gradient(rgba(99, 102, 241, 0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridShift 30s linear infinite;
            z-index: 1;
        }

        /* Enhanced Animations */
        @keyframes lightGradientShift {
            0%, 100% { background-position: 0% 50%; }
            25% { background-position: 100% 50%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 0% 100%; }
        }

        @keyframes lightGradientText {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        @keyframes lightGlow {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.3; }
        }

        @keyframes elegantGradientShift {
            0%, 100% { background-position: 0% 50%; }
            25% { background-position: 100% 50%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 0% 100%; }
        }

        @keyframes subtleGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        @keyframes subtleGlow {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.3; }
        }

        @keyframes vibrantGradientShift {
            0%, 100% { background-position: 0% 50%; }
            25% { background-position: 100% 50%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 0% 100%; }
        }

        @keyframes whiteGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        @keyframes whiteGlow {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.4; }
        }

        @keyframes subtleGradientShift {
            0%, 100% { background-position: 0% 50%; }
            25% { background-position: 100% 50%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 0% 100%; }
        }

        @keyframes titleGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        @keyframes titleGlow {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.3; }
        }

        @keyframes floatingShapes {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg) scale(1);
                opacity: 0.1;
            }
            25% { 
                transform: translateY(-20px) rotate(90deg) scale(1.1);
                opacity: 0.2;
            }
            50% { 
                transform: translateY(-10px) rotate(180deg) scale(0.9);
                opacity: 0.15;
            }
            75% { 
                transform: translateY(-30px) rotate(270deg) scale(1.05);
                opacity: 0.25;
            }
        }

        @keyframes gridShift {
            0% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(-25px) translateY(-25px); }
            50% { transform: translateX(-50px) translateY(0); }
            75% { transform: translateX(-25px) translateY(25px); }
            100% { transform: translateX(0) translateY(0); }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            33% { transform: translateY(-5px) scale(1.02); }
            66% { transform: translateY(3px) scale(0.98); }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero-buttons {
            margin-bottom: 3rem;
        }

        .btn-outline-custom {
            background: rgba(99, 102, 241, 0.08);
            border: 2px solid rgba(99, 102, 241, 0.3);
            color: var(--primary);
            padding: 0.875rem 2rem;
            font-weight: 600;
            border-radius: 12px;
            transition: all 0.4s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            backdrop-filter: blur(10px);
        }

        .btn
            background: rgba(99, 102, 241, 0.15);
            border-color: rgba(99, 102, 241, 0.5);
            color: var(--primary);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
        }

        /* Hero Stats */
        .hero-stats {
            opacity: 1;
        }

        .stat-item {
            padding: 1rem;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-label {
            color: #4b5563;
            font-size: 0.9rem;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* Hero Visual Elements */
        .hero-visual {
            position: relative;
            height: 600px;
        }

        .floating-elements {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .hero-main-card {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 350px;
            height: 250px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(99, 102, 241, 0.15);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(99, 102, 241, 0.15);
        }

        .card-header {
            padding: 1rem;
            border-bottom: 1px solid rgba(99, 102, 241, 0.1);
            background: rgba(248, 250, 252, 0.8);
        }

        .traffic-lights {
            display: flex;
            gap: 8px;
        }

        .light {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .light.red { background: #ff5f57; }
        .light.yellow { background: #ffbd2e; }
        .light.green { background: #28ca42; }

        .card-content {
            padding: 1.5rem;
        }

        .code-lines {
            font-family: 'Fira Code', monospace;
            font-size: 0.9rem;
            line-height: 1.6;
        }

        .code-line {
            color: #374151;
            margin-bottom: 0.5rem;
        }

        .code-keyword { color: #8b5cf6; }
        .code-function { color: #3b82f6; }
        .code-string { color: #10b981; }

        /* Floating Tech Icons */
        .floating-tech {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .tech-icon {
            position: absolute;
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            font-size: 1.5rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.12);
        }

        .tech-icon:hover {
            transform: translateY(-5px) scale(1.1);
            background: rgba(99, 102, 241, 0.1);
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
        }

        .tech-1 { top: 20%; left: 10%; }
        .tech-2 { top: 10%; right: 20%; }
        .tech-3 { bottom: 30%; left: 5%; }
        .tech-4 { bottom: 10%; right: 10%; }

        /* Enhanced Hero Visual Elements */
        .hero-main-card {
            animation: cardFloat 6s ease-in-out infinite;
        }

        .card-title {
            color: var(--primary);
            font-size: 0.9rem;
            font-weight: 600;
        }

        .traffic-lights .light {
            animation: lightPulse 2s ease-in-out infinite;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .light.red { animation-delay: 0s; }
        .light.yellow { animation-delay: 0.3s; }
        .light.green { animation-delay: 0.6s; }

        .code-line {
            animation: typeWriter 3s ease-in-out infinite;
        }

        .code-variable { color: #06b6d4; }
        .code-property { color: #8b5cf6; }
        .code-boolean { color: #f59e0b; }
        .code-comment { color: #6b7280; }

        /* Enhanced Tech Icons with Tooltips */
        .tech-icon {
            animation: techFloat 8s ease-in-out infinite;
        }

        .tech-1 { animation-delay: 0s; }
        .tech-2 { animation-delay: 1s; }
        .tech-3 { animation-delay: 2s; }
        .tech-4 { animation-delay: 3s; }
        .tech-5 { 
            top: 60%; 
            left: 25%; 
            animation-delay: 4s; 
        }
        .tech-6 { 
            top: 40%; 
            right: 5%; 
            animation-delay: 5s; 
        }

        .tech-icon[data-tooltip]:hover::after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: -35px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.8rem;
            white-space: nowrap;
            animation: fadeIn 0.3s ease;
            z-index: 10;
        }



        /* Enhanced Stats with Animation */
        .stat-number[data-count] {
            animation: counterGlow 3s ease-in-out infinite;
        }

        /* Enhanced Scroll Indicator */
        .scroll-indicator {
            animation: scrollBounce 2s ease-in-out infinite;
        }

        .scroll-arrow {
            margin-top: 5px;
            animation: arrowBounce 2s ease-in-out infinite;
        }

        /* Enhanced Floating Animation */
        .floating {
            animation: floating 6s ease-in-out infinite;
        }

        /* Additional Hero Animations */
        @keyframes cardFloat {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-10px); }
        }

        @keyframes lightPulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 10px currentColor; }
            50% { opacity: 0.6; box-shadow: 0 0 20px currentColor; }
        }

        @keyframes typeWriter {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        @keyframes techFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-15px) rotate(5deg); }
            75% { transform: translateY(-8px) rotate(-5deg); }
        }

        @keyframes counterGlow {
            0%, 100% { text-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
            50% { text-shadow: 0 0 30px rgba(99, 102, 241, 0.6); }
        }

        @keyframes scrollBounce {
            0%, 100% { transform: translateX(-50%) translateY(0px); }
            50% { transform: translateX(-50%) translateY(-10px); }
        }

        @keyframes arrowBounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(5px); }
        }

        @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-50%) translateY(10px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* Enhanced CTA Section Styles */
        .enhanced-cta-section {
            position: relative;
            padding: 6rem 0;
            overflow: hidden;
            background: linear-gradient(135deg, 
                rgba(99, 102, 241, 0.95) 0%, 
                rgba(168, 85, 247, 0.90) 50%, 
                rgba(236, 72, 153, 0.95) 100%);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
        }

        .cta-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="ctaPattern" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="2" fill="%23ffffff" opacity="0.1"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/></circle></pattern></defs><rect width="100" height="100" fill="url(%23ctaPattern)"/></svg>');
            z-index: 1;
        }

        .cta-floating-elements {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }

        .cta-floating-elements .floating-shape {
            background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.15) 0%, 
                rgba(255, 255, 255, 0.08) 100%);
        }

        .cta-floating-elements .floating-shape:nth-child(1) {
            width: 80px;
            height: 80px;
            top: 15%;
            left: 8%;
            animation-delay: 0s;
        }

        .cta-floating-elements .floating-shape:nth-child(2) {
            width: 60px;
            height: 60px;
            top: 70%;
            right: 
            height: 40px;
            bottom: 20%;
            left: 15%;
            animation-delay: 4s;
        }

        .cta-content {
            position: relative;
            z-index: 2;
        }

        .cta-badge {
            display: inline-flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            padding: 0.75rem 1.5rem;
            color: #ffffff;
            font-size: 0.9rem;
            font-weight: 600;
            animation: floating 6s ease-in-out infinite;
        }

        .cta-badge i {
            color: #fbbf24;
        }

        .cta-title {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            font-weight: 800;
            color: #ffffff;
            line-height: 1.2;
            margin-bottom: 1.5rem;
        }

        .cta-title .text-gradient {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientText 4s ease-in-out infinite;
        }

        .cta-subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
        }

        .cta-stats {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 2rem;
            margin: 3rem auto;
        }

        .cta-stats .stat-item {
            padding: 1rem;
        }

        .stat-icon {
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            color: #fbbf24;
            font-size: 1.5rem;
            animation: floating 6s ease-in-out infinite;
        }

        .stat-icon:nth-child(1) { animation-delay: 0s; }
        .stat-icon:nth-child(2) { animation-delay: 1s; }
        .stat-icon:nth-child(3) { animation-delay: 2s; }

        .cta-stats .stat-number {
            font-size: 2rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 0.5rem;
        }

        .cta-stats .stat-label {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0;
        }

        .cta-buttons {
            margin: 2rem 0;
        }

        .cta-features {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.95rem;
            font-weight: 500;
            padding: 1rem;
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .feature-item:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
        }

        .feature-item i {
            color: #fbbf24;
            font-size: 1.2rem;
        }

        /* Enhanced Button Styles for CTA */
        .btn-outline-custom {
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.8);
            color: #ffffff;
            padding: 0.875rem 2rem;
            font-weight: 600;
            border-radius: 12px;
            transition: all 0.4s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            backdrop-filter: blur(10px);
        }

        .btn-outline-custom:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: #ffffff;
            color: #ffffff;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        @keyframes gradientText {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        /* Responsive CTA Section */
        @media (max-width: 768px) {
            .enhanced-cta-section {
                padding: 4rem 0;
            }
            
            .cta-stats {
                padding: 1.5rem;
                margin: 2rem auto;
            }
            
            .cta-features {
                padding: 1.5rem;
            }
            
            .feature-item {
                font-size: 0.85rem;
                padding: 0.75rem;
            }
            
            .stat-icon {
                width: 50px;
                height: 50px;
                font-size: 1.2rem;
            }
            
            .cta-stats .stat-number {
                font-size: 1.5rem;
            }
        }

        /* Services Page Specific Styles */
        .service-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(99, 102, 241, 0.1);
            border-radius: 20px;
            padding: 2.5rem;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .service-card:hover::before {
            transform: scaleX(1);
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }

        .service-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            margin-bottom: 1.5rem;
            transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
            transform: scale(1.1) rotate(5deg);
        }

        .service-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 1rem;
        }

        .service-description {
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        .service-features {
            list-style: none;
            padding: 0;
            margin-bottom: 1.5rem;
        }

        .service-features li {
            padding: 0.5rem 0;
            color: #374151;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .service-features i {
            color: var(--primary);
            font-size: 0.9rem;
        }

        .service-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tech-tag {
            background: rgba(99, 102, 241, 0.1);
            color: var(--primary);
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        /* Process Section Styles */
        .process-step {
            text-align: center;
            position: relative;
            padding: 2rem 1rem;
        }

        .process-number {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.2rem;
        }

        .process-icon {
            width: 80px;
            height: 80px;
            background: rgba(99, 102, 241, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 2rem auto 1.5rem;
            color: var(--primary);
            font-size: 1.8rem;
            transition: all 0.3s ease;
        }

        .process-step:hover .process-icon {
            background: var(--primary);
            color: white;
            transform: scale(1.1);
        }

        .process-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 1rem;
        }

        .process-description {
            color: #6b7280;
            line-height: 1.6;
        }

        /* Feature List Styles */
        .feature-list {
            margin-top: 2rem;
        }

        .feature-list .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 15px;
            transition: all 0.3s ease;
        }

        .feature-list .feature-item:hover {
            background: rgba(255, 255, 255, 1);
            transform: translateX(10px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
        }

        .feature-list .feature-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
            flex-shrink: 0;
        }

        .feature-content h5 {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }

        .feature-content p {
            color: #6b7280;
            margin: 0;
            line-height: 1.5;
        }

        /* Stats Grid Styles */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .stat-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(99, 102, 241, 0.1);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(99, 102, 241, 0.15);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            color: #6b7280;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* Responsive Services Styles */
        @media (max-width: 768px) {
            .service-card {
                padding: 2rem;
            }
            
            .service-icon {
                width: 60px;
                height: 60px;
                font-size: 1.5rem;
            }
            
            .process-step {
                padding: 1.5rem 0.5rem;
            }
            
            .process-icon {
                width: 60px;
                height: 60px;
                font-size: 1.5rem;
            }
            
            .stats-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .stat-card {
                padding: 1.5rem;
            }
            
            .feature-list .feature-item {
                padding: 1rem;
            }
        }

        /* Enhanced Hero Meta Elements */
        .hero-meta {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }

        .meta-badge {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(99, 102, 241, 0.15);
            border-radius: 12px;
            padding: 0.75rem 1.5rem;
            color: #374151;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
            animation: floating 6s ease-in-out infinite;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .meta-badge:hover {
            background: rgba(255, 255, 255, 1);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.15);
            border-color: rgba(99, 102, 241, 0.25);
        }

        .meta-badge i {
            color: #3b82f6;
        }

        .meta-badge strong {
            color: #1f2937;
        }

        /* Page-specific Hero Adjustments */
        .hero-section .hero-content {
            animation: fadeInUp 1s ease-out both;
        }

        @media (max-width: 768px) {
            .hero-meta {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
            
            .meta-badge {
                padding: 0.6rem 1.2rem;
                font-size: 0.85rem;
            }
        }

        /* Scroll Indicator */
        .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            color: #374151;
            z-index: 3;
        }

        .scroll-mouse {
            width: 24px;
            height: 40px;
            border: 2px solid #6b7280;
            border-radius: 12px;
            position: relative;
            margin: 0 auto 0.5rem;
        }

        .scroll-wheel {
            width: 3px;
            height: 8px;
            background: rgba(168, 85, 247, 0.8);
            border-radius: 2px;
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            animation: scroll-wheel 2s infinite;
        }

        @keyframes scroll-wheel {
            0% { opacity: 1; top: 8px; }
            50% { opacity: 0.5; top: 16px; }
            100% { opacity: 1; top: 8px; }
        }

        .scroll-indicator span {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #4b5563;
        }

        @keyframes subtleGradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .hero-title {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 200% 200%;
            animation: gradientMove 6s ease-in-out infinite;
            margin-bottom: 1.5rem;
            line-height: 1.2;
            position: relative;
            z-index: 2;
        }

        @keyframes gradientMove {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--gray);
            margin-bottom: 2rem;
            opacity: 0.9;
            position: relative;
            z-index: 2;
            animation: fadeInUp 1s ease-out 0.3s both;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Scroll Reveal Animations */
        .scroll-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }

        /* Enhanced Cards */
        .card-custom {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            box-shadow: 
                0 8px 32px rgba(31, 38, 135, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            position: relative;
        }

        .card-custom::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
            border-radius: 20px;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .card-custom:hover {
            transform: translateY(-8px);
            box-shadow: 
                0 20px 40px rgba(31, 38, 135, 0.25),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .card-custom:hover::before {
            opacity: 0.1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }

        .hero-title {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            line-height: 1.2;
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: slideInUp 0.8s ease-out;
        }

        .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            color: var(--gray);
            font-weight: 400;
            animation: slideInUp 0.8s ease-out 0.2s both;
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Modern Buttons */
        .btn-primary-custom {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border: none;
            padding: 0.875rem 2.5rem;
            font-weight: 600;
            border-radius: 12px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            color: var(--white);
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .btn-primary-custom::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--secondary), var(--accent));
            transition: all 0.4s ease;
            z-index: -1;
        }

        .btn-primary-custom:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
            color: var(--white);
        }

        .btn-primary-custom:hover::before {
            left: 100%;
        }
            align-items: center;
            gap: 0.5rem;
            color: white;
            font-size: 0.95rem;
            box-shadow: var(--shadow-md);
            position: relative;
            overflow: hidden;
        }

        .btn-primary-custom::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .btn-primary-custom:hover::before {
            left: 100%;
        }

        .btn-primary-custom:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
            color: white;
        }

        .btn-outline-primary {
            border: 2px solid var(--primary);
            background: transparent;
            color: var(--primary);
            border-radius: 12px;
            padding: 0.75rem 2rem;
            font-weight: 600;
            transition: all 0.3s ease;
            font-size: 0.95rem;
            position: relative;
            overflow: hidden;
        }

        .btn-outline-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: var(--primary);
            transition: width 0.3s ease;
            z-index: -1;
        }

        .btn-outline-primary:hover::before {
            width: 100%;
        }

        .btn-outline-primary:hover {
            color: white;
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        /* Modern Section Styles */
        .section {
            padding: 3rem 0;
            position: relative;
        }

        .section-title {
            font-size: 2rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 1rem;
            color: var(--dark);
            line-height: 1.2;
            animation: fadeInUp 0.8s ease-out;
        }

        .section-subtitle {
            text-align: center;
            font-size: 1rem;
            color: var(--gray);
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 400;
            animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Modern Cards */
        .card-custom {
            border: none;
            border-radius: 16px;
            background: var(--white);
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
            height: 100%;
            overflow: hidden;
            position: relative;
            border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .card-custom::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: var(--gradient-1);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .card-custom:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
        }

        .card-custom:hover::before {
            opacity: 1;
        }

        .card-icon {
            width: 60px;
            height: 60px;
            background: var(--gradient-1);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            color: white;
            font-size: 1.5rem;
            box-shadow: var(--shadow-md);
            animation: bounceIn 0.8s ease-out;
        }

        @keyframes bounceIn {
            0% {
                opacity: 0;
                transform: scale(0.3);
            }
            50% {
                opacity: 1;
                transform: scale(1.05);
            }
            70% {
                transform: scale(0.9);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        /* Background sections */
        .bg-light {
            background: var(--bg-secondary) !important;
        }

        .bg-primary {
            background: var(--gradient-primary) !important;
        }

        /* Modern Footer */
        .footer {
            background: var(--dark);
            color: var(--light);
            padding: 2rem 0 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer h5 {
            color: var(--white);
            margin-bottom: 1rem;
            font-weight: 700;
            font-size: 1rem;
        }

        .footer a {
            color: var(--gray);
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 500;
            font-size: 0.9rem;
        }

        .footer a:hover {
            color: var(--primary);
            transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .navbar {
                padding: 0.8rem 0;
            }

            .navbar-brand {
                font-size: 1.4rem;
                padding: 0.25rem 0.5rem;
            }

            .logo-text {
                font-size: 1.4rem;
            }

            .navbar-nav .nav-link {
                margin: 0.25rem 0;
                padding: 0.75rem 1.25rem !important;
                text-align: center;
                border-radius: 12px;
            }

            /* Mobile Menu Animation */
            .collapsing {
                transition: all 0.3s ease;
            }

            .hero-section {
                min-height: 80vh;
                padding: 2rem 0;
            }

            .hero-title {
                font-size: 2.5rem;
                margin-bottom: 1rem;
            }

            .hero-subtitle {
                font-size: 1.1rem;
                margin-bottom: 1.5rem;
            }

            .hero-buttons {
                flex-direction: column;
                gap: 1rem;
                margin-bottom: 2rem;
            }

            .btn-primary-custom,
            .btn-outline-custom {
                width: 100%;
                justify-content: center;
            }

            .hero-visual {
                height: 300px;
                margin-top: 2rem;
            }

            .hero-main-card {
                width: 280px;
                height: 200px;
            }

            .tech-icon {
                width: 50px;
                height: 50px;
                font-size: 1.2rem;
            }

            .hero-stats {
                margin-top: 2rem;
            }

            .stat-number {
                font-size: 1.5rem;
            }

            .scroll-indicator {
                display: none;
            }
            
            .section {
                padding: 2rem 0;
            }
            
            .section-title {
                font-size: 1.75rem;
            }

            .motto-text {
                font-size: 0.7rem;
            }

            .stats-number {
                font-size: 2rem;
            }

            .btn-primary-custom,
            .btn-outline-primary {
                padding: 0.6rem 1.5rem;
                font-size: 0.9rem;
            }
        }

        @media (max-width: 576px) {
            .hero-title {
                font-size: 2rem;
                line-height: 1.2;
            }

            .hero-subtitle {
                font-size: 1rem;
            }

            .hero-main-card {
                width: 250px;
                height: 180px;
            }

            .code-lines {
                font-size: 0.8rem;
            }

            .tech-icon {
                width: 45px;
                height: 45px;
                font-size: 1rem;
            }

            .btn-primary-custom,
            .btn-outline-custom {
                padding: 0.75rem 1.5rem;
                font-size: 0.9rem;
            }
        }

        /* Modern Utilities */
        .text-gradient {
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .bg-blur {
            backdrop-filter: blur(20px);
            background: rgba(255, 255, 255, 0.9);
        }

        .animate-bounce {
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
                animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                transform: translate3d(0,0,0);
            }
            40%, 43% {
                animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
                transform: translate3d(0, -8px, 0);
            }
            70% {
                animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
                transform: translate3d(0, -4px, 0);
            }
            90% {
                transform: translate3d(0, -2px, 0);
            }
        }

        /* Scroll Animations */
        .scroll-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }

        .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }

        /* Remove old styles */

        /* Stats counter animation */
        .stats-number {
            font-size: 4rem;
            font-weight: 800;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
        }

        /* Gradient text */
        .gradient-text {
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Social links */
        .social-links a {
            width: 50px;
            height: 50px;
            background: var(--bg-secondary);
            border-radius: 16px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            text-decoration: none;
        }

        .social-links a:hover {
            background: var(--gradient-primary);
            color: white;
            transform: translateY(-3px);
            box-shadow: var(--shadow-medium);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }
            
            .hero-section {
                padding: 5rem 0 3rem;
            }
            
            .section {
                padding: 4rem 0;
            }
            
            .section-title {
                font-size: 2.25rem;
            }
            
            .stats-number {
                font-size: 3rem;
            }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--bg-light);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--gradient-primary);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--gradient-secondary);
        }

        /* Site-wide Subtle Background (Sea Breeze) */
        .site-bg {
            position: fixed;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
        }
        .site-bg .bg-waves { position: absolute; inset: -12vh -12vw; }
        .site-bg .bg-waves::before,
        .site-bg .bg-waves::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
            opacity: 0.6;
            will-change: transform;
        }
        .site-bg .bg-waves::before {
            width: 70vw;
            height: 70vw;
            top: -22vw;
            left: -10vw;
            background: radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0) 60%);
            animation: driftA 65s ease-in-out infinite alternate;
               }
        .site-bg .bg-waves::after {
            width: 60vw;
            height: 60vw;
            bottom: -26vw;
            right: -12vw;
            background: radial-gradient(circle, rgba(139,92,246,0.09) 0%, rgba(139,92,246,0) 60%);
            animation: driftB 75s ease-in-out infinite alternate;
        }
        @keyframes driftA {
            0% { transform: translate3d(0,0,0) scale(1); }
            100% { transform: translate3d(4vw, 2vh, 0) scale(1.05); }
        }
        @keyframes driftB {
            0% { transform: translate3d(0,0,0) scale(1); }
            100% { transform: translate3d(-3vw, -2vh, 0) scale(1.08); }
        }

        .site-bg .bg-bubbles { position: absolute; inset: 0; }
        .site-bg .bubble {
            position: absolute;
            bottom: -12vh;
            left: var(--x, 50%);
            width: var(--size, 14px);
            height: var(--size, 14px);
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.70), rgba(255,255,255,0.25) 60%, rgba(255,255,255,0) 70%);
            border: 1px solid rgba(255,255,255,0.35);
            border-radius: 50%;
            box-shadow: 0 2px 10px rgba(99,102,241,0.08);
            opacity: 0.25;
            animation: bubbleRise var(--dur, 40s) linear infinite;
            animation-delay: var(--delay, 0s);
            will-change: transform, opacity;
        }
        @keyframes bubbleRise {
            0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0; }
            10% { opacity: 0.25; }
            90% { opacity: 0.15; }
            100% { transform: translate3d(0, -120vh, 0) scale(1.05); opacity: 0; }
        }
        /* Bubble layout (12 light bubbles) */
        .site-bg .bg-bubbles .bubble:nth-child(1) { --x: 8%;  --size: 12px; --dur: 42s; --delay: -2s; }
        .site-bg .bg-bubbles .bubble:nth-child(2) { --x: 18%; --size: 16px; --dur: 48s; --delay: -10s; }
        .site-bg .bg-bubbles .bubble:nth-child(3) { --x: 28%; --size: 10px; --dur: 36s; --delay: -4s; }
        .site-bg .bg-bubbles .bubble:nth-child(4) { --x: 38%; --size: 14px; --dur: 44s; --delay: -20s; }
        .site-bg .bg-bubbles .bubble:nth-child(5) { --x: 48%; --size: 12px; --dur: 52s; --delay: -8s; }
        .site-bg .bg-bubbles .bubble:nth-child(6) { --x: 58%; --size: 18px; --dur: 55s; --delay: -16s; }
        .site-bg .bg-bubbles .bubble:nth-child(7) { --x: 68%; --size: 11px; --dur: 38s; --delay: -6s; }
        .site-bg .bg-bubbles .bubble:nth-child(8) { --x: 78%; --size: 15px; --dur: 46s; --delay: -12s; }
        .site-bg .bg-bubbles .bubble:nth-child(9) { --x: 88%; --size: 13px; --dur: 50s; --delay: -18s; }
        .site-bg .bg-bubbles .bubble:nth-child(10){ --x: 22%; --size: 9px;  --dur: 35s; --delay: -14s; }
        .site-bg .bg-bubbles .bubble:nth-child(11){ --x: 66%; --size: 10px; --dur: 40s; --delay: -22s; }
        .site-bg .bg-bubbles .bubble:nth-child(12){ --x: 82%; --size: 12px; --dur: 45s; --delay: -26s; }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
            .site-bg *, .hero-section, .hero-grid { animation: none !important; }
        }
    </style>
    
    @stack('styles')
</head>
<body>

    <!-- Subtle Background Layers -->
    <div class="site-bg" aria-hidden="true">
        <div class="bg-waves"></div>
        <div class="bg-bubbles">
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
        </div>
    </div>

    <!-- Modern Navigation -->
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="{{ route('home') }}">
                <div class="logo-text" style="flex-direction: row; align-items: center; gap: 0.7rem; display: flex;">
                    <span class="logo-badge"><i class="fas fa-bolt"></i></span>
                    <span class="logo-wordmark" style="display: flex; flex-direction: column; align-items: flex-start;">
                        BOYLAR
                        <span class="motto-text" style="font-size:0.62em; margin-top:0.08em; margin-left:0.12em; text-align:left; line-height:1.1; font-weight: 500; letter-spacing: 0.01em; opacity: 0.7;">Do Fast</span>
                    </span>
                </div>
            </a>
            
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}" href="{{ route('home') }}">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('about') ? 'active' : '' }}" href="{{ route('about') }}">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('services') ? 'active' : '' }}" href="{{ route('services') }}">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('portfolio') ? 'active' : '' }}" href="{{ route('portfolio') }}">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ request()->routeIs('contact') ? 'active' : '' }}" href="{{ route('contact') }}">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main>
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <h5><i class="fas fa-code me-2"></i>Boylar</h5>
                    <p class="mb-3">Professional IT solutions for modern businesses. We transform ideas into powerful digital experiences.</p>
                    <div class="social-links">
                        <a href="#" class="me-3"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="me-3"><i class="fab fa-github"></i></a>
                        <a href="#" class="me-3"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 mb-4">
                    <h5>Services</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Mobile Apps</a></li>
                        <li><a href="#">Cloud Solutions</a></li>
                        <li><a href="#">Consulting</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4">
                    <h5>Company</h5>
                    <ul class="list-unstyled">
                        <li><a href="{{ route('about') }}">About Us</a></li>
                        <li><a href="{{ route('portfolio') }}">Portfolio</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="{{ route('contact') }}">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 mb-4">
                    <h5>Get In Touch</h5>
                    <p><i class="fas fa-envelope me-2"></i>dev.mosaraf@gmail.com</p>
                    <p><i class="fas fa-phone me-2"></i>01943696858</p>
                    <p><i class="fas fa-map-marker-alt me-2"></i>47/e, Indira Road, Farmgate, Dhaka</p>
                </div>
            </div>
            <hr class="my-4" style="border-color: #374151;">
            <div class="row">
                <div class="col-md-6">
                    <p>&copy; {{ date('Y') }} Boylar. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="{{ route('privacy') }}" class="me-3">Privacy Policy</a>
                    <a href="{{ route('terms') }}">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        // Modern smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Modern navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // Initialize animations when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Add scroll reveal to elements
            const elements = document.querySelectorAll('.card-custom, .stats-card, .section-title, .section-subtitle');
            elements.forEach((el, index) => {
                el.classList.add('scroll-reveal');
                el.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(el);
            });

            // Add stagger animation to cards
            const cards = document.querySelectorAll('.card-custom');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
            });
        });

        // Add typing effect for hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }
    </script>
    
    @stack('scripts')
</body>
</html>
