const express= require("express");

const {PORT} = require("./config/serverConfig");

const appandport=()=>{ 
    //Setting up the app
    const app=express();

    //To accept the response coming form the body
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    //setting up the port
    app.listen(PORT,()=>{
        console.log(`Server is listening on port number ${PORT}`);
    })
}

appandport();