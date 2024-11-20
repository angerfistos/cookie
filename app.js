/* ------------------------ Déclatation des variables ----------------------- */

const form = document.getElementById('formulaireCookie'); // Formulaire de création de cookie
const afficher = document.getElementById('Afficher'); // Bouton pour afficher les cookies
const message = document.getElementById('message'); // Message de confirmation 
const ContainerCard = document.getElementById('ContainerCard'); // Div contenant les cartes
const card = document.querySelector('.card'); // Modèle de carte

// Écouteur pour la soumission du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des données du formulaire
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');

    // Création des cookies
    document.cookie = `name=${name}; path=/;`;
    document.cookie = `email=${email}; path=/;`;

    // Confirmation
    message.textContent = 'Cookies créés avec succès !';

    // Création de la carte associée
    createCard(name, email);
});

// Fonction pour créer une carte
function createCard(name, email) {
    // Cloner le modèle de carte
    const cookiecard = card.cloneNode(true);
    cookiecard.style.display = "block"; // Afficher la carte
    cookiecard.classList.remove('card'); // Supprimer la classe de modèle

    // Ajouter les données du cookie à la carte
    cookiecard.querySelector('.card-name').textContent = name;
    cookiecard.querySelector('.card-email').textContent = email;

    // Écouteur pour le bouton de suppression
    const deleteButton = cookiecard.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        deleteCookie('name');
        deleteCookie('email');
        ContainerCard.removeChild(cookiecard);
    });

    // Ajouter la carte au conteneur
    ContainerCard.appendChild(cookiecard);
}

// Fonction pour supprimer un cookie
function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Écouteur pour afficher tous les cookies
afficher.addEventListener('click', () => {
    const cookies = document.cookie;
    message.textContent = `Cookies: ${cookies}`;
});
