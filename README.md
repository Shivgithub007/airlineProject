
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
- Now execute the command `npx sequlize db:config`

## List of packages used
- `dotenv`  it is used to send the data written in `.env` file to the `process.env` object.
- `sequelize`  helps you define your data models, relationships, and perform database operations using JavaScript.
- `sequelize-cli` provides commands to manage your database schema using migration scripts and generate model files.
- `mysql2`  is the MySQL driver that sequelize uses to communicate with the MySQL database server.

## Database Design
- Airplane table
- Flights
- City
- Airports

- A airplane can belong to many flights but a flight can belong to a single airplane.
- A city can have many airports but a airport can belong to a single city.
- One airport can have many flights but one flight can belong only to a single airport.


## Steps for me
- Take the port number from the `process.env`.
- So to do this create a `.env` folder and write `port=port number`.
- `npm i dotenv` and configure the package into the new file `serverConifig` inside config folder.
```
const dotenv=require("dotenv")

dotenv.config();

module.exports={PORT:process.env.PORT}
```
- Now use this port into the server.
- `npx create sequelize init` => It will create folders like config,models,seeders,migerations;(Execute these commands into the root folder)
- Transfer all the folders into the src if the folder is repeates just delete it.
- Now in config.json file set up your project name and your local db password.

## Creating db using sequelize cli
- Execute the command `npx sequilize db:create` into the src folder because the config folder is inside it only. => It will create a new database into your my sql (Database name is going to be taken by config.json file)
- `npx sequelize model:generate --name City --attributes name:String` This command will create a table named (city) which is represented in modals and migeration folder.
- If we want to make any changes in the table we have to make in both models and migeration files. Then only it will get reflected into the db.
- `npx sequelize db:migerate` it will create a table into the database.
- `npx sequelize db:migerate:undo`=> it will undo the latest changes done into the database not into the migeration files and models files.



