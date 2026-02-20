document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
            
            // Close other open items
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.parentElement.classList.remove('active');
                }
            });
        });
    });
    
    // Form Validation
    const bookingForm = document.getElementById('booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate Name
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your name';
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }
            
            // Validate Email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Please enter your email';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email';
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }
            
            // Validate Phone
            const phoneInput = document.getElementById('phone');
            const phoneError = document.getElementById('phone-error');
            const phoneRegex = /^[0-9]{10,15}$/;
            if (!phoneInput.value.trim()) {
                phoneError.textContent = 'Please enter your phone number';
                phoneError.style.display = 'block';
                isValid = false;
            } else if (!phoneRegex.test(phoneInput.value)) {
                phoneError.textContent = 'Please enter a valid phone number';
                phoneError.style.display = 'block';
                isValid = false;
            } else {
                phoneError.style.display = 'none';
            }
            
            // Validate Service
            const serviceInput = document.getElementById('service');
            const serviceError = document.getElementById('service-error');
            if (!serviceInput.value) {
                serviceError.textContent = 'Please select a service';
                serviceError.style.display = 'block';
                isValid = false;
            } else {
                serviceError.style.display = 'none';
            }
            
            // Validate Timeline
            const timelineInput = document.getElementById('timeline');
            const timelineError = document.getElementById('timeline-error');
            if (!timelineInput.value) {
                timelineError.textContent = 'Please select a timeline';
                timelineError.style.display = 'block';
                isValid = false;
            } else {
                timelineError.style.display = 'none';
            }
            
            // Validate Message
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Please enter project details';
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageError.style.display = 'none';
            }
            
            // If form is valid, submit it
            if (isValid) {
                // Here you would typically send the form data to the server
                // For demonstration, we'll just show an alert
                alert('Thank you for your inquiry! We will contact you shortly.');
                this.reset();
            }
        });
    }
    
    // Sticky Navigation on Scroll
    const nav = document.querySelector('.nav');
    const navHeight = nav.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            nav.style.background = 'var(--white)';
        }
    });
    
    // Animation on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .process-step, .testimonial-card, .project-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize elements with opacity 0 for animation
    document.querySelectorAll('.service-card, .process-step, .testimonial-card, .project-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Project Card Animation
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const x = e.offsetX;
            const y = e.offsetY;
            const rotateY = (-1/5 * x + 20);
            const rotateX = (4/30 * y - 20);
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});