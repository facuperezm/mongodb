import mongoose from 'mongoose'

let isConnected = false

export const connectDB = async () => {
	mongoose.set('strictQuery', true)
	if (isConnected) {
		return
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI || '')

		isConnected = true

		console.log('Connected to MongoDB')
	} catch (error) {
		console.log('Error connecting to MongoDB', error)
	}
}
