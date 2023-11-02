import { useContext } from 'react'
import { GameContext, GameContextInterface } from './contexts/GameContext'
import Button from './components/Button'
import Grid from './components/Grid'
import Score from './components/Score'

function App() {
	const { p1Score, p2Score, result, startNewGame } = useContext(
		GameContext
	) as GameContextInterface

	return (
		<div className="bg-background text-font w-screen h-screen flex flex-col justify-center items-center gap-5 cursor-default">
			<h1 className="text-3xl font-bold uppercase tracking-wide">
				{result ? `${result} wins` : 'tic tac toe'}
			</h1>
			<div className="relative flex justify-center items-center">
				<Score name="cross" points={p1Score} />
				<Score name="circle" points={p2Score} />
				<Grid />
			</div>
			{result ? <Button value="new game" action={startNewGame} /> : null}
		</div>
	)
}

export default App
