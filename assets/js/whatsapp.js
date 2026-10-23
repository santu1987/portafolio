document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');
    console.log(contactForm);
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            // Extraer los valores directamente del formulario usando FormData
            const formData = new FormData(contactForm);
            const name = formData.get('name') ? formData.get('name').trim() : '';
            const email = formData.get('email') ? formData.get('email').trim() : '';
            const subject = formData.get('subject') ? formData.get('subject').trim() : '';
            const message = formData.get('message') ? formData.get('message').trim() : '';

            // Tu número de WhatsApp personal (Código de país + número, sin signos ni espacios)
            const phoneNumber = "584129905244"; 

            // Construir el cuerpo del mensaje estructurado
            const text = "¡Hola Gianni! 👋 Vengo desde tu portafolio web con un nuevo mensaje:\n\n" +
                         "👤 Nombre: " + name + "\n" +
                         "📧 Correo: " + email + "\n" +
                         "📌 Asunto: " + subject + "\n" +
                         "💬 Mensaje: " + message;

            // Codificar el texto para la URL de WhatsApp de manera segura
            const encodedText = encodeURIComponent(text);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

            // Mostrar el aviso visual de éxito en la interfaz
            if (formSuccess) {
                formSuccess.classList.remove('hidden');
            }
            
            // Abrir WhatsApp en una nueva pestaña y limpiar el formulario
            setTimeout(() => {
                window.open(whatsappURL, '_blank');
                contactForm.reset();
                if (formSuccess) {
                    formSuccess.classList.add('hidden');
                }
            }, 800);
        });
    }
});