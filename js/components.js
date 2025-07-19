// Component functions that render HTML

function renderHeader() {
    return `
        <header class="glass-nav">
            <nav class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center gap-2 group">
                        <div class="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
                            <span class="text-white font-bold text-xl">L</span>
                        </div>
                        <span class="text-2xl font-bold text-gradient">LetsClubTogether</span>
                    </a>
                    
                    <div class="hidden md:flex items-center gap-8">
                        <a href="how-it-works.html" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            How It Works
                        </a>
                        <a href="organizations.html" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            For Organizations
                        </a>
                        <a href="suppliers.html" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            For Suppliers
                        </a>
                        <a href="about.html" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            About
                        </a>
                    </div>
                    
                    <div class="hidden md:flex items-center gap-4">
                        <a href="login.html" class="btn btn-secondary">
                            Log In
                        </a>
                        <a href="register-organization.html" class="btn btn-primary">
                            Get Started
                        </a>
                    </div>
                    
                    <button class="md:hidden p-2" id="mobile-menu-toggle">
                        <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="mobile-menu mt-4 pb-4 border-t border-gray-200 pt-4">
                    <div class="flex flex-col gap-4">
                        <a href="how-it-works.html" class="text-gray-600 hover:text-gray-900 font-medium">
                            How It Works
                        </a>
                        <a href="organizations.html" class="text-gray-600 hover:text-gray-900 font-medium">
                            For Organizations
                        </a>
                        <a href="suppliers.html" class="text-gray-600 hover:text-gray-900 font-medium">
                            For Suppliers
                        </a>
                        <a href="about.html" class="text-gray-600 hover:text-gray-900 font-medium">
                            About
                        </a>
                        <div class="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200">
                            <a href="login.html" class="btn btn-secondary w-full text-center">
                                Log In
                            </a>
                            <a href="register-organization.html" class="btn btn-primary w-full text-center">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `;
}

