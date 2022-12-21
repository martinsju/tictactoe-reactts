import Board from 'components/Board'
import Square from 'components/Square'
import React from 'react'

const TicTacToe: React.FC = function () {
	// const squarePositions = [
	//   ["0", "1", "2",
	//    "3", "4", "5",
	//    "6", "7", "8"]
	// ]

	return (
		<Board>
			<Square />
			<Square />
			<Square />
		</Board>
	)
}

export default TicTacToe
