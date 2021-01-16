const express = require('express');
const mongoose = require('mongoose');

require('dotenv/config');
const app = express();

app.get('/', (req,res) =>{
	res.send('hello world');
});

mongoose.connect( process.env.DB_CONNECTION,
		{ useNewUrlParser: true , useUnifiedTopology: true },
		() =>{ console.log('Connect to db');}
	);
app.listen(5000);