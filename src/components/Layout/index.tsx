import React, { ReactNode } from 'react'
import Navbar from '../NavBar'
import Footer from '../Footer'

type LayoutProps = {
	children: ReactNode
}

const Layout: React.FC<LayoutProps> = function ({ children }) {
	return (
		<>
			<Navbar />
			<main> {children}</main>
			<Footer />
		</>
	)
}

export default Layout
