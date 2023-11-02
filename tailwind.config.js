/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#1f2421',
				background_light: '#2E3430',
				secondary: '#216869',
				primary: '#49a078',
				light: '#9cc5a1',
				font: '#dce1de',
			},
		},
	},
	plugins: [],
}
