/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brown: '#4E3505',
				primary: '#EDB18B',
				light: '#F7F2F2',
				pink: '#FFA0A3'
			},
			fontFamily: {
				playfair: ['Playfair Display', 'serif']
			}
		}
	},
	plugins: [require('prettier-plugin-tailwindcss')]
};
