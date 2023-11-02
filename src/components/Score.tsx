interface ScoreInterface {
	name: string
	points: number
}

function Score(props: ScoreInterface) {
	return (
		<div
			className={`w-25 absolute top-1/2 -translate-y-1/2 z-50 flex flex-col items-center ${
				props.name === 'cross' ? '-left-40' : '-right-40'
			}`}
		>
			<h2 className="text-2xl uppercase">{props.name}</h2>
			<span className="text-2xl">{props.points}</span>
		</div>
	)
}

export default Score
