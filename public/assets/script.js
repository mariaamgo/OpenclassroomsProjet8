import { openModal } from './modal.js'

async function getProjects() {
    try {

        const response = await fetch("../data/projects.json");
        //fonction qui vient de la page error.js pour créer une nouvelle erreur
        if(!response.ok){
            throw new Error("Erreur : Erreur lors de la récupération des données");
        }
        
        let projects = await response.json(); //récupération des données JSON de la réponse
        projects = [...new Set(projects)]; //suppression des doublons en utilisant un objet Set, retransformation en tableau à partir des éléments uniques

        portfolio(projects);
        
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

// Appel de la fonction getProjects
getProjects();

const activeLink = function() {
    document.querySelectorAll('.menu > ul a').forEach(link => {
        const nav = document.querySelector('.header');
        const navBottom = nav.getBoundingClientRect().bottom;
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop <= navBottom && sectionBottom >= navBottom) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    })
}

const blackHeader = function() {
    const nav = document.querySelector('.nav');
    const spanMenu = document.querySelectorAll('.burger_menu span');

    if (window.scrollY >= 1) {
        nav.classList.add('header-black');  // Ajouter la classe pour changer la couleur
        spanMenu.forEach(span => {
            span.style.borderColor = '#a8a8a8';
        });
    } else {
        nav.classList.remove('header-black');  // Retirer la classe pour revenir à la couleur normale
        spanMenu.forEach(span => {
            span.style.borderColor = '#000';
        });
    }
}

const blackLink = function() {
    const links = document.querySelectorAll('.link a');
    const linkPosition = document.querySelector('.link').getBoundingClientRect().top;
    const presentationPosition = document.querySelector('.presentation').getBoundingClientRect().bottom;

    // Vérifier si les liens sont à la même position que la section .portfolio
    if (linkPosition >= presentationPosition) {
        links.forEach(link => {
            link.classList.add("blackLink");  // Change la couleur des liens en blanc
        });
    } else {
        // Si les liens ne sont pas dans la section portfolio, revenir à la couleur normale
        links.forEach(link => {
            link.classList.remove("blackLink");  // Retour à la couleur noire
        });
    }
}

window.addEventListener('scroll', function() {
    activeLink();
    blackHeader();
    blackLink();
});


const portfolio = function(projects) {
    const gallery = document.querySelector(".section-gallery");
    gallery.innerHTML = '';

    // Crée et ajoute les éléments du projet
    for (let i = 0; i < projects.length; i++) {
        image(gallery, projects, i);
    }
  
    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
        observer.observe(r);
    })
}

const image = function(gallery, projects, index){
    const project = `<a href="#modal" class="link-modal js-modal reveal-${index+3}" data-title="${projects[index].title}" aria-label="Ouvrir la fenêtre modale">
                            <div class="project-content">
                                <img src="${projects[index].cover}" alt="Mockup de page web du site de ${projects[index].title}" />
                                <div class="project-info">
                                    <h3>${projects[index].title}</h3>
                                </div>
                            </div>
                        </a>`;
    gallery.innerHTML += project;

    document.querySelectorAll('.js-modal').forEach((a, index) => {
        a.addEventListener('click', (e) => openModal(e, projects, index));
    });
}

const ratio = .1;
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

const handleIntersect = function(entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r);
})

let firstClick = true;

const openMenu = function (){
    const isMobile = window.innerWidth <= 1024;
    const list = document.querySelector(".menu");

    if (isMobile) {
        if(firstClick === true){
            list.style.transform = "translateY(0)";
            firstClick = false;
        }else{
            list.style.transform = `translateY(-250px)`;
            firstClick = true;
        }
    }
}

document.querySelector(".burger_menu").addEventListener("click", openMenu)
document.querySelectorAll(".nav li").forEach(function (li){ li.addEventListener("click", openMenu) })