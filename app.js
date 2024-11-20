/* -------------------------- Création d'un cookies ------------------------- */

// Sélection des éléments nécessaires
const form = document.getElementById('cookieForm');
const afficher = document.getElementById('Afficher');
const message = document.getElementById('message');

// Écouteur pour la soumission du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des données du formulaire
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');

    // Création des cookies
    document.cookie = `name=${name}; path=/; max-age=3600;`;
    document.cookie = `email=${email}; path=/; max-age=3600;`;

    // Confirmation
    message.textContent = 'Cookies créés avec succès !';
});

// Écouteur pour afficher les cookies
afficher.addEventListener('click', () => {
    // Récupération et affichage des cookies
    const cookies = document.cookie;
    message.textContent = `Cookies : ${cookies}`;
});
