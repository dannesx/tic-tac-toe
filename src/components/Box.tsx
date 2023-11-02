import { useState, useContext, useEffect } from 'react'
import { GameContext, GameContextInterface } from '../contexts/GameContext'

interface BoxProps {
	id: number
}

function Box(props: BoxProps) {
	const { turn, result, line, passTurn, updateBoard } = useContext(
		GameContext
	) as GameContextInterface
	const [choice, setChoice] = useState('')

	useEffect(() => {
		if (!result) setChoice('')
	}, [result])

	function handleChoice() {
		setChoice(turn)
		updateBoard(props.id, turn)
		passTurn()
	}

	return (
		<button
			className={`bg-background_light p-10 rounded-md relative transition hover:brightness-110 cursor-pointer ${
				result && !line.includes(props.id) ? 'opacity-25' : 'opacity-100'
			}`}
			onClick={() => handleChoice()}
			disabled={choice || result ? true : false}
		>
			<img
				src={choice ? `icons/${choice}.svg` : ''}
				className="absolute w-8 -translate-x-1/2 -translate-y-1/2"
			/>
		</button>
	)
}

export default Box
