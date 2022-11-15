const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jasonwebtoken');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const users = [];

app.get('/users', (req,res)=>{
    res.json(users);
})

app.post('/users',jsonParser,async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        console.log(salt);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        console.log(hashedPassword);
        console.log(req.body);
        const user = { name: req.body.name, password: hashedPassword, salt: salt };
        users.push(user);
        console.log(users);
        console.log('user sucessfully registered')
        res.status(201).send();
    } catch {
        console.log('Something went wrong');
        console.log('user not registered, please try again')
        res.status(500).send();
    }
 
})

app.post('/users/login', jsonParser ,async (req,res) => {
   const user = users.find(user => user.name = req.body.name);
   if(user == null){
    return res.status(400).send('User Not Found');
   }
   try{
    if (await bcrypt.compare(req.body.password, user.password)){
        res.status(200).send('user logged in succesfully');
        const token = jwt.sign(user,'hkukboui3494hi',{expiresIn : '1h'})
        res.json({token});
    }else{
        res.send('Password Not Correct. Please re-enter the password');
    }
   }catch{
    res.status(500).send('Internal Server Error');
   }
})

app.listen(5000);