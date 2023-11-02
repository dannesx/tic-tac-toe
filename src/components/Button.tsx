interface ButtonInterface {
	value: string
	action: () => void
}

function Button(props: ButtonInterface) {
	return (
		<button
			className="absolute top-80 text-lg bg-background_light px-4 py-2 rounded-md uppercase tracking-wide hover:brightness-105 transition cursor-pointer"
			onClick={() => props.action()}
		>
			{props.value}
		</button>
	)
}

export default Button
