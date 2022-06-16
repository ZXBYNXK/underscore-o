module.exports = posts = {
  include: ["Models:User", "Middleware:auth", "_O:Validator"],
            
  // Prop = End Point (i.e: routes/api/users/:id)
  "/:id": {
            			
     get: `auth, async (req, res) => {
             try {
	       const getAllUsers = await User.find();
               res.status(200).json(getAllusers);
             } catch {
               res.status(500).json({msg: "Server Error."})
             }
           }`,
                	
       },
    
    "/:id/posts/:postId": {
        get: `auth, async (req, res) => {
                try {
           	  const getAllUsers = await User.find();
            	  res.status(200).json(getAllusers);
                } catch {
            	  res.status(500).json({msg: "Server Error."})
                }
            }`,
            
        post: `auth, async (req, res) => {
            	 try {
            	        const getAllUsers = await User.find();
            	        res.status(200).json(getAllusers);
            	    } catch {
            	        res.status(500).json({msg: "Server Error."})
            	    }
            	}`,
     },            
}
