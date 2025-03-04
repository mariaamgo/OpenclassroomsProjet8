export const projects = [
  {
    "id": "1",
    "title": "Booki, site de réservation en ligne",
    "cover": "./assets/projects/website_booki.webp",
    "description": "Booki est un site vitrine pour une agence de voyage, que j’ai réalisé en HTML et CSS. Ce projet avait pour objectif de créer une page d'accueil responsive, capable de s’adapter aux formats mobile, tablette et desktop, en suivant des maquettes précises fournies via Figma.",
    "difficulties": [
      "<strong>Intégration responsive :</strong> L'un des défis était d’assurer une expérience utilisateur fluide sur différentes tailles d'écran. J'ai utilisé les media queries pour adapter le design aux différentes résolutions, en garantissant que les éléments s'ajustent correctement et optimisés pour chaque format.",
      "<strong>Fidélité aux maquettes :</strong> La précision des détails de la maquette était primordiale pour offrir une interface conforme aux attentes. J'ai donc choisi de coder manuellement chaque section, ce qui m’a permis de mieux maîtriser l'intégration et d'assurer une reproduction fidèle du design."
    ],
    "skills": [
      "Intégration d'une interface responsive",
      "Utilisation de HTML et CSS",
      "Découpage de maquettes",
      "Gestion du versionnage avec Git et GitHub",
      "Validation du code avec les standards du W3C"
    ],
    "github" : "https://github.com/mariaamgo/OpenclassroomsProjet2.git"
  },
  {
    "id": "2",
    "title": "Sophie Bluel, architecte d'intérieur",
    "cover": "./assets/projects/website_sophie-bluel.webp",
    "description": "Ce projet consistait à créer une page web dynamique pour un site d'architecte d'intérieur. Le but était de développer la partie Front-End du site, notamment la page de présentation des travaux de l'architecte, la page de connexion de l’administrateur et une fenêtre modale permettant d'ajouter de nouveaux projets et de les supprimer. L'implémentation était réalisée en utilisant JavaScript pour la manipulation du DOM, la gestion des événements utilisateurs et la communication avec une API back-end.",
    "difficulties": [
      "<strong>Récupération des données via une API :</strong> L’une des difficulté était de récupérer les données d’une API externe. J’ai utilisé la méthode fetch pour effectuer les requêtes HTTP et gérer l’asynchronicité avec des promesses et des fonctions asynchrones, assurant ainsi un traitement efficace des réponses du serveur.",
      "<strong>Implémentation d’un système de filtres pour les projets :</strong> Le défi était de permettre le filtrage des projets par catégorie. J’ai créé des boutons de filtre dynamiquement en JavaScript, puis utilisé des écouteurs d’événements pour filtrer et afficher les projets correspondants en fonction de la catégorie sélectionnée, en manipulant le DOM.",
      "<strong>Gestion des projets via une modale :</strong> L'enjeu était d’ajouter et de supprimer des projets sans recharger la page. J’ai mis en place une modale avec un formulaire d’upload, permettant l’ajout et la suppression des projets via des requêtes HTTP, puis mis à jour la galerie dynamiquement après chaque action, assurant ainsi une gestion en temps réel."
    ],
    "skills": [
      "Manipulation du DOM",
      "Gestion des événements",
      "Authentification utilisateur",
      "Manipulation des formulaires",
      "Communication avec le back-end",
      "Gestion des erreurs"
    ],
    "github" : "https://github.com/mariaamgo/OpenclassroomsProjet3.git"
  },
  {
    "id": "3",
    "title": "Nina Carducci, photographe",
    "cover": "./assets/projects/website_nina_carducci.webp",
    "description": "Le projet Nina Carducci consistait à optimiser le référencement, la performance et l'accessibilité d'un site existant. Réalisé durant ma formation chez OpenClassrooms, ce projet m’a permis d’appliquer les bonnes pratiques en SEO, en accessibilité et en structuration des données. J'ai utilisé des outils comme Lighthouse, Wave, et Chrome DevTools pour identifier et résoudre des problèmes techniques, puis utilisé des données structurées avec Schema.org et des balises comme Open Graph afin de renforcer la visibilité du site.",
    "difficulties": [
      "<strong>Amélioration de la vitesse de chargement :</strong> Le site présentait des problèmes de chargement lent, ce qui pouvait décourager les visiteurs et nuire à l'expérience utilisateur. Pour résoudre ce problème, j'ai identifié les éléments qui ralentissaient le chargement, tels que les images non optimisées ou les scripts lourds, et j'ai optimisé ces éléments en utilisant des techniques telles que la compression des images et la minification des fichiers JavaScript et CSS.",
      "<strong>Référencement :</strong> Le site avait un classement faible dans les moteurs de recherche, ce qui limitait sa visibilité. Pour y remédier, j'ai intégré des données structurées avec Schema.org, optimisé les balises meta, notamment les meta descriptions, et travaillé sur une meilleure organisation des informations pour faciliter l’indexation par les moteurs de recherche",
      "<strong>Accessibilité du site :</strong> Le site ne répondait pas à tous les critères d'accessibilité. J'ai utilisé l'outil Wave pour repérer les problèmes d’accessibilité (contrastes, éléments interactifs, titres manquants) et les ai corrigés, permettant ainsi une meilleure navigation pour les utilisateurs ayant des besoins spécifiques."
    ],
    "skills": [
      "Débogage",
      "Audit de performance",
      "Optimisation SEO",
      "Accessibilité",
      "Rédaction d'un rapport d'optimisation"
    ],
    "github" : "https://github.com/mariaamgo/OpenclassroomsProjet5.git"
  },
  {
      "id": "4",
      "title": "Kasa, application web de location immobilière",
      "cover": "./assets/projects/website_kasa.webp",
      "description": "Kasa est un projet de site web conçu pour une plateforme de location d’hébergements, réalisé pendant ma formation chez OpenClassrooms. Ce projet avait pour objectif de développer une application front-end dynamique en utilisant React et React Router pour une navigation fluide et une expérience utilisateur réactive. À partir de maquettes fournies et de données simulées en JSON, j'ai conçu une interface responsive adaptée aux mobiles, tablettes et ordinateurs.",
      "difficulties": [
        "<strong>Gestion du routage :</strong> La navigation entre les différentes pages devait être rapide et fluide. Grâce à React Router, j'ai pu configurer un routage efficace, garantissant une transition rapide et une expérience fluide pour l’utilisateur.",
        "<strong>Organisation du code et des composants :</strong> Structurer le code de manière modulaire et réutilisable a été une étape clé. En créant des composants réutilisables pour les différentes sections (bannières, header, footer, etc.), j'ai amélioré la lisibilité du code et facilité les futures modifications."
      ],
      "skills": [
          "Maîtrise de React pour créer des interfaces interactives",
          "Gestion du routage avec React Router",
          "Utilisation de SASS",
          "Initialisation d'applications avec Create React App",
          "Création d'interfaces avec des composants"
      ],
      "github" : "https://github.com/mariaamgo/OpenclassroomsProjet6.git"
  },
  {
      "id": "5",
      "title": "Mon Vieux Grimoire, application web de notation de livres",
      "cover": "./assets/projects/website_mon_vieux_grimoire.webp",
      "description": "Mon Vieux Grimoire est une application web de notation de livres, réalisée dans le cadre de ma formation chez OpenClassrooms. Ce projet consistait à développer le back-end d'un site de critiques littéraires. Mon objectif principal était de créer un serveur Node.js avec Express, de connecter celui-ci à une base de données MongoDB, et d'implémenter des opérations CRUD pour la gestion des livres et des notations des utilisateurs.",
      "difficulties": [
        "<strong>Authentification sécurisée :</strong> La mise en place d'un système d'authentification était essentielle pour protéger les comptes des utilisateurs. J’ai utilisé des outils de cryptage de mot de passe et de génération de token pour sécuriser les sessions, assurant ainsi la sécurité des données des utilisateurs.",
        "<strong>Optimisation des images :</strong> Pour éviter un temps de chargement trop élevé, j'ai dû optimiser le stockage des images. J'ai mis en place un processus de compression des images téléchargés à l'aide de la bibliothèque Multer, ce qui a permis de réduire leur taille sans perte de qualité."
      ],
      "skills": [
        "Création d'un serveur avec Node.js et Express",
        "Gestion de la base de données MongoDB",
        "Modélisation de données avec Mongoose",
        "Sécurité des données",
        "Optimisation d'images",
        "Gestion des fichiers utilisateurs"
      ],
      "github" : "https://github.com/mariaamgo/OpenclassroomsProjet7.git"
  },
  {
    "id": "5",
    "title": "Cartographie Incidents Travaux HTA/BT",
    "cover": "./assets/projects/website_cartographie.webp",
    "description": "La cartographie Incidents Travaux HTA/BT est une cartographie que j'ai développé dans le cadre de mon apprentissage au sein de Enedis. Elle permet aux agents de visualiser en temps réél les incidents et les travaux HTA et BT en cours.",
    "difficulties": [
      "<strong>Affichage en temps réel :</strong> Pour garantir une mise à jour dynamique des incidents et travaux en cours, j'ai utilisé une fonction AJAX qui effectue un appel à une page de requête SQL toutes les 30 secondes. Cela permet aux agents d’avoir des données actualisées sans recharger la page."
    ],
    "skills": [
      "API Leaflet",
      "AJAX",
      "PHP",
      "SQL"
    ]
}
]