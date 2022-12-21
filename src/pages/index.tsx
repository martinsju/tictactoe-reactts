import styles from 'styles/Home.module.css'
import { useEffect } from 'react'
import { NextPage } from 'next'
import TicTacToe from 'components/TicTacToe'

const Home: NextPage = function () {
	useEffect(() => {
		console.log('carregou a pagina')
	}, [])

	return (
		<div>
			<div>
				<h1>Tic Tac Toe Game</h1>
			</div>

			<TicTacToe />
		</div>
	)
}

export default Home
