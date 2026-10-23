  // Inicializar iconos Lucide
    lucide.createIcons();

    // Toggle Menú Móvil
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Ocultar menú móvil al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 3. Modo Oscuro / Claro basado en atributos internos (sin localStorage)
   // Modo Oscuro / Claro basado puramente en la clase del HTML (Sin LocalStorage)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Alterna la clase 'dark' en la etiqueta <html> cada vez que se hace clic
            htmlElement.classList.toggle('dark');
        });
    }
/**
 * Cuerpo de experiencia
 */
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".experiencia-item");
    const loadMoreBtn = document.getElementById("load-more-btn");
    const remainingCountSpan = document.getElementById("remaining-count");
    
    let itemsPerClick = 5;
    let visibleCount = 5; // Mostrar los primeros 5 inicialmente

    function updateExperienceView() {
        items.forEach((item, index) => {
            if (index < visibleCount) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });

        const remaining = items.length - visibleCount;
        if (remaining > 0) {
            remainingCountSpan.textContent = remaining;
            loadMoreBtn.style.display = "inline-flex";
        } else {
            loadMoreBtn.style.display = "none"; // Oculta el botón si ya se mostraron todos
        }
    }

    // Inicializar vista
    updateExperienceView();

    // Evento del botón
    loadMoreBtn.addEventListener("click", () => {
        visibleCount += itemsPerClick;
        updateExperienceView();
    });

    /**
     * Cuerpo de Whatsapp
     */
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            // 1. Capturar los valores EXACTOS en variables de inmediato
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            console.log(name)
            // Depuración: Verifica en la consola F12 que aquí sí aparezca lo que escribiste
            console.log("Valores capturados:", { name, email, subject, message });

            // 2. Tu número de WhatsApp (Código de país + número, sin signos ni espacios)
            const phoneNumber = "584129905244"; 

            // 3. Construir el cuerpo del mensaje estructurado con las variables seguras
            const text = "¡Hola Gianni! 👋 Vengo desde tu portafolio web con un nuevo mensaje:\n\n" +
                         "👤 Nombre: " + name + "\n" +
                         "📧 Correo: " + email + "\n" +
                         "📌 Asunto: " + subject + "\n" +
                         "💬 Mensaje: " + message;

            // 4. Codificar el texto para la URL de WhatsApp
            const encodedText = encodeURIComponent(text);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

            // 5. Mostrar el aviso visual de éxito en la interfaz
            if (formSuccess) {
                formSuccess.classList.remove('hidden');
            }
            
            // 6. Abrir WhatsApp y limpiar después
            window.open(whatsappURL, '_blank');
            
            setTimeout(() => {
                contactForm.reset();
                if (formSuccess) {
                    formSuccess.classList.add('hidden');
                }
            }, 1000);
        });
    }
    // 6. Slider de Testimonios / Recomendaciones Profesionales
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    const dots = document.querySelectorAll('#testimonial-dots span');
    
    let currentIndex = 0;
    const totalTestimonials = testimonialCards.length;

    function showTestimonial(index) {
        if (totalTestimonials === 0) return;

        // Ocultar todas las tarjetas
        testimonialCards.forEach((card) => {
            card.classList.add('hidden', 'opacity-0');
            card.classList.remove('opacity-100');
        });

        // Asegurar límites del índice
        if (index >= totalTestimonials) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalTestimonials - 1;
        } else {
            currentIndex = index;
        }

        // Mostrar la tarjeta actual seleccionada
        const activeCard = testimonialCards[currentIndex];
        if (activeCard) {
            activeCard.classList.remove('hidden');
            setTimeout(() => {
                activeCard.classList.add('opacity-100');
            }, 10);
        }

        // Actualizar estado visual de los puntos indicadores (dots)
        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.remove('bg-slate-700');
                dot.classList.add('bg-accent-400', 'w-6'); // Alarga un poco el indicador activo
            } else {
                dot.classList.remove('bg-accent-400', 'w-6');
                dot.classList.add('bg-slate-700', 'w-2.5');
            }
        });
    }

    if (prevBtn && nextBtn && totalTestimonials > 0) {
        prevBtn.addEventListener('click', () => {
            showTestimonial(currentIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            showTestimonial(currentIndex + 1);
        });

        // Permitir clic en los puntos indicadores
        dots.forEach((dot) => {
            dot.addEventListener('click', (e) => {
                const targetIndex = parseInt(e.target.getAttribute('data-index'));
                showTestimonial(targetIndex);
            });
        });

        // Inicializar mostrando el primero
        showTestimonial(0);
    }
    /** */
    
});