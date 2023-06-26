import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

import User from '@models/user'
import { connectDB } from '@utils/connectDB'

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET
		})
	],
	callbacks: {
		async session({ session }) {
			const sessionUser = await User.findOne({ email: session.user.email })
			session.user.id = sessionUser._id.toString()

			return session
		},
		async signIn({ account, profile, user, credentials }) {
			try {
				await connectDB()

				const userExists = await User.findOne({ email: profile.email })

				if (!userExists) {
					await User.create({
						email: profile.email,
						username: profile.name,
						image: profile.image
					})
				}

				return true
			} catch (error) {
				console.log('Error in signIn callback', error)
				return false
			}
		}
	}
})

export { handler as GET, handler as POST }