/* -------------------------- Création d'un cookies ------------------------- */

const form = document.querySelector('form');

form.addEventListener('submit', () => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    document.cookie = `name=${name}`;
    window.location = 'index.html';
    
}
);

console.log(document.cookie); 