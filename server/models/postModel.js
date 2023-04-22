import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
});

const postSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		likes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true,
			},
		],
		comments: [commentSchema],
		image: String,
	},
	{
		timestamps: true,
	}
);

var PostModel = mongoose.model('Posts', postSchema);

export default PostModel;
