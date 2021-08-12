const express = require('express');
const connectDB = require('./config/connectDB');
require ('dotenv').config({path:'./config/.env'});
const User = require('./models/User');


const app = express();
app.use(express.json());
connectDB();
const PORT = process.env.PORT || 5000;

//Add user to the Database
app.post('/users/add', async(req,res) => { 
    const {fullName, email, age, phone} = req.body;
    const newUser = new User({fullName, email, age, phone});
    try {
        await newUser.save();
        res.send(newUser)
    } catch (error) {
        res.send(error)
    }
})

//Read all users
app.get('/users/get', async (req,res) =>{
    try {
        const users = await User.find();
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})
//Read user by Id
app.get('/users/get/:id', async (req,res) =>{
    try {
        const user = await User.findById(req.params.id);
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})
//Edit user by Id
app.put('/users/update/:id', async (req,res) =>{
    try {
        const editedUser = await User.findByIdAndUpdate(req.params.id, {...req.body}, {new:true});
        res.send(editedUser)
    } catch (error) {
        res.send(error)
    }
})
//Delete user by Id
app.delete('/users/delete/:id', async (req,res) =>{
    try {
        const userDel = await User.findByIdAndDelete(req.params.id);
        res.send(userDel)
    } catch (error) {
        error(error)
    }
})

app.listen(PORT, (err) => err ? console.log(err) : console.log(`server is running on ${PORT}`));