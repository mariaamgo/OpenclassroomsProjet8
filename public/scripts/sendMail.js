// Récupération du formulaire et de ses différents champs
const contactForm = document.querySelector('form')
let userName = document.getElementById('name')
let userEmail = document.getElementById('email')
let userMessage = document.getElementById('message')

contactForm.addEventListener('submit', (e) =>{
    // Eviter le comportement par défault du rechargement de la page
    e.preventDefault()

    // Envoi d'une alerte si au moins un des champs est vide
    if (!userName.value || !userEmail.value || !userMessage.value) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    // Création d'un objet formData avec les valeurs contenues dans les champs
    let formData = {
        name: userName.value,
        email: userEmail.value,
        message: userMessage.value
    }

    // Création d'un nouvel objet XMLHttpRequest pour envoyer une requête HTTP
    let xhr = new XMLHttpRequest()

    // Configuration de la requête POST vers le serveur à l'URL racine '/'
    xhr.open('POST', '/')

    // Définition de l'en-tête pour indiquer que les données envoyées sont au format JSON
    xhr.setRequestHeader('content-type', 'application/json')

    // Déclaration de ce qui doit être fait lorsque la requête est terminée
    xhr.onload = function(){
        // Vérification que l'envoi à été un succès 
        if(xhr.responseText == 'success'){
            alert('L\'email a été envoyé avec succès !')

            // Vide les champs du formulaire
            userName.value = ''
            userEmail.value = ''
            userMessage.value = ''
        }else{
            alert('Quelque chose s\'est mal passé')
        }
    }

    // Envoi des données du formulaire au serveur sous forme de chaîne JSON
    xhr.send(JSON.stringify(formData))
})