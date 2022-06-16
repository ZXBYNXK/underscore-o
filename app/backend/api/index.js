const users = require('./users'),
profiles = require('./profiles'),
posts = require('./posts')
middleware = require('./middleware');


module.exports = {
	api: {
		users,
		profiles,
		posts,
		middleware,
	}
}






/*
module.exports = { 
    api: {
        
        users: {
            include: ["Models/User", "Middleware/auth", "_O/Validator"],
            get: `async (req, res) => {
                try {
                    const getAllUsers = await User.find();
                    res.status(200).json(getAllusers);
                } catch {
                    res.status(500).json({msg: "Server Error."})
                }
            }`,
            post: `async (req, res) => {
                try {
                    const getAllUsers = await User.find();
                    res.status(200).json(getAllusers);
                } catch {
                    res.status(500).json({msg: "Server Error."})
                }
            }`,
            
        },

        profiles: {
            include: ["Models/Profile", "Middleware/auth", "_O/Validator"],
            get: `async (req, res) => {
                        try {
                            const getAllUsers = await Profile.find();
                            res.status(200).json(getAllusers);
                        } catch {
                            res.status(500).json({msg: "Server Error."})
                        }
                    }`,
            post: `async (req, res) => {
                        try {
                            const getAllUsers = await User.find();
                            res.status(200).json(getAllusers);
                        } catch {
                            res.status(500).json({msg: "Server Error."})
                        }
                    }`,

        },
        user: {
            include: ['Models/User', 'Models/Profile'],
            get: `async (req, res) => {
                    try {
                        const getUserById = await User.findById();
                        res.status(200).json(getAllusers);
                    } catch {
                        res.status(500).json({msg: "Server Error."})
                    }
                }`,
            
            }
    }
}
*/

