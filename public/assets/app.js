const contactForm = document.querySelector('form')
let userName = document.getElementById('name')
let userEmail = document.getElementById('email')
let userMessage = document.getElementById('message')

contactForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    if (!userName.value || !userEmail.value || !userMessage.value) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    let formData = {
        name: userName.value,
        email: userEmail.value,
        message: userMessage.value
    }

    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function(){
        if(xhr.responseText == 'success'){
            alert('L\'email a été envoyé avec succès !')
            userName.value = ''
            userEmail.value = ''
            userMessage.value = ''
        }else{
            alert('Quelque chose s\'est mal passé')
        }
    }

    xhr.send(JSON.stringify(formData))
})