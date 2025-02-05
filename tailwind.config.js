/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		aspectRatio: false
	},
	theme: {
		extend: {
			colors: {
				'yappa-blue': {
					50: '#e6e7fe',
					100: '#b7b9fd',
					200: '#9295fc',
					300: '#6e72fb',
					400: '#4A4FFA', // primary
					500: '#3b3fc8',
					600: '#2c2f96',
					700: '#1e2064',
					800: '#0f1032'
				},
				'yappa-orange': {
					100: '#ffcbc1',
					200: '#ffb1a1',
					300: '#ff9782',
					400: '#ff7d63', // primary
					500: '#cc644f',
					600: '#994b3b',
					700: '#663228',
					800: '#331914'
				},
				'yappa-gray': {
					600: '#282b28',
					500: '#515551',
					400: '#798079',
					300: '#a2aaa2',
					200: '#cad5ca', // primary
					100: '#d5ddd5'
				}
			},
			fontFamily: {
				sans: ['Manrope', 'sans-serif'],
				display: ['Manrope', 'sans-serif'],
				body: ['Poppins', 'sans-serif']
			},
			maxWidth: {
				'8xl': '88rem'
			},
			minHeight: {
				112: '28rem'
			},
			maxHeight: {
				112: '28rem'
			},
			minWidth: {
				128: '32rem',
				140: '35rem',
				160: '40rem',
				180: '45rem'
			},
			width: {
				18: '4.5rem',
				112: '28rem',
				128: '32rem',
				140: '35rem',
				160: '40rem',
				180: '45rem'
			},
			letterSpacing: {
				'very-wide': '0.2em'
			},
			fontSize: {
				'3xs': '0.6rem',
				'2xs': '0.7rem'
			},
			margin: {
				18: '4.5rem'
			}
		}
	},

	plugins: [
		require('@tailwindcss/aspect-ratio')
	]
};
