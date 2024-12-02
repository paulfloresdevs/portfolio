/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			height: {
			  'custom': '52px', // Ajusta este valor según lo que consideres un tamaño medio (13 * 4px = 52px)
			}
		}
	},
	plugins: [],
}
