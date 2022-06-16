const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongooseID,
		ref: users,
	},
});
module.exports = mongoose.model(Profile, ProfileSchema);
