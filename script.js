        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const nav = document.getElementById('nav');
            
            mobileMenuBtn.addEventListener('click', function() {
                nav.classList.toggle('active');
                this.innerHTML = nav.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Smooth Scrolling for Anchor Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                });
            });
            
            // Header Scroll Effect
            const header = document.getElementById('header');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Testimonial Slider
            const testimonialSlides = document.querySelectorAll('.testimonial-slide');
            const testimonialDots = document.querySelectorAll('.testimonial-dot');
            let currentSlide = 0;
            
            function showSlide(index) {
                testimonialSlides.forEach(slide => slide.classList.remove('active'));
                testimonialDots.forEach(dot => dot.classList.remove('active'));
                
                testimonialSlides[index].classList.add('active');
                testimonialDots[index].classList.add('active');
                currentSlide = index;
            }
            
            testimonialDots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = parseInt(this.getAttribute('data-slide'));
                    showSlide(slideIndex);
                });
            });
            
            // Auto-rotate testimonials
            setInterval(() => {
                let nextSlide = (currentSlide + 1) % testimonialSlides.length;
                showSlide(nextSlide);
            }, 7000);
            
            // Scroll Animation
            const animateOnScroll = function() {
                const aboutImg = document.getElementById('aboutImg');
                const aboutText = document.getElementById('aboutText');
                const serviceCards = [
                    document.getElementById('serviceCard1'),
                    document.getElementById('serviceCard2'),
                    document.getElementById('serviceCard3'),
                    document.getElementById('serviceCard4'),
                    document.getElementById('serviceCard5'),
                    document.getElementById('serviceCard6')
                ];
                
                // About Section Animation
                if (isInViewport(aboutImg)) {
                    aboutImg.classList.add('animated');
                    aboutText.classList.add('animated');
                }
                
                // Services Animation
                serviceCards.forEach((card, index) => {
                    if (isInViewport(card)) {
                        setTimeout(() => {
                            card.classList.add('animated');
                        }, index * 200);
                    }
                });
            };
            
            const isInViewport = function(element) {
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
                    rect.bottom >= 0
                );
            };
            
            window.addEventListener('scroll', animateOnScroll);
            window.addEventListener('load', animateOnScroll);
            
            // Form Submission
            const form = document.getElementById('form');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Here you would typically send the form data to your server
                // For demonstration, we'll just show an alert
                alert('Thank you for your message. Our concierge team will contact you shortly.');
                form.reset();
            });
        });
