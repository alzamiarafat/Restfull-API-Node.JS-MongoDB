const express = require('express');
const mongoose = require('mongoose');
const usersRoute = require('./routes/users');




require('dotenv/config');
const app = express();

app.use('/users',usersRoute);


app.get('/', (req,res) =>{
	res.send('hello world');
});

mongoose.connect( process.env.DB_CONNECTION,
		{ useNewUrlParser: true , useUnifiedTopology: true },
		() =>{ console.log('Connect to db');}
	);

app.listen(5000);