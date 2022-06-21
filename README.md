# ECV Compétition 2022 - Groupe 3 - Switch About

## Projet

...

## Installation

`docker-compose build && docker-compose up -d` <br>

API: [127.0.0.1:3000](http://127.0.0.1:3000) <br>
APP: [127.0.0.1:8080](http://127.0.0.1:8080) <br>
DB: [127.0.0.1:3306](http://127.0.0.1:3306) <br>

## Solution technique

Nous avons une API en nodejs + Express connecté à une base de donnée en MySQL mettant à disposition des routes basique pour manipuler les 3 modèles de données présent: user, formations, profil. 
<br>
Les profil sont généré grace l'API de Jotform qui via un webhook poste les données à l'API qui les intègrent à la BDD et les lies à des formations. 
<br>
L'application front react est un backoffice basique qui affiche les données JSON récupéré depuis l'API.


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

API (Nodejs) : [Valentin Magry](https://github.com/ValMgr)
APP (React) : [Keshia Mukenge](https://github.com/keshiamukenge)