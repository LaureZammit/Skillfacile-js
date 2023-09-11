
// Dark mode

const buttondark = document.querySelector('#darkmode');
const body = document.body;
const logo = document.querySelector('#logo');

buttondark.addEventListener("click", darkmode);

function darkmode() {
    if(body.classList.contains('darkmondeon')){
        body.classList.remove('darkmondeon');
        buttondark.innerText='Activer le darkmode';
        const logoUrlBlack = "img/logo-noir.png";
        logo.src = logoUrlBlack;
        return;

    }
    body.classList.add('darkmondeon');
    buttondark.innerText='Désactiver le darkmode';
    const logoUrlWhite = "img/logo-blanc.png";
    logo.src = logoUrlWhite;
}

// Menu responsive

const toggle = document.querySelector('#toggle-button');
const nav = document.querySelector('nav');

function menuResponive (){
    if(nav.classList.contains('active')){
        nav.classList.remove('active');
        toggle.classList.add('fa-bars');
        toggle.classList.remove('fa-x');
        return;
    }
    nav.classList.add('active');
    toggle.classList.add('fa-x');
    toggle.classList.remove('fa-bars');
}

toggle.addEventListener("click", menuResponive);

const scroll = window;
window.addEventListener("scroll", closeOnScroll);

function closeOnScroll(){
    if(nav.classList.contains('active'))
        nav.classList.remove('active');
        toggle.classList.add('fa-bars');
        toggle.classList.remove('fa-x');
}

// modale inscription newsletter

const newsletter = document.querySelector('#newsletter');

newsletter.addEventListener("click", () => {
    const isModalExist = document.querySelector('.form-container');
    if(isModalExist !== null){
        closeModale(isModalExist);
        isModalExist.remove();
    } else {
        openModale();
        if(nav.classList.contains('active')){
            menuResponive();
        }
    }
});

function closeModale(isModalExist){
    isModalExist.remove();
}

// Finir le closemodal

function openModale (){
    const divElement = document.createElement("div");
    divElement.className = "form-container"; // Ajouter une classe CSS si nécessaire
     // Créer un formulaire
     const formElement = document.createElement("form");

     // Créer un champ de saisie de texte
     const inputElement = document.createElement("input");
     inputElement.type = "email";
     inputElement.name = "example_input";
     inputElement.placeholder = "Entrez votre email";
     inputElement.value = "";
     formElement.appendChild(inputElement);

     // Créer un bouton de soumission
     const submitButton = document.createElement("button");
     submitButton.type = "submit";
     submitButton.textContent = "Recevoir la newsletter";
     submitButton.className = "sendNewsletter";
     formElement.appendChild(submitButton);

    //  Bouton de fermeture
    const closeButton = document.createElement("i");
    closeButton.className ="fa-solid fa-x closebutton";
    divElement.appendChild(closeButton);

     // Ajouter le formulaire à la div
     divElement.appendChild(formElement);

     // Ajouter la div au conteneur sur la page
     body.appendChild(divElement);

     closeButton.addEventListener("click", () => {
        divElement.remove();
    });


    // Message inscription newsletter

    const sendButton = document.querySelector(".sendNewsletter");

    sendButton.addEventListener("click", (e) => {
        if(inputElement.value !== ""){
            const message = `<h3 class="subtitle">Félicitation pour votre inscription à la newsletter</h3>`;
            formElement.style.display = "none";
            closeButton.insertAdjacentHTML("afterend", message);
        }
        e.preventDefault();
    });

}





// Modale contact
const contactButton = document.querySelector('#contact-button');

contactButton.addEventListener("click", () => {
    const isContactExist = document.querySelector('dialog');
    if(isContactExist !== null){
        closeContact(isContactExist);
        isContactExist.remove();
        return;
    }
        openContact();
        if(nav.classList.contains('active')){
            menuResponive();
        }
});


function closeContact(isContactExist){
    isContactExist.remove();
}

function openContact(){
    const formulaire =`
    <dialog open>
    <i class="fa-solid fa-x closeContact"></i>
    <h1 class="subtitle">Contactez-nous</h1>
    <form action="#" method="">
        <input id="name" type="text" placeholder="Votre nom et prénom">
        <input id="phone" type="tel" placeholder="Votre numéro de téléphone">
        <input id="company" type="text" placeholder="Le nom de votre entreprise">
        <input id="mail" type="email" placeholder="Votre adresse mail">
        <select>
            <option value="Je veux des renseignements concernant l'accompagnement perso">Je veux des renseignements concernant l'accompagnement perso</option>
            <option value="Je veux des renseignements concernant l'accompagnement small group">Je veux des renseignements concernant l'accompagnement small group</option>
            <option value="Je veux des renseignements concernant la formation digitale">Je veux des renseignements concernant la formation digitale</option>
            <option value="Je veux des renseignements concernant le coaching digital">Je veux des renseignements concernant le coaching digital</option>
            <option value="J'ai une autre demande">J'ai une autre demande</option>
        </select>
        <textarea cols="30" rows="10" placeholder="Précisez votre demande afin de faciliter l'échange lorsqu'un de nos conseillers vous appellera"></textarea>
        <label for="RGPD"><input id="RGPD" type="checkbox" required="required">  En soumettant ce formulaire, j'accepte que les informations saisies soient transmises par mail à l'équipe de SkillFacile dans le but d'être recontacté concernant la demande effectuée. Je comprends que j'ai un droit de modification, d'accès et de suppression de mes informations personnelles.</label>
        <input id="submit" type="submit" value="Envoyer la demande">                    
    </form>
</dialog>
    `;
    const emplacement = document.querySelector('#admin');
    emplacement.insertAdjacentHTML('beforebegin', formulaire);

    const closeButton = document.querySelector('.closeContact');
    const dialog = document.querySelector('dialog');

    closeButton.addEventListener("click", () => {
        dialog.remove();
    });


     // Message contact envoyé

     const sendButton = document.querySelector("#submit");

     sendButton.addEventListener("click", (e) => {
        //  if(inputElement.value !== ""){
            const form = document.querySelector("form");
            const RGPD = document.querySelector("#RGPD");
            
            // let bool = RGPD.ckecked;

            // console.log(RGPD.checked);
            if(RGPD.checked){
                const message = `<p>Votre message à bien été envoyé</p>`;
                form.style.display = "none";
                const titre = document.querySelector('h1');
                titre.insertAdjacentHTML("beforeend", message);
                RGPD.checked = false; 
            }
        
         e.preventDefault();
     });
}