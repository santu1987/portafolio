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
});