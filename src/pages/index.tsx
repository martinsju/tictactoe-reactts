import styles from 'styles/Home.module.css'
import { useEffect } from 'react'
import { NextPage } from 'next'
import TicTacToe from 'components/TicTacToe'

const Home: NextPage = function () {
	useEffect(() => {
		console.log('carregou a pagina')
	}, [])

	return (
		<>
			<TicTacToe />
		</>
	)
}

export default Home
