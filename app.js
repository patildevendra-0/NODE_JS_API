require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const ConnectDB = require("./DataBase/ConnectDB");
const User_Router = require("./Routes/User.Route");
const Body_Parser = require('body-parser');

app.use(Body_Parser.json());
app.use("/api/user",User_Router);

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