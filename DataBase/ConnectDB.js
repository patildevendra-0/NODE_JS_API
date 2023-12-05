
const mongoose = require('mongoose');

const ConnectDb = (uri)=>
{
    try 
    {
        console.log("SUCCESS :  DATABASE CONNECTED ..");
        return mongoose.connect(uri);
    } 
    catch (error) 
    {
        console.log(error);
    }
}

module.exports = ConnectDb;