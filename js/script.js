/**
 * WEE MAKE - Scripts do Site
 * Animações, interatividade e otimizações
 */

(function() {
    'use strict';

    // ============================================
    // UTILIDADES
    // ============================================
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);
    const debounce = (fn, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    };

    // ============================================
    // DETECTAR PREFERÊNCIA DE MOVIMENTO REDUZIDO
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ============================================
    // MENU MOBILE (HAMBURGER)
    // ============================================
    function initMobileMenu() {
        const hamburger = $('.hamburger');
        const navLinks = $('.nav-links');
        
        if (!hamburger || !navLinks) return;

        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Fechar menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    // ============================================
    // SCROLL SUAVE PARA LINKS INTERNOS
    // ============================================
    function initSmoothScroll() {
        $$('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = $(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = $('.header')?.offsetHeight || 72;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    function initHeaderScroll() {
        const header = $('.header');
        if (!header) return;

        let lastScroll = 0;
        
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', debounce(handleScroll, 10), { passive: true });
    }

    // ============================================
    // PROGRESS BAR DE SCROLL
    // ============================================
    function initScrollProgress() {
        const progressBar = $('.scroll-progress');
        if (!progressBar) return;

        const updateProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = progress + '%';
        };

        window.addEventListener('scroll', debounce(updateProgress, 10), { passive: true });
    }

    // ============================================
    // ANIMAÇÕES DE ENTRADA (SCROLL REVEAL)
    // ============================================
    function initScrollReveal() {
        if (prefersReducedMotion) {
            $$('[data-animate]').forEach(el => el.classList.add('animate-in'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        $$('[data-animate]').forEach(el => observer.observe(el));
    }

    // ============================================
    // CONTADOR ANIMADO (HERO STATS)
    // ============================================
    function initCounterAnimation() {
        if (prefersReducedMotion) return;

        const counters = $$('[data-count]');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count);
                    const duration = 2000;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Easing ease-out
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(easeOut * target);
                        
                        el.textContent = current;
                        
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            el.textContent = target;
                        }
                    };

                    requestAnimationFrame(animate);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    // ============================================
    // NAVEGAÇÃO ATIVA (HIGHLIGHT DO MENU)
    // ============================================
    function initActiveNav() {
        const sections = $$('section[id]');
        const navLinks = $$('.nav-link');
        
        if (!sections.length || !navLinks.length) return;

        const headerHeight = $('.header')?.offsetHeight || 72;

        const updateActiveNav = () => {
            const scrollPos = window.pageYOffset + headerHeight + 100;

            sections.forEach(section => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollPos >= top && scrollPos < bottom) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', debounce(updateActiveNav, 50), { passive: true });
    }

    // ============================================
    // PARTÍCULAS DE FUNDO (CANVAS)
    // ============================================
    function initParticles() {
        if (prefersReducedMotion) return;

        const canvas = $('#particle-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let isVisible = true;

        // Detectar visibilidade da página
        document.addEventListener('visibilitychange', () => {
            isVisible = !document.hidden;
            if (isVisible && !animationId) {
                animate();
            }
        });

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.5 ? '59, 130, 246' : '6, 182, 212';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.fill();
            }
        }

        function init() {
            resize();
            const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function drawConnections() {
            const maxDistance = 120;
            const maxConnections = 3;

            for (let i = 0; i < particles.length; i++) {
                let connections = 0;
                for (let j = i + 1; j < particles.length; j++) {
                    if (connections >= maxConnections) break;

                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                        connections++;
                    }
                }
            }
        }

        function animate() {
            if (!isVisible) {
                animationId = null;
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            drawConnections();
            animationId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', debounce(() => {
            resize();
            init();
        }, 200));

        init();
        animate();
    }

    // ============================================
    // FAQ ACCORDION (ANIMAÇÃO SUAVE)
    // ============================================
    function initFAQ() {
        const faqItems = $$('.faq-item');
        
        faqItems.forEach(item => {
            const summary = item.querySelector('summary');
            
            summary.addEventListener('click', (e) => {
                // Fechar outros items
                faqItems.forEach(other => {
                    if (other !== item && other.open) {
                        other.open = false;
                    }
                });
            });
        });
    }

    // ============================================
    // PARALLAX SUAVE NA HERO IMAGE
    // ============================================
    function initParallax() {
        if (prefersReducedMotion) return;

        const heroImage = $('.hero-image-wrapper');
        if (!heroImage) return;

        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.05;
            heroImage.style.transform = `translateY(${rate}px)`;
        };

        window.addEventListener('scroll', debounce(handleScroll, 16), { passive: true });
    }

    // ============================================
    // BOTÃO WHATSAPP FLOAT - ENTRADA ANIMADA
    // ============================================
    function initWhatsAppFloat() {
        const float = $('.whatsapp-float');
        if (!float) return;

        // Delay na entrada
        setTimeout(() => {
            float.style.opacity = '1';
            float.style.transform = 'scale(1)';
        }, 2000);

        float.style.opacity = '0';
        float.style.transform = 'scale(0.8)';
        float.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }

    // ============================================
    // LAZY LOADING PARA IMAGENS
    // ============================================
    function initLazyLoading() {
        const images = $$('img[loading="lazy"]');
        
        if ('loading' in HTMLImageElement.prototype) {
            // Navegador suporta lazy loading nativo
            return;
        }

        // Fallback para navegadores antigos
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.removeAttribute('loading');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // PREVENIR FLASH DE CONTEÚDO NÃO ESTILIZADO
    // ============================================
    function initFOUCPrevention() {
        document.documentElement.style.visibility = 'visible';
    }

    // ============================================
    // ANALYTICS (Vercel Analytics fallback)
    // ============================================
    function initAnalytics() {
        // Tracking de cliques em CTAs importantes
        const trackElements = $$('[data-track]');
        trackElements.forEach(el => {
            el.addEventListener('click', () => {
                const eventName = el.dataset.track;
                if (window.gtag) {
                    gtag('event', 'click', {
                        event_category: 'cta',
                        event_label: eventName
                    });
                }
            });
        });
    }

    // ============================================
    // INICIALIZAÇÃO
    // ============================================
    function init() {
        initFOUCPrevention();
        initMobileMenu();
        initSmoothScroll();
        initHeaderScroll();
        initScrollProgress();
        initScrollReveal();
        initCounterAnimation();
        initActiveNav();
        initParticles();
        initFAQ();
        initParallax();
        initWhatsAppFloat();
        initLazyLoading();
        initAnalytics();
    }

    // Iniciar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
