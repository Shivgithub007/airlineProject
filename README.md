
## Project Setup in your local
- Clone the git repository in your machine.
- Install all the required folders by using `npm install`.
- Create a `.env` file and write into the file as written below
```
PORT=5000
```
- Now in `src/config` create a file `config.json` and write the commands as written below.
```
"development": {
    "username": <Your DB username>,
    "password": <Your DB password>,
    "database": "Flights_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
```

## List of packages used
- `sequelize`  helps you define your data models, relationships, and perform database operations using JavaScript.
- `sequelize-cli` provides commands to manage your database schema using migration scripts and generate model files.
- `mysql2`  is the MySQL driver that sequelize uses to communicate with the MySQL database server.

## Steps for me
- `npx create sequelize init` => It will create folders like config,models,seeders,migerations;(Execute these commands into the root folder)
- Transfer all the folders into the src if the folder is repeates just delete it.
- Now in config.json file set up your project name and your local db password.
- Now execute the command `npx sequilize db:create` into the src folder because the config folder is inside it only. => It will create a new database into your my sql.



