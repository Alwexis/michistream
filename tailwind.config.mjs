/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat'],
				nunito: ['Nunito'],
			},
			transitionProperty: {
				width: 'width'
			},
		},
	},
	plugins: [],
}
