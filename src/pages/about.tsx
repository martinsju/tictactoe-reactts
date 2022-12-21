import React, { useEffect } from 'react'
import Link from 'next/link'
import { NextPage } from 'next'

const About: NextPage = function () {
	useEffect(() => {
		console.log('carregou about')
	}, [])

	return (
		<div>
			<h3>This is the About page</h3>
			<p>
				This is a tic tac toe game made with Nextjs, Typescript and
				Styled-components
			</p>
		</div>
	)
}

export default About
