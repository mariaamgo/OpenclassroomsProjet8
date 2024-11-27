let modal = null

export const openModal = function (e, projects, index){
    e.preventDefault()
    const target = document.querySelector(e.currentTarget.getAttribute('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelectorAll('.js-modal-close').forEach(btn => {
        btn.addEventListener('click', closeModal)
    })
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    if(e.currentTarget.getAttribute('data-title') == 'Mentions légales'){
        console.log('ok')
        contentModalLegalNotice();
    }else{
        contentModalProject(projects, index)
    }
}

const closeModal = function (e) {
    if(modal === null) return
    e.preventDefault()
    window.setTimeout(function() {
        modal.style.display = 'none'
        modal = null
    }, 300)
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelectorAll('.js-modal-close').forEach(btn => {
        btn.removeEventListener('click', closeModal);
    })
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

window.addEventListener('keydown', function (e) {
    if(e.key === "Escape" || e.key === "Esc"){
        closeModal(e)
    }
})

const contentModalProject = function (projects, index) {
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = "";

    const title = document.querySelector('.project-title')
    title.textContent = projects[index].title

    const projectInfo = `<p class="project-description">${projects[index].description}</p>
                        <h3>Problématiques rencontrées</h3>
                        <ul class="project-difficulties"></ul>
                        <h3>Compétences acquises</h3>
                        <ul class="project-skills"></ul>
                        <a class="project-github" href="${projects[index].github}" target="_blank">Cliquez pour accéder au code du site</a>`;

    modalContent.innerHTML = projectInfo;

    const difficulties = document.querySelector('.project-difficulties')
    difficulties.innerHTML = ''
    for (let i = 0; i < projects[index].difficulties.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = projects[index].difficulties[i]
        difficulties.appendChild(li);
    }

    const skills = document.querySelector('.project-skills')
    skills.innerHTML = ''
    for (let i = 0; i < projects[index].skills.length; i++) {
        const li = document.createElement('li')
        li.textContent = projects[index].skills[i]
        skills.appendChild(li);
    }
}

const contentModalLegalNotice = function () {
    const title = document.querySelector('.project-title')
    title.textContent = "Mentions légales"

    const legalNotice = `<h3>ÉDITEUR</h3>
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

                        <p>Toute reproduction, modification ou exploitation des contenus du site (textes, images, vidéos) sans autorisation préalable est interdite.</p>`

    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = "";
    modalContent.innerHTML = legalNotice;
}