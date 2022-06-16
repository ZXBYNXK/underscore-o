module.exports = profiles = {
  
  include: [
  	"Models:Profile",
  	"Utils:isEmpty",
  	"Middleware:auth", 
  	"bcrypt:bcryptjs", 
  	"{check, validationResult}:express-validator"
  	],
  
  code: `const profileValidator = [
  		check("fName", "First name is required.").not().isEmpty(),
  		check("lName", "Last name is required.").not().isEmpty(),
  		check("name", "Name is required.").not().isEmpty(),
  		check("githubUrl", "Invalid URL").optional().isURL(),
  		check("twitterUrl", "Invalid URL").optional().isURL(),
  		check("youtubeUrl", "Invalid URL").optional().isURL(),
  		check("email", "Invalid Email").isEmail()
  	]`,
  "/": {
  	post: `profileValidator, (req, res) => {
  		const vResult = validationResult(req);
  		if (isEmpty(vResult)) {
  		  return res.status(400).json(vResult);
  		}
  		
  		try {
  		  const profile = await Profile.create(req.body);
  		  
  		  if (isEmpty(profile)) {
  		  	return res.status(400).json({errors: { message: "First and last name are required." } });
  		  	
  		  }
  		  
  		  return res.status(201).json({ profile });
  		  
  		} catch (error) {
               	  console.error(error);
                  return res.status(500).json({ error: { message: error.message } });
             	}
  	}`,
  	
  	put: `auth, profileValidator, async (req, res) => {
  		const vResult = validationResult(req);
  		if (isEmpty(vResult)) {
  			return res.status(400).json(vResult);
  		}
  		
  		try {
  		  const updatedProfile = await Profile.findOneAndUpdate(
  		    { user: req.user.id },
  		    { $set: { ...req.body },
  		    { new: true }
  		  );
  		  
  		  if (!updatedProfile) {
  		  	return res.status(400).json({ msg: "Bad Request" });	
  		  }
  		  
  		  return res.status(201).json(updatedProfile);
  		  
  		} catch (error) {
                  console.error(error);
                  return res.status(500).json({ error: { message: error.message } });
             	}
  	}`,
  	
  	delete: `profileValidator, async (req, res) => {
 		   const vResult = validationResult(req);
  		   if (isEmpty(vResult)) {
  			return res.status(400).json(vResult);
  		  }
  		  
  		  try {
  		  
  		    const profile = await Profile.findOneAndRemove({user: req.user.id});
  		    if (isEmpty(profile)) {
  		      return res.status(400).json({errors: { message: "First and last name are required." } });	
  		    }
  		    
  		    return res.status(201).json(updatedProfile);
  		    
  		  } catch (error) {
  		  
                  console.error(error);
                  return res.status(500).json({ error: { message: error.message } });
                  
             	}
  			
  	}`,
  	
  },
  
  "/all": {
            			
     get: `auth, async (req, res) => {
             try {
	       const profiles = await Profile.find();
               return res.status(200).json({ profiles });
             } catch (error) {
               console.error(error);
               res.status(500).json({ error: { message: error.message } });
             }
           }`,
                	
       },
    
    "/:id": {
        get: `auth, async (req, res) => {
                try {
           	  const profile = await Profile.findById(req.params.id);
            	  return res.status(200).json({ profile });
                } catch (error) {
               	  console.error(error);
                  return res.status(500).json({ error: { message: error.message } });
             	}
            }`,

     },            
}
