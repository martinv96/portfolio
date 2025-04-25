console.log("Hello World");

document.querySelectorAll('.btn-more, .btn-view-more').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

document.querySelectorAll('.close-btn').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Fermer le modal si on clique à l'extérieur
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Vérifie si un thème préféré est déjà enregistré
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateIcon(savedTheme);
    } else {
        // Si aucun thème n'est enregistré, on définit le thème par défaut à clair
        body.classList.add('light-theme');
        updateIcon('light-theme');
    }

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
            updateIcon('light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            updateIcon('dark-theme');
        }
    });

    // Fonction pour changer l'icône en fonction du thème
    function updateIcon(theme) {
        if (theme === 'light-theme') {
            themeIcon.src = 'icons/header/sun.svg'; // Icône soleil pour le thème clair
            themeIcon.alt = 'Passer au thème sombre';
        } else {
            themeIcon.src = 'icons/header/sun2.svg'; // Icône lune pour le thème sombre
            themeIcon.alt = 'Passer au thème clair';
        }
    }
});



// Animation d'entrée au chargement
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-parcours');

    cards.forEach(card => {
        card.style.display = 'block'; // Affiche tout au début
    });

    // Forcer un reflow pour permettre l’animation
    void document.body.offsetWidth;

    cards.forEach(card => {
        card.classList.add('fade-in');
    });
});

// Animation lors du filtre
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const cards = document.querySelectorAll('.card-parcours');

        // Fade-out tous
        cards.forEach(card => {
            card.classList.remove('fade-in');
            card.classList.add('fade-out');
        });

        setTimeout(() => {
            cards.forEach(card => {
                const shouldShow = (filter === 'all' || card.classList.contains(filter));
                card.style.display = shouldShow ? 'block' : 'none';
            });

            void document.body.offsetWidth; // reflow

            cards.forEach(card => {
                const shouldShow = (filter === 'all' || card.classList.contains(filter));
                if (shouldShow) {
                    card.classList.remove('fade-out');
                    card.classList.add('fade-in');
                }
            });
        }, 400);
    });
});





    document.querySelectorAll('.btn-view-more').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    document.querySelectorAll('.close-btn').forEach(close => {
        close.addEventListener('click', () => {
            const modalId = close.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
