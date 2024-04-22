import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Navbar'
import Provider from '@/components/Provider'
import { SessionContext } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Stuff',
	description: 'Generated by facu'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<Provider>
				{/* <Nav /> */}
				<body className={inter.className}>{children}</body>
			</Provider>
		</html>
	)
}
