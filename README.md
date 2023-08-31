src
    index.js
    models //folder
    controller //folder
    middleware //folder
    services 
    util
    config
    repository/
tests

## List of packages used
- `sequelize`  helps you define your data models, relationships, and perform database operations using JavaScript.
- `sequelize-cli` provides commands to manage your database schema using migration scripts and generate model files.
- `mysql2`  is the MySQL driver that sequelize uses to communicate with the MySQL database server.

## Steps
- `npx create sequelize init` => It will create folders like config,models,seeders,migerations;(Execute these commands into the root folder)
- Transfer all the folders into the src if the folder is repeates just delete it.
- Now in config.json file set up your project name and your local db password.
- Now execute the command `npx sequilize db:create` into the src folder because the config folder is inside it only. => It will create a new database into your my sql.

