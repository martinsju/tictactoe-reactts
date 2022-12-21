import React, { useEffect, useState } from 'react'
import { StyledSquare } from './styled'

type SquareProps = {
	turn: string
	id: string
	isToggle: boolean
	setToggle: (isToogle: boolean) => void
}

const Square: React.FC<SquareProps> = function ({
	turn,
	id,
	setToggle,
	isToggle
}) {
	const [content, setContent] = useState('')

	function handleClick() {
		console.log('conteudo do quadrado: ', content)
		if (content === '') {
			setToggle(!isToggle)
			setContent(turn)
		}
	}

	return <StyledSquare onClick={handleClick}>{content}</StyledSquare>
}

export default Square
