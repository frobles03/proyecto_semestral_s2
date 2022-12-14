import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
	id: {
		type: int,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	excerpt: {
		type: String,
		required: true,
	},
	content: {
		type: String,
        required: true,
	},
    published_on: {
		type: String,
        required: false,
	},
});

const postsModel = mongoose.model("Posts", postsSchema);

export default postsModel;