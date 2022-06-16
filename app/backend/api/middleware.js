module.exports = {
	auth: {
		include: ["jwt:jsonwebtoken", "Secrets:secretOrKey"],
		code: `module.exports = async (req, res, next) => {
			try {
				const decodedToken = await jwt.verify(req.headers["x-bh-token"], secretOrKey);
				if (!decodedToken) {
					return res.status(403).message({token: "Authentication Failed"});
				}
				console.log("Verified:", decodedToken);
				return next();
			} catch (error) {
				console.error(error);
				return res.status(500).json({ message: error });
			}
		}`
	},
	
}