function renderHero() {
    return `
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
            <!-- Background decoration -->
            <div class="hero-bg"></div>
            
            <div class="container mx-auto px-4 py-20">
                <div class="max-w-5xl mx-auto text-center">
                    <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
                        Ready to Transform Your <span class="text-gradient">Fundraising</span>?                        
                    </h1>
                    
                    <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up" style="animation-delay: 0.1s">
                        Join thousands of organizations raising funds through everyday purchases. 
                        Members save money while supporting their community.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style="animation-delay: 0.2s">
                        <a href="register-organization.html" class="btn btn-primary btn-large">
                            Register Your Organization
                        </a>
                        <a href="how-it-works.html" class="btn btn-secondary btn-large">
                            See How It Works
                        </a>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-up" style="animation-delay: 0.3s">
                        <div class="glass-card p-6">
                            <div class="text-4xl font-bold text-gradient mb-2">70%</div>
                            <p class="text-gray-600">of rebates go directly to your organization</p>
                        </div>
                        <div class="glass-card p-6">
                            <div class="text-4xl font-bold text-emphasis mb-2">100+</div>
                            <p class="text-gray-600">partner suppliers nationwide</p>
                        </div>
                        <div class="glass-card p-6">
                            <div class="text-4xl font-bold text-gradient mb-2">€50k+</div>
                            <p class="text-gray-600">average annual fundraising per club</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderValueProps() {
    return `
        <section class="py-20 relative">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">
                        Why <span class="text-gradient">LetsClubTogether</span>?
                    </h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        A modern solution to community fundraising that benefits everyone involved
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <!-- For Organizations -->
                    <div class="glass-card p-8 text-center group">
                        <div class="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold mb-3">For Organizations</h3>
                        <p class="text-gray-600 mb-4">
                            Sustainable fundraising without the hassle of traditional methods
                        </p>
                        <ul class="text-left space-y-2">
                            <li class="flex items-start gap-2">
                                <span class="text-green-500 mt-1">✓</span>
                                <span class="text-gray-700">Automatic rebate collection</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-green-500 mt-1">✓</span>
                                <span class="text-gray-700">Real-time tracking dashboard</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-green-500 mt-1">✓</span>
                                <span class="text-gray-700">No upfront costs</span>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- For Members -->
                    <div class="glass-card p-8 text-center group">
                        <div class="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style="background: linear-gradient(135deg, var(--color-accent), var(--color-primary));">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold mb-3">For Members</h3>
                        <p class="text-gray-600 mb-4">
                            Support your community with every purchase
                        </p>
                        <ul class="text-left space-y-2">
                            <li class="flex items-start gap-2">
                                <span class="text-green-500 mt-1">✓</span>
                                <span class="text-gray-700">Exclusive member discounts</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-green-500 mt-1">✓</span>
                                <span class="text-gray-700">Easy mobile app</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-green-500 mt-1">✓</span>
                                <span class="text-gray-700">Support multiple organizations</span>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- For Suppliers -->
                    <div class="glass-card p-8 text-center group">
                        <div class="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold mb-3">For Suppliers</h3>
                        <p class="text-gray-600 mb-4">
                            Access thousands of loyal community members
                        </p>
                        <ul class="text-left space-y-2">
                            <li class="flex items-start gap-2">
                                <span class="text-green-500 mt-1">✓</span>
                                <span class="text-gray-700">Increased customer loyalty</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-green-500 mt-1">✓</span>
                                <span class="text-gray-700">Community goodwill</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-green-500 mt-1">✓</span>
                                <span class="text-gray-700">Simple integration</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderHowItWorks() {
    return `
        <section class="py-20 relative bg-gray-50">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">
                        How It <span class="text-emphasis">Works</span>
                    </h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Simple steps to start fundraising through everyday purchases
                    </p>
                </div>
                
                <div class="max-w-4xl mx-auto">
                    <div class="space-y-8">
                        <!-- Step 1 -->
                        <div class="flex gap-4 items-start">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
                                1
                            </div>
                            <div class="flex-1 glass-card p-6">
                                <h3 class="text-xl font-bold mb-2">Organization Registers</h3>
                                <p class="text-gray-600">
                                    Sports clubs, schools, and community groups sign up and get verified. 
                                    Set up takes less than 10 minutes.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Step 2 -->
                        <div class="flex gap-4 items-start">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style="background: linear-gradient(135deg, var(--color-accent), var(--color-primary));">
                                2
                            </div>
                            <div class="flex-1 glass-card p-6">
                                <h3 class="text-xl font-bold mb-2">Members Join</h3>
                                <p class="text-gray-600">
                                    Members download the app and link to their organizations. 
                                    They can support multiple organizations at once.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Step 3 -->
                        <div class="flex gap-4 items-start">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
                                3
                            </div>
                            <div class="flex-1 glass-card p-6">
                                <h3 class="text-xl font-bold mb-2">Shop & Save</h3>
                                <p class="text-gray-600">
                                    Members shop at partner suppliers and automatically earn rebates. 
                                    No vouchers or codes needed.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Step 4 -->
                        <div class="flex gap-4 items-start">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style="background: linear-gradient(135deg, var(--color-accent), var(--color-primary));">
                                4
                            </div>
                            <div class="flex-1 glass-card p-6">
                                <h3 class="text-xl font-bold mb-2">Automatic Distribution</h3>
                                <p class="text-gray-600">
                                    70% of rebates go to the organization, 30% to the platform. 
                                    Funds are distributed monthly.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center mt-12">
                        <a href="register-organization.html" class="btn btn-primary btn-large">
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderTargetMarkets() {
    return `
        <section class="py-20 relative">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">
                        Perfect for <span class="text-gradient">Every Organization</span>
                    </h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        From local sports clubs to national charities, we help organizations of all sizes
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <!-- Sports Clubs -->
                    <div class="glass-card p-6 text-center group hover:scale-105 transition-transform">
                        <div class="text-5xl mb-4">⚽</div>
                        <h3 class="text-xl font-bold mb-2">Sports Clubs</h3>
                        <p class="text-gray-600 text-sm">
                            GAA, soccer, rugby clubs fundraising for facilities and equipment
                        </p>
                    </div>
                    
                    <!-- Schools -->
                    <div class="glass-card p-6 text-center group hover:scale-105 transition-transform">
                        <div class="text-5xl mb-4">🎓</div>
                        <h3 class="text-xl font-bold mb-2">Schools</h3>
                        <p class="text-gray-600 text-sm">
                            Primary and secondary schools supporting educational programs
                        </p>
                    </div>
                    
                    <!-- Community Groups -->
                    <div class="glass-card p-6 text-center group hover:scale-105 transition-transform">
                        <div class="text-5xl mb-4">🤝</div>
                        <h3 class="text-xl font-bold mb-2">Community Groups</h3>
                        <p class="text-gray-600 text-sm">
                            Local initiatives and volunteer organizations
                        </p>
                    </div>
                    
                    <!-- Charities -->
                    <div class="glass-card p-6 text-center group hover:scale-105 transition-transform">
                        <div class="text-5xl mb-4">❤️</div>
                        <h3 class="text-xl font-bold mb-2">Charities</h3>
                        <p class="text-gray-600 text-sm">
                            Registered charities expanding their fundraising reach
                        </p>
                    </div>
                </div>
                
                <div class="mt-16 glass-card p-8 max-w-4xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 class="text-2xl font-bold mb-4">
                                Starting with <span class="text-emphasis">Fuel Purchases</span>
                            </h3>
                            <p class="text-gray-600 mb-4">
                                Our initial focus is on fuel purchasing for sports clubs across Ireland. 
                                With partnerships with major fuel suppliers, clubs can raise significant 
                                funds from their members' everyday fuel purchases.
                            </p>
                            <ul class="space-y-2">
                                <li class="flex items-center gap-2">
                                    <span class="text-green-500">✓</span>
                                    <span class="text-gray-700">Average member spends €2,000/year on fuel</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="text-green-500">✓</span>
                                    <span class="text-gray-700">5% rebate = €100/member/year</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="text-green-500">✓</span>
                                    <span class="text-gray-700">500 members = €50,000 annual fundraising</span>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center">
                            <div class="inline-block p-8 glass-card rounded-full animate-float">
                                <div class="text-6xl">⛽</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderCTASection() {
    return `
        <section class="py-20 relative">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto glass-card p-12 text-center">
                    <h2 class="text-4xl md:text-5xl font-bold mb-6">
                        Community <span class="text-gradient">Group Purchasing</span> Made Simple
                    </h2>
                    <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join the growing community of organizations raising funds through everyday purchases. 
                        No upfront costs, no hidden fees.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a href="register-organization.html" class="btn btn-primary btn-large">
                            Register Your Organization
                        </a>
                        <a href="contact.html" class="btn btn-secondary btn-large">
                            Contact Sales
                        </a>
                    </div>
                    
                    <p class="text-sm text-gray-500">
                        Questions? Check out our <a href="faq.html" class="text-blue-600 hover:underline">FAQ</a> 
                        or <a href="contact.html" class="text-blue-600 hover:underline">get in touch</a>
                    </p>
                </div>
            </div>
        </section>
    `;
}

function renderFooter() {
    return `
        <footer class="footer">
            <div class="container mx-auto px-4">
                <!-- Company Info -->
                <div class="text-center mb-8">
                    <div class="flex items-center justify-center gap-2 mb-4">
                        <div class="w-8 h-8 rounded flex items-center justify-center" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
                            <span class="text-white font-bold">L</span>
                        </div>
                        <span class="text-xl font-bold text-white">LetsClubTogether</span>
                    </div>
                    <p class="text-sm max-w-md mx-auto">
                        Community group purchasing made simple. Raising funds through everyday purchases.
                    </p>
                </div>
                
                <!-- Three Column Layout -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <!-- Product -->
                    <div class="text-center">
                        <h3 class="text-white font-semibold mb-4">Product</h3>
                        <ul class="space-y-2 text-sm">
                            <li><a href="how-it-works.html" class="hover:text-white transition-colors">How It Works</a></li>
                            <li><a href="pricing.html" class="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="features.html" class="hover:text-white transition-colors">Features</a></li>
                            <li><a href="faq.html" class="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                    
                    <!-- Company Links -->
                    <div class="text-center">
                        <h3 class="text-white font-semibold mb-4">Company</h3>
                        <ul class="space-y-2 text-sm">
                            <li><a href="about.html" class="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="contact.html" class="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="careers.html" class="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="blog.html" class="hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>
                    
                    <!-- Legal -->
                    <div class="text-center">
                        <h3 class="text-white font-semibold mb-4">Legal</h3>
                        <ul class="space-y-2 text-sm">
                            <li><a href="privacy.html" class="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="terms.html" class="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="cookies.html" class="hover:text-white transition-colors">Cookie Policy</a></li>
                            <li><a href="gdpr.html" class="hover:text-white transition-colors">GDPR</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 pt-8">
                    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p class="text-sm">
                            © 2025 LetsClubTogether. All rights reserved.
                        </p>
                        <div class="flex gap-6">
                            <a href="#" class="hover:text-white transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="#" class="hover:text-white transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                            <a href="#" class="hover:text-white transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
}