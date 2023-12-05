require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const ConnectDB = require("./DataBase/ConnectDB");

app.get("/",(req,res)=>
{
    res.send("SHREE GANESH.....");
});

const start_ = async()=>{
    try 
    {
        await ConnectDB(process.env.MonogoDb_URL);
        app.listen(PORT,()=>{
            console.log(`SERVER IS CONNECTED ON PORT ${PORT}.....`);
        })
    } 
    catch (error) 
    {
        console.log(error);
    }
};

start_();