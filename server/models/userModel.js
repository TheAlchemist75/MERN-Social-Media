import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
<<<<<<< HEAD
		profilePicture: {
			type: String,
			default:
				'https://blogtimenow.com/wp-content/uploads/2014/06/hide-facebook-profile-picture-notification.jpg',
		},
=======
		profilePicture: String,
>>>>>>> parent of 50ec57c (Merge pull request #4 from The-Jay-Aher/master)
		coverPicture: String,
		about: String,
		livesIn: String,
		worksAt: String,
		relationship: String,
		country: String,
		followers: [],
		following: [],
	},
	{ timestamps: true }
);

const UserModel = mongoose.model('Users', UserSchema);
export default UserModel;
