import { openModal } from './modal.js';
import { projects } from './projects.js';


// Fonction qui active le lien de navigation correspondant à la section visible
const activeLink = function() {
    // Boucle sur les liens du menu
    document.querySelectorAll('.menu > ul a').forEach(link => {
        const nav = document.querySelector('.header');
        const navBottom = nav.getBoundingClientRect().bottom; // Position du bas du header
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.getBoundingClientRect().top; // Position du haut de la section
        const sectionBottom = section.getBoundingClientRect().bottom; // Position du bas de la section

        // Si la section est visible, on active le lien
        if (sectionTop <= navBottom && sectionBottom >= navBottom) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    })
}

// Fonction pour changer la couleur du header au défilement de la page
const blackHeader = function() {
    const nav = document.querySelector('.nav');
    const spanMenu = document.querySelectorAll('.burger_menu span');

    // Si l'utilisateur a défilé, on change la couleur du header
    if (window.scrollY >= 1) {
        nav.classList.add('header-black');  // Ajout de la classe pour changer la couleur
        spanMenu.forEach(span => {
            span.style.borderColor = '#a8a8a8'; // Changement de la couleur des barres du menu burger (présent sur petit écran)
        });
    } else {
        nav.classList.remove('header-black');  // Retrait de la classe pour revenir à la couleur normale
        spanMenu.forEach(span => {
            span.style.borderColor = '#000'; // Restauration de la couleur des barres du menu burger
        });
    }
}

// Fonction pour changer la couleur des liens (GitHub, Linkedin, Gmail)
const blackLink = function() {
    const links = document.querySelectorAll('.link a');
    const linkPosition = document.querySelector('.link').getBoundingClientRect().top; // Position du haut des liens
    const presentationPosition = document.querySelector('.presentation').getBoundingClientRect().bottom; // Position du bas de la section présentation

    // Vérification si les liens se situent en dessous de la section .presentation
    if (linkPosition >= presentationPosition) {
        links.forEach(link => {
            link.classList.add("blackLink");  // Change la couleur des liens en noir
        });
    } else {
        // Si les liens se situe dans la section présentation
        links.forEach(link => {
            link.classList.remove("blackLink");  // Retour à la couleur blanche
        });
    }
}

// Ajout des événements de défilement pour les fonction activeLink, blackHeader et blackLink
window.addEventListener('scroll', function() {
    activeLink();
    blackHeader();
    blackLink();
});

// Fonction qui génère la galerie de projets (portfolio)
const portfolio = function(projects) {
    const gallery = document.querySelector(".section-gallery");
    gallery.innerHTML = ''; // Réinitialise la galerie

    // Crée et ajoute les éléments du projet
    for (let i = 0; i < projects.length; i++) {
        image(gallery, projects, i); // Appel de la fonction image pour ajouter le projet à la galerie
    }
  
    // Sélection de tous les éléments ayant la classe qui commence par "reveal-" et activation de l'observation
    document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
        observer.observe(r);
    })
}

// Fonction qui génère les images de la galerie
const image = function(gallery, projects, index){
    // Création du contenu HTML pour chaque projet
    const project = `<a href="#modal" class="link-modal js-modal reveal-1" data-title="${projects[index].title}" aria-label="Ouvrir la fenêtre modale">
                            <div class="project-content">
                                <img src="${projects[index].cover}" alt="Mockup de page web du site de ${projects[index].title}" />
                                <div class="project-info">
                                    <h3>${projects[index].title}</h3>
                                </div>
                            </div>
                        </a>`;
    // Ajout du contenu HTML généré à la galerie
    gallery.innerHTML += project;

    // Ajout d'un écouteur d'événement pour ouvrir la fenêtre modale au clic
    document.querySelectorAll('.js-modal').forEach((a, index) => {
        a.addEventListener('click', (e) => openModal(e, projects, index));
    });
}

// Définition du seuil d'intersection pour déclencher l'animation
const ratio = .1;

// Configuration de l'observateur d'intersection
const options = {
    root: null, // Pas de conteneur spécifique
    rootMargin: "0px", // Aucun décalage autour de l'élément observé
    threshold: ratio, // Seuil d'intersection pour déclencher l'animation
};

// Fonction de gestion des intersections
const handleIntersect = function(entries, observer){
    entries.forEach(function (entry){
        // Vérification si l'élément est suffisamment visible
        if(entry.intersectionRatio > ratio){
            // Ajout de la classe CSS pour rendre l'élément visible avec une animation
            entry.target.classList.add('reveal-visible')
            // Arrêt de l'observation de cet élément après son apparition
            observer.unobserve(entry.target)
        }
    })
}

// Création de l'observateur d'intersection avec les options définies
const observer = new IntersectionObserver(handleIntersect, options);

// Sélection de tous les éléments ayant la classe "reveal" et activation de l'observation
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r);
})

// Variable qui suit l'état d'ouverture du menu burger
let click = true;

// Fonction qui ouvre ou ferme le menu burger en fonction de son état actuel
const openMenu = function (){
    // Vérification que la largeur de la fenêtre soit celle d'un appareil mobile
    const isMobile = window.innerWidth <= 1024;
    const list = document.querySelector(".menu");

    if (isMobile) {
        // Si le menu est fermé, on le fait apparaître
        if(click === true){
            list.style.transform = "translateY(0)"; // Fait apparaître le menu
            click = false; // Changement de l'état pour signaler que le menu est ouvert
        }else{
            list.style.transform = `translateY(-250px)`; // Cache le menu
            click = true; // Changement de l'état pour signaler que le menu est fermé
        }
    }
}

// Ajout de l'événement au clic sur le bouton du menu burger
document.querySelector(".burger_menu").addEventListener("click", openMenu);
// Ajout de l'événement au clic sur chaque élément du menu de navigation
document.querySelectorAll(".nav li").forEach(function (li){ li.addEventListener("click", openMenu) });

// Appel de la fonction portfolio pour afficher la galerie
portfolio(projects);