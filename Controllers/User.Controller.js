const User = require("../Models/User.Model");


const Get_All_Users = async(req,res)=>
{   
    try 
    {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) 
    {
        res.status(500).json({error});
    }
};

const Register_User = async(req,res)=>
{
    try 
    {
        const {name,email,mobile} = req.body;

        const newUser = new User
        ({
            name,
            email,
            mobile
        });
        await newUser.save();
        res.status(201).json(newUser);
    } 
    catch (error) 
    {
        res.status(500).json({error:error.message});
    }
};

const Update_User = async(req,res)=>{
    try 
    {
        const {name,email,mobile} = req.body;

        const Updated_user = await User.findByIdAndUpdate(req.params.id,{name,email,mobile},{new:true});
        if(!Updated_user)
        {
            return res.status(400).json({error:'USER NOT FOUND'});
        }
        res.status(200).json(Updated_user);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({error:error.message});
    }
};

const Delete_user = async(req,res)=>
{
    try 
    {
        const delete_user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(delete_user);
    } 
    catch (error) 
    {
        res.status(500).json({error:error.message});
    }
};



module.exports = {Get_All_Users,Register_User,Update_User,Delete_user};