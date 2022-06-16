const {Router} = require("express");
const router = Router();

const User = require('../../models/User');
const auth = require('../middleware/auth');
const _O = require('Validator');


router.get("/:id", auth, async (req, res) => {
             try {
	       const getAllUsers = await User.find();
               res.status(200).json(getAllusers);
             } catch {
               res.status(500).json({msg: "Server Error."})
             }
           });
router.get("/:id/posts/:postId", auth, async (req, res) => {
                try {
           	  const getAllUsers = await User.find();
            	  res.status(200).json(getAllusers);
                } catch {
            	  res.status(500).json({msg: "Server Error."})
                }
            });
router.post("/:id/posts/:postId", auth, async (req, res) => {
            	 try {
            	        const getAllUsers = await User.find();
            	        res.status(200).json(getAllusers);
            	    } catch {
            	        res.status(500).json({msg: "Server Error."})
            	    }
            	});
module.exports = router;
