/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/stwui/**/*.{svelte,js,ts,html}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(219, 181, 80)',
				secondary: 'rgb(246, 241, 238)'
			}
		}
	},
	plugins: [require('stwui/plugin')],
	stwui: {
		themes: [
			{
				mytheme: {
					primary: '#2563eb',
					default: '#E4E6EB',
					danger: '#dc2626',
					surface: 'rgb(246, 241, 238)',
					background: '#F0F2F5',
					border: '#000000',
					hover: '#000000',
					'secondary-content': 'slategrey',
				}
			}
		]
	}
};
