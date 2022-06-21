# ECV Compétition 2022 - Groupe 3 - Switch About

## Projet - Problématique

Le but du projet est d'automatiser la proposition de formation à l'aide d'un questionnaire (Jotform / typeform).


Actuellement il existe une liste de formation en base de donnée sur le site client, ainsi qu'un formulaire en ligne (Typeform) envoyant les données au service Airtable. La formation la plus compatible est déterminer à l'issue d'un rendez-vous téléphonique de 20 minutes après chaque soumission au formulaire et est ensuite insérer sur Airtable. <br>
Il n'existe donc aucun lien entre la liste des formations et les données envoyées par le formulaire.



Notre objectif est de fournir une solution technique rapide et fonctionnel pouvant être rapidement impémentée sur l'environnement du site client actuel, et d'éventullement réduire le nombre de services qui interviennent dans le processus.

## Solution technique

L'idée étant de récupérer les données du formulaire dans la base de donnée dans laquelle se trouve déjà la liste des formations proposées. Ensuite à l'aide des informations remplie dans le formulaire on va filtrer les formations qui sont compatibles avec les préférences de l'utilisateur pour essayer de déterminer la meilleure formation à proposer.



Nous avons une API en nodejs + Express connecté à une base de donnée en MySQL mettant à disposition des routes basique pour manipuler les 3 modèles de données présent: user, formations, profil. 


Les profil sont généré grace l'API de Jotform qui via un webhook poste les données à l'API qui les intègrent à la BDD et les lies à des formations. 


L'application front react est un backoffice basique qui affiche les données JSON récupéré depuis l'API, et qui permet de facilement voir et organiser les sousmissions du formulaire à l'aide de filtre / barre de recherche etc.. pour faciliter. 


## Installation

`docker-compose build && docker-compose up -d` <br>

API: [127.0.0.1:3000](http://127.0.0.1:3000) <br>
APP: [127.0.0.1:8080](http://127.0.0.1:8080) <br>
DB: [127.0.0.1:3306](http://127.0.0.1:3306) <br>

### ENV File template

```env
MYSQLDB_DATABASE=db_name
MYSQLDB_USER=user_name
MYSQLDB_PASSWORD=user_password
MYSQLDB_ROOT_PASSWORD=root_password

DB_PORT=3306
API_PORT=3000
APP_PORT=8080
ADMINER_PORT=8888
```


## Crédits

API (Nodejs) : [Valentin Magry](https://github.com/ValMgr) <br>
APP (React) : [Keshia Mukenge](https://github.com/keshiamukenge)