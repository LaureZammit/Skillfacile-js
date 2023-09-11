// Projet JS initiation

// 1. Dark mode : Créer le code pour ajouter un dark mode au site SkillFacile

let darkMode = document.getElementById('darkmode');
let body = document.querySelector('body');
let logo = document.getElementById('logo');

darkMode.addEventListener('click', () => {
    body.classList.toggle('darkmondeon');
    logo.classList.toggle('logo');
    if (body.classList.contains('darkmondeon')) {
        logo.src = '../img/logo-blanc.png';
    }else {
        logo.src = '../img/logo-noir.png';
    }
});

// 2. Menu responsive : vous devez créer un menu responsive qui s'ouvre et se ferme, tel que représenté sur la vidéo de présentation. Petit bonus : faire la fermeture au scroll et la fermeture lorsqu'une modale s'ouvre
// Bonus supplémentaire : Fermer le menu responsive a l'ouverture de la modale

function menuResponsive() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
    // document.querySelector("nav").classList.toggle("active");
    const toggleButton = document.getElementById("toggle-button");
    toggleButton.classList.toggle("fa-bars");
    toggleButton.classList.toggle("fa-times");
}
document.getElementById("toggle-button").addEventListener("click", menuResponsive);

let burger = document.getElementById('toggle-button');

// // Ouvrir le menu responsive avec une fonction
let nav = document.createElement('nav');

burger.addEventListener('click', (e) => {
        nav.classList.add('active');
        document.body.appendChild(nav);

    // Fermeture du menu responsive au scroll
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");
        nav.classList.remove("active");
        const toggleButton = document.getElementById("toggle-button");
        toggleButton.classList.add("fa-bars");
        toggleButton.classList.remove("fa-times");
    });

    // Fermer le menu responsive au click sur le bouton contact
    let contactButton = document.querySelector('#contact-button');
    contactButton.addEventListener('click', () => {
        burger.classList.remove('active');
        burger.classList.add('hidden');
        });
        e.preventDefault();
});

// 3. modale inscription newsletter : Pour la modale de newsletter, vous devez utiliser les creatElement pour créer tous les éléments qui la compose. Bonus : Mettre en place un message lorsque l'utilisateur s'inscrit.

function newsletter() {
    const newsletterModal = document.createElement("div");
    newsletterModal.classList.add("form-container");

    newsletterModal.innerHTML = `
    <i class="fas fa-times"></i>
    <h3 class="subtitle">Inscription à la newsletter</h3>
    <form action="#" method="post">
        <input type="email" placeholder="Votre adresse mail">
        <button type="submit">S'inscrire</button>
    </form>
    `;
    document.body.appendChild(newsletterModal);

    const closeButton = newsletterModal.querySelector("i.fas.fa-times"); // Utilisez querySelector pour cibler l'icône de la croix
    closeButton.addEventListener("click", function() {
        document.body.removeChild(newsletterModal);
    });

    const form = newsletterModal.querySelector("form");
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const enteredEmail = form.querySelector("input[type=email]").value.trim(); // Obtenez la valeur de l'adresse e-mail
        if (isValidEmail(enteredEmail)) {
            // Adresse e-mail valide, afficher le message de confirmation
            form.style.display = 'none'; // Masquer le formulaire
            const confirmationMessage = document.createElement("p");
            confirmationMessage.textContent = `Merci pour votre inscription !`;
            newsletterModal.appendChild(confirmationMessage); 
            confirmationMessage.classList.add('subtitle');
            // Ajouter le message de confirmation à la modale
        } else {
            // Adresse e-mail non valide, afficher un message d'erreur
            const errorMessage = document.createElement("p");
            errorMessage.textContent = 'Adresse e-mail non valide. Veuillez réessayer.';
            newsletterModal.appendChild(errorMessage); // Ajouter le message d'erreur à la modale
        }
    });

    form.appendChild(emailInput);
    form.appendChild(submitButton);
    form.appendChild(message);

    newsletterModal.appendChild(closeButton);
    newsletterModal.appendChild(title);
    newsletterModal.appendChild(form);

    document.body.appendChild(newsletterModal);

    newsletterModal.appendChild(closeButton); // Ajoutez le bouton de fermeture à la modale
    newsletterModal.appendChild(message); // Ajoutez le message de confirmation à la modale
}

function isValidEmail(email) {
    // Vérifie si l'e-mail a un format valide (vous pouvez utiliser une expression régulière pour cela)
    // Retourne true si l'e-mail est valide, sinon false
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

document.getElementById("newsletter").addEventListener("click", newsletter);


// 4. Modale contact : Créer la modale de contact en utilisant la balise dialogue. Pour cette partie là, vous ne devez pas utiliser de creatElement. Bonus : Mettre en place un message lorsque l'utilisateur
// Ne pas faire de createElement, utiliser le form déjà existant dans la page web

// Sélectionnez les éléments du formulaire et du bouton
const formRecup = document.querySelector('#contact div');
const formButton = document.getElementById('contact-button');

// Supprimez la méthode POST du formulaire
const formMethod = document.querySelector('#contact div form');
formMethod.removeAttribute('method');

// Créez un bouton de fermeture
const closeButton = document.createElement('button');
closeButton.textContent = 'Fermer';

// Fonction pour afficher la modal
function displayModal() {
    // Créez la modal
    const formDialog = document.createElement('dialog');
    formDialog.appendChild(formRecup);
    formDialog.appendChild(closeButton);
    document.body.appendChild(formDialog);

    // Affichez la modal
    formDialog.showModal();

    // Gestionnaire d'événement pour fermer la modal
    closeButton.addEventListener('click', () => {
        formDialog.close();
    });

    // Gestionnaire d'événement pour soumettre le formulaire
    formMethod.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêchez l'envoi du formulaire
        formDialog.close();

        // Créez une modal de confirmation
        const confirmationDialog = document.createElement('dialog');
        const confirmationTitle = document.createElement('h3');
        confirmationTitle.classList.add('subtitle');
        confirmationTitle.textContent = 'Le formulaire a bien été envoyé!';
        confirmationDialog.appendChild(confirmationTitle);
        confirmationDialog.appendChild(closeButton);
        document.body.appendChild(confirmationDialog);

        // Affichez la modal de confirmation
        confirmationDialog.showModal();

        // Gestionnaire d'événement pour fermer la modal de confirmation
        closeButton.addEventListener('click', () => {
            confirmationDialog.close();
        });
    });
}

// Ajoutez un gestionnaire d'événement au bouton "Contact" pour afficher la modal
formButton.addEventListener('click', displayModal);
