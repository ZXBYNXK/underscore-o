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
		0: D,
		1: a,
		2: t,
		3: e,
	},

	videoLength: {
		0: N,
		1: u,
		2: m,
		3: b,
		4: e,
		5: r,
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
