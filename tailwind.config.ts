
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				agency: {
					orange: 'hsl(var(--agency-orange))',
					blue: 'hsl(var(--agency-blue))',
					green: 'hsl(var(--agency-blue))',
					purple: 'hsl(var(--agency-purple))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary)/0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary)/0.5)' }
				},
				'pulse-scale': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'wobble': {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'15%': { transform: 'rotate(-5deg)' },
					'30%': { transform: 'rotate(5deg)' },
					'45%': { transform: 'rotate(-5deg)' },
					'60%': { transform: 'rotate(5deg)' },
					'75%': { transform: 'rotate(-5deg)' }
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-top': {
					'0%': { transform: 'translateY(-100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'elastic-in': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'50%': { transform: 'scale(1.2)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'rubber-band': {
					'0%': { transform: 'scale(1)' },
					'30%': { transform: 'scaleX(1.25) scaleY(0.75)' },
					'40%': { transform: 'scaleX(0.75) scaleY(1.25)' },
					'50%': { transform: 'scaleX(1.15) scaleY(0.85)' },
					'65%': { transform: 'scaleX(0.95) scaleY(1.05)' },
					'75%': { transform: 'scaleX(1.05) scaleY(0.95)' },
					'100%': { transform: 'scale(1)' }
				},
				'flip-in-x': {
					'0%': { transform: 'perspective(400px) rotateX(90deg)', opacity: '0' },
					'40%': { transform: 'perspective(400px) rotateX(-10deg)' },
					'70%': { transform: 'perspective(400px) rotateX(10deg)' },
					'100%': { transform: 'perspective(400px) rotateX(0deg)', opacity: '1' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'50%': { transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
				'wobble': 'wobble 1s ease-in-out',
				'slide-in-bottom': 'slide-in-bottom 0.8s ease-out',
				'slide-in-top': 'slide-in-top 0.8s ease-out',
				'elastic-in': 'elastic-in 0.8s ease-out',
				'rubber-band': 'rubber-band 1s ease-out',
				'flip-in-x': 'flip-in-x 0.8s ease-out',
				'bounce-in': 'bounce-in 0.8s ease-out',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			backdropBlur: {
				xs: '2px',
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
