import mongoose, { Document, models } from 'mongoose'

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	image: {
		type: String,
		required: true
	}
})

const User = models.User || mongoose.model('User', userSchema)

export default User
