const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req,res) =>{
	res.send('hello world');
});

mongoose.connect('mongodb+srv://zami:zami123456@cluster0.2b1je.mongodb.net/zami?retryWrites=true&w=majority',
		{ useNewUrlParser: true , useUnifiedTopology: true },
		() =>{ console.log('Connect to db');}
	);
app.listen(5000);