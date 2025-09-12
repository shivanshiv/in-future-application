import type { Config } from 'tailwindcss';

export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#F0F9FF',
					100: '#E0F2FE',
					200: '#BAE6FD',
					300: '#7DD3FC',
					400: '#38BDF8',
					500: '#0EA5E9',
					600: '#0284C7',
					700: '#0369A1',
					800: '#075985',
					900: '#0C4A6E',
				},
				accent: {
					50: '#ECFDF5',
					100: '#D1FAE5',
					200: '#A7F3D0',
					300: '#6EE7B7',
					400: '#34D399',
					500: '#10B981',
					600: '#059669',
					700: '#047857',
					800: '#065F46',
					900: '#064E3B',
				},
				neutral: {
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#E5E5E5',
					300: '#D4D4D4',
					400: '#A3A3A3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
					950: '#0A0A0A',
				}
			},
			fontFamily: {
				sans: [
					"Inter", "ui-sans-serif", "system-ui", "-apple-system",
					"Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans",
					"Apple Color Emoji", "Segoe UI Emoji"
				]
			},
			boxShadow: {
				soft: '0 10px 30px -15px rgba(0,0,0,0.35)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
				'glow-accent': '0 0 20px rgba(16, 185, 129, 0.3)',
			},
			backdropBlur: {
				xs: '2px',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
} satisfies Config; 