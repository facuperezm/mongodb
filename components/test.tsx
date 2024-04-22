'use client'
import { useSession } from 'next-auth/react'

export default function Test() {
	const { data: session } = useSession()
	console.log({ session }, 'this is session')
	return (
		<h1>
			{session?.user ? (
				<p>
					Logged in as {session.user.email}
					<img
						src={session.user.image}
						width={37}
						height={37}
						className='rounded-full '
						alt='profile'
					/>
					{session.user.name}
				</p>
			) : (
				<p>Not signed in</p>
			)}
		</h1>
	)
}
