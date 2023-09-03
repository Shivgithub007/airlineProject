const express= require("express");

const {PORT} = require("./config/serverConfig");

const cityRepository=require("./repository/city-repository")

const ApiRoutes=require("./routes/index");


const appandport=()=>{ 
    //Setting up the app
    const app=express();

    //To accept the response coming form the body
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    // It will forward all the request to the api routes
    app.use("/api",ApiRoutes)

    //setting up the port
    app.listen(PORT,async ()=>{
        console.log(`Server is listening on port number ${PORT}`);
        
    })
}

appandport();