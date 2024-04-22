'use client'

import { SessionProvider } from 'next-auth/react'

const Provider = ({ children }: any) => (
	<SessionProvider>{children}</SessionProvider>
)

export default Provider
