var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

// Création d'une route POST pour envoyer des mails 
router.post('/', function(req, res, next) {
  // Validation des champs du formulaire
  const { email, name, message } = req.body;
  if (!email || !name || !message) {
    res.status(400).json({ message: "Tous les champs doivent être remplis." });
  }

  // Création du transporteur pour établir une connexion avec le serveur Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER, // Email de l'expéditeur
      pass: process.env.PASS
    }
  })

  const mailOptions = {
    from: process.env.USER, // Adresse email de l'expéditeur
    replyTo: req.body.email, // L'adresse email fournie par l'utilisateur dans le formulaire
    to: process.env.USER, // Adresse email du destinataire
    subject: 'Message provenant de mariaamigo.fr de : ' + req.body.name,
    text: req.body.message
  }

  // Envoie de l'email avec les informations de l'objet mailOptions
  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);
      res.send('error');
    }else{
      console.log('Email envoyé : ' + info.response);
      res.send('success');
    }
  })
});

module.exports = router;
