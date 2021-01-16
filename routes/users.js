const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', (req,res) => {
	res.send('We are from users');
});

router.post('/', async (req,res) => {
	const user = new User({
		name: req.body.name,
		username: req.body.username
	});
	try{
		
		const savedUser = await user.save();
		res.json(savedUser);
	}
	catch(err){
		res.json({ message: err });
	}
	
});

module.exports = router;