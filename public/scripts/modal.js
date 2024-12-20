// Déclaration de la modal à null
let modal = null;

// Fonction pour ouvrir la fenêtre modale
export const openModal = function (e, projects, index){
    e.preventDefault(); // Empêche le comportement par défaut du lien

    // Sélection de la cible de la modale via l'attribut href du lien cliqué
    const target = document.querySelector(e.currentTarget.getAttribute('href'));

    // Affichage la modale en supprimant display: none
    target.style.display = null;

    // Modification des attributs ARIA
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');

    // Stockage de la référence à la modale actuellement ouverte
    modal = target;

    // Ferme la modale en cliquant en dehors
    modal.addEventListener('click', closeModal);

    // Ajout des événements de fermeture aux boutons de fermeture internes
    modal.querySelectorAll('.js-modal-close').forEach(btn => {
        btn.addEventListener('click', closeModal);
    })

    // Empêche la propagation du clic à l'intérieur de la modale
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation);

    // Vérification de si le lien correspond aux mentions légales ou à un projet
    if(e.currentTarget.getAttribute('data-title') == 'Mentions légales'){
        contentModalLegalNotice(); // Chargement du contenu des mentions légales
    }else{
        contentModalProject(projects, index); // Chargement du contenu du projet
    }
}

// Fonction pour fermer la fenêtre modale
const closeModal = function (e) {
    if(modal === null) return;
    e.preventDefault();

    // Ajout d'un délai pour l'effet de transition CSS
    window.setTimeout(function() {
        modal.style.display = 'none';
        modal = null;
    }, 300)

    // Réinitialisation des attributs ARIA pour l'accessibilité
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');

    // Suppression des événements ajoutés précédemment
    modal.removeEventListener('click', closeModal);
    modal.querySelectorAll('.js-modal-close').forEach(btn => {
        btn.removeEventListener('click', closeModal);
    })
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation);
}

// Fonction pour empêcher la fermeture en cliquant à l'intérieur de la modale
const stopPropagation = function (e) {
    e.stopPropagation();
}

// Fermeture de la fenêtre modale en appuyant sur la touche "Échap"
window.addEventListener('keydown', function (e) {
    if(e.key === "Escape" || e.key === "Esc"){
        closeModal(e);
    }
})

// Fonction pour afficher le contenu du projet sélectionné dans la fenêtre modale
const contentModalProject = function (projects, index) {
    // Sélection du conteneur de la modale
    const modalContent = document.querySelector('.modal-content');
    // Réinitialisation du contenu existant
    modalContent.innerHTML = "";

    const title = document.querySelector('.project-title');
    // Création du titre du projet
    title.textContent = projects[index].title;

    // Structure HTML du contenu du projet
    const projectInfo = contentProject(projects, index);

    // Ajout du contenu dans la fenêtre modale
    modalContent.innerHTML = projectInfo;

    // Ajout des problématiques rencontrées
    const difficulties = document.querySelector('.project-difficulties');
    addListItems(projects[index].difficulties, difficulties);  // Appel de la fonction ajouter pour les difficultés

    // Ajout des compétences acquises
    const skills = document.querySelector('.project-skills');
    addListItems(projects[index].skills, skills); // Appel de la fonction ajouter pour les compétences
}

// Fonction pour ajouter des éléments dans une liste HTML
const addListItems = function(items, listElement) {
    listElement.innerHTML = ''; // Réinitialise la liste avant d'ajouter de nouveaux éléments
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        listElement.appendChild(li);
    });
}

// Fonction qui retourne le contenu HTML des projets
const contentProject = function(projects, index) {
    return `<p class="project-description">${projects[index].description}</p>
            <h3>Problématiques rencontrées</h3>
            <ul class="project-difficulties"></ul>
            <h3>Compétences acquises</h3>
            <ul class="project-skills"></ul>
            <a class="project-github" href="${projects[index].github}" target="_blank">Cliquez pour accéder au code du site</a>`;
}

// Fonction pour afficher les mentions légales dans la fenêtre modale
const contentModalLegalNotice = function () {
    // Création du titre de la fenêtre modale
    const title = document.querySelector('.project-title');
    title.textContent = "Mentions légales";

    // Structure HTML des mentions légales
    const legalNotice = contentLegalNotice();

    // Ajout de contenu des mentions légales dans la fenêtre modale
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = ""; // Vide le contenu avant d'afficher le nouveau
    modalContent.innerHTML = legalNotice;
}

// Fonction qui retourne le contenu HTML des mentions légales
const contentLegalNotice = function () {
    return `<h3>ÉDITEUR</h3>
            <p>Directeur de la publication : Maria Amigo, responsable de l’édition et de la gestion du contenu du site.</p>

            <h3>CONCEPTION ET RÉALISATION DU SITE WEB</h3>
            <p>Maria Amigo<br>
            Courriel : maria.amigo.07@gmail.com</p>

            <h3>HÉBERGEMENT</h3>
            <p>Alwaysdata<br>
            Siège social : 91 Rue du Faubourg Saint-Honoré, 75008 Paris<br>
            Téléphone : 01 84 16 23 40</p>

            <h3>ACCÈS AU SITE</h3>
            <p>Le Site est normalement accessible à tout moment. Toutefois, l'Éditeur se réserve le droit de suspendre, limiter ou interrompre l'accès pour effectuer des mises à jour ou des modifications de contenu. L'Éditeur décline toute responsabilité pour les interruptions dues à des causes extérieures ou indépendantes de sa volonté, telles que des pannes techniques ou des cas de force majeure.</p>

            <h3>COLLECTE DES DONNÉES</h3>
            <p>Le Site collecte les données personnelles des utilisateurs via le formulaire de contact. Ces données sont utilisées exclusivement pour répondre aux demandes.<br>
            Conformément à la loi n°78-17 du 6 janvier 1978 modifiée et au Règlement général sur la protection des données (RGPD), l'utilisateur dispose d'un droit d'accès, de rectification, de suppression, et d'opposition concernant ses données. Ces droits peuvent être exercés via le formulaire de contact ou par courriel à maria.amigo.07@gmail.com.</p>

            <h3>PROPRIÉTÉ INTELLECTUELLE</h3>
            <p>Tous les éléments présents sur le site, tels que les textes, vidéos, graphismes, logos, sont protégés par le droit d'auteur et la propriété intellectuelle.</p>

            <p>Certaines images utilisées sur le site proviennent de la plateforme Pexels, qui offre des images sous licence libre de droits pour un usage personnel et commercial, sans obligation d’attribution (sauf spécification contraire). Si vous êtes l’auteur d’une image et souhaitez signaler un problème, vous pouvez contacter l’Éditeur via l’adresse suivante : maria.amigo.07@gmail.com.</p>

            <p>Toute reproduction, modification ou exploitation des contenus du site (textes, images, vidéos) sans autorisation préalable est interdite.</p>`;
}