import mongoose, { Document } from 'mongoose'

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	}
})
