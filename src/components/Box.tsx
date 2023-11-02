import { useState } from 'react'

function Box() {
	const [choice, setChoice] = useState('')

	function handleChoice(e: MouseEvent) {
		console.log(e.target)
		setChoice('cross')
	}

	return (
		<div
			className="bg-background_light p-10 rounded-md relative transition hover:brightness-110 cursor-pointer"
			onClick={e => handleChoice(e)}
		>
			<img
				src={choice ? `icons/${choice}.svg` : ''}
				className="absolute w-8 -translate-x-1/2 -translate-y-1/2"
			/>
		</div>
	)
}

export default Box
