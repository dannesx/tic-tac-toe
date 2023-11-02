interface ButtonInterface {
	value: string
}

function Button(props: ButtonInterface) {
	return (
		<button className="text-lg bg-background_light px-4 py-2 rounded-md uppercase tracking-wide hover:brightness-105 transition cursor-pointer">
			{props.value}
		</button>
	)
}

export default Button
