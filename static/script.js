document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tabs-nav .tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Fonction pour afficher le contenu de l'onglet actif
    function showTab(tabId) {
        // Masquer tous les contenus d'onglet
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Désactiver tous les liens d'onglet
        tabLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Afficher le contenu de l'onglet souhaité
        const activeContent = document.getElementById(tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        // Activer le lien de l'onglet correspondant
        const activeLink = document.querySelector(`.tabs-nav .tab-link[data-tab="${tabId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Gérer les clics sur les liens d'onglet
    tabLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien (rechargement de page/ancres)
        const tabId = this.dataset.tab; // Récupère l'ID de l'onglet à partir de l'attribut data-tab
        showTab(tabId);
        });
    });

    // Afficher l'onglet par défaut (Licence 1) au chargement de la page
    showTab('annee1');
});
