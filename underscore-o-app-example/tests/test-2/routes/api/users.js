const {Router} = require("express");
const router = Router();

const User = require('../../models/User');
const auth = require('../middleware/auth');
const { secretOrKey } = require('../../secrets');
const isEmpty = require('../../utils/isEmpty');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');

const checkRegister = [
  		check("email", "Email is required").not().isEmpty(),
  		check("email", "Must include a valid email.").isEmail(),
  		check("password", "Password is required").not().isEmpty(),
  		check("password", "Password must be over 6 characters.").isLength({min:6})
  	];
  	const checkLogin = [
  		check("email", "Email is required").not().isEmpty(),
  		check("password", "Password is required").not().isEmpty()
  	];

router.post("/", checkRegister, async (req, res) => {
     
             const errors = validationResult(req);
             if (!errors.isEmpty()) {
             	return res.status(400).json({errors: errors.array()});
             }
             try {
	    	const exists = await User.findOne({email: req.body.email});
	    	if (!isEmpty(exists)) {
	    		return res.status(400).json({email: "Invalid input"});
	    	}
	    	
	    	const salt = await bcrypt.genSalt(10);
	    	
	    	console.log(req.body, salt);
	    	
	    	const hashed = await bcrypt.hash(req.body.password, salt);
	    	
	    	await User.create({email: req.body.email, password: hashed});
	    	
	    	return res.status(201).json({user: "Successfully registered, login to get started"});
	    	
             } catch (error) {
                console.error(error);
                return res.status(500).json({error : {msg: error.message}});
             }
       });
router.put("/", checkLogin, async (req, res) => {
   		try {
   			const {email,  password} = req.body;
   			const user = await User.findOne({email});
   			
   			if (!isEmpty(user)) {
   				return res.status(400).json({message: "Invalid email and or password."});
   			}
   			
   			const isValidPassword = await bcrypt.compare(password, user.password);
   			
   			if (!isValidPassword) {
				return res.status(400).json({message: "Invalid email and or password."});
			}
			
			await User.findByIdAndUpdate(user.id, { $set: { lastLogin: Date.now() } });

			const payload = {
				id: user.id,
				email
			};
			
			const token = jwt.sign(payload, secretOrKey, expiresIn: 3600* 6);
			return res.status(200).json({token});				
   		} catch (error) {
   			console.error(error);
   			return res.status(500).json({error : {msg: error.message}});
   		}
     	});
module.exports = router;
