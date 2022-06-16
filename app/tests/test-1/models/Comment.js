const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
	profile: {
		type: Schema.Types.ObjectId,
		ref: profiles,
	},

	text: {
		type: String,
		required: true,
	},
},{ timestamps:{} });
module.exports = mongoose.model(Comment, CommentSchema);
