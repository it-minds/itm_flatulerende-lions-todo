/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: [
		'./pages/**/*.{html,js,ts,jsx,tsx}',
		'./src/**/**/**/**/**/*.{html,js,ts,jsx,tsx}',
	],
  theme: {
    extend: {},
  },
  plugins: [],
}
