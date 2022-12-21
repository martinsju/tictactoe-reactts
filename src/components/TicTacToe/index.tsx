import Board from 'components/Board'
import Square from 'components/Square'
import React, { useState } from 'react'
import * as C from './styled'

const TicTacToe: React.FC = function () {
	// const squarePositions = [
	//   ["0", "1", "2",
	//    "3", "4", "5",
	//    "6", "7", "8"]
	// ]

	const [isToggle, setToggle] = useState(true)
	const turn = isToggle ? 'X' : 'O'

	return (
		<C.Container>
			<h1>Tic Tac Toe Game</h1>
			<h3>Turn: {turn}</h3>

			<C.Board>
				<C.Row>
					<Square
						id='0'
						turn={turn}
						isToggle={isToggle}
						setToggle={setToggle}
					/>
					<Square
						id='1'
						turn={turn}
						isToggle={isToggle}
						setToggle={setToggle}
					/>
					<Square
						id='2'
						turn={turn}
						isToggle={isToggle}
						setToggle={setToggle}
					/>
				</C.Row>
				<C.Row>
					<Square
						id='3'
						turn={turn}
						isToggle={isToggle}
						setToggle={setToggle}
					/>
					<Square
						id='4'
						turn={turn}
						isToggle={isToggle}
						setToggle={setToggle}
					/>
					<Square
						id='5'
						turn={turn}
						isToggle={isToggle}
						setToggle={setToggle}
					/>
				</C.Row>
				<C.Row>
					<Square
						id='6'
						turn={turn}
						isToggle={isToggle}
						setToggle={setToggle}
					/>
					<Square
						id='7'
						turn={turn}
						isToggle={isToggle}
						setToggle={setToggle}
					/>
					<Square
						id='8'
						turn={turn}
						isToggle={isToggle}
						setToggle={setToggle}
					/>
				</C.Row>
			</C.Board>
		</C.Container>
	)
}

export default TicTacToe
