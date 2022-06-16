const mongoose = require('mongoose');

const Comment = require('../../models/Comment');
const PostSchema = new mongoose.Schema({
	author: {
		type: String,
	},

	cohort: {
		type: String,
	},

	title: {
		type: String,
		required: true,
	},

	link: {
		type: String,
		required: true,
	},

	categories: {
		type: String,
		default: [],
	},

	skillLevel: {
		type: String,
		enum: ["Beginner", "Intermediate", "Advanced", "Associate", "Junior", "Senior", "Lead"],
		required: true,
	},

	resourceTypes: {
		type: String,
		enum: ["Article", "Video", "Website", "Slide Show", "eBook", "News Letter", "Blog", "Other"],
		required: true,
	},

	cost: {
		type: Number,
		required: true,
	},

	publishedAt: {
		type: Date,
	},

	videoLength: {
		type: Number,
	},

	comments: {
		type: [Comment],
		default: [],
	},

	likes: {
		type: [Schema.Types.ObjectId],
		default: [],
	},

	rating: {
		type: [{user: Schema.Types.ObjectId, score: Number}],
		default: [],
	},
});
module.exports = mongoose.model(Post, PostSchema);
