/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'black',
				secondary: 'rgba(219, 219, 219)'
			}
		}
	},
	plugins: []
};
