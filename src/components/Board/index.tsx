import React, { ReactNode } from 'react'
import * as C from './styled'

type BoardProps = {
	children: ReactNode
}

const Board: React.FC<BoardProps> = function ({ children }) {
	return <C.Board>{children}</C.Board>
}

export default Board
