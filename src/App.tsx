import Button from './components/Button'
import Grid from './components/Grid'
import Score from './components/Score'

function App() {
	return (
		<div className="bg-background text-font w-screen h-screen flex flex-col justify-center items-center gap-5 cursor-default">
			<h1 className="text-3xl font-bold uppercase tracking-wide">
				Tic Tac Toe
			</h1>
			<div className="relative flex justify-center items-center">
				<Score name="cpu" points={0} />
				<Score name="player" points={0} />
				<Grid />
			</div>
			<Button value="new game" />
		</div>
	)
}

export default App
