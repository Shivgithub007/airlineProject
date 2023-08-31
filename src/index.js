const express= require("express");
const PORT = require("./config/serverConfig");
const appandport=()=>{ 
    //Setting up the app
    const app=express();
    let PORT=5000;
    //setting up the port
    app.listen(PORT,()=>{
        console.log(`Server is listening on port number ${PORT}`);
    })
}

appandport();