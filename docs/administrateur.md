# Documentation Technique

## Pré-requis

### Dépendances

- NodeJS && npm
- Angular CLI

Ces dépendances doivent être présentes pour la bonne exécution du projet.

## Processus d'Installation

Afin de procéder à l'installation de notre projet, voici la procédure à effectuer:

1. Cloner le répertoire:

`$ git clone https://github.com/aladoux/RankMyCrossfit.git`

2. Accéder au répertoire:

`$ cd RankMyCrossfit`

3. Lancer le Back-End :

`$ cd backend && npm install && npm start`

4. Lancer le Front-End :

`$ cd frontend && npm update && ng serve`

## Usage

Pour vérifier la bonne exécution de l'installation et de l'exécution, vous pouvez accéder à l'adresse et port par default qui est:

`http://localhost:4200/`

Vous devriez atterrir sur la page d'accueil de votre serveur Web.

### Exécuter la batterie de tests unitaires et End-to-End

Si vous ressentez le besoin d'exécuter l'ensemble de tests unitaire et end-to-end relatifs au projet, voici la marche à suivre:

1. Ouvrir un terminal bash dans le container du serveur Laravel:

   `$ docker exec -it --user root laravel-app bash`

2. Lancer les tests:

   1. Unitaires, Features et de non-régression (PHPUnit):

   `$ php artisan test`

   2. End-to-End (Dusk & Selenium)

   `$ php artisan dusk`

## Maintenance

En cas de problèmes concernant l'installation du projet (Back-end). Si un problème survient, n'hésitez pas à lancer les commandes suivantes (qui permettent de clean le node_modules) :
`$ cd back-end`
`$ npm cache clean –force`
`$ rm -rf node_modules package-lock.json`
`$ npm install`
`$ npm start`
