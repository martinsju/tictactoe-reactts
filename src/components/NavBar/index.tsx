import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = function () {
	return (
		<>
			<nav>
				<Link href='/'>Home page</Link>
				<Link href='/about'>About the app</Link>
			</nav>
			<hr />
		</>
	)
}

export default Navbar
