
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
				tech: {
					blue: 'hsl(var(--tech-blue))',
					gray: 'hsl(var(--slate-gray))',
					midgray: 'hsl(var(--mid-gray))',
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
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
				'slide-in-left': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'typing': {
					'0%': { opacity: '0.5' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0.5' }
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
				},
				// New Advanced Animations
				'neon-pulse': {
					'0%': { 
						boxShadow: '0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary)), 0 0 15px hsl(var(--primary))'
					},
					'100%': { 
						boxShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary)), 0 0 40px hsl(var(--primary))'
					}
				},
				'cyber-glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' }
				},
				'holographic': {
					'0%': { 
						backgroundPosition: '0% 50%',
						filter: 'hue-rotate(0deg)'
					},
					'50%': { 
						backgroundPosition: '100% 50%',
						filter: 'hue-rotate(180deg)'
					},
					'100%': { 
						backgroundPosition: '0% 50%',
						filter: 'hue-rotate(360deg)'
					}
				},
				'liquid-morph': {
					'0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
					'25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
					'50%': { borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%' },
					'75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' }
				},
				'plasma-wave': {
					'0%, 100%': { 
						backgroundPosition: '0% 0%',
						transform: 'rotate(0deg)'
					},
					'50%': { 
						backgroundPosition: '100% 100%',
						transform: 'rotate(180deg)'
					}
				},
				'quantum-spin': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'25%': { transform: 'rotate(90deg) scale(1.1)' },
					'50%': { transform: 'rotate(180deg) scale(1)' },
					'75%': { transform: 'rotate(270deg) scale(0.9)' },
					'100%': { transform: 'rotate(360deg) scale(1)' }
				},
				'dimensional-shift': {
					'0%, 100%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
					'25%': { transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)' },
					'50%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(10deg)' },
					'75%': { transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg)' }
				},
				'aurora-dance': {
					'0%, 100%': { backgroundPosition: '0% 0%' },
					'25%': { backgroundPosition: '100% 0%' },
					'50%': { backgroundPosition: '100% 100%' },
					'75%': { backgroundPosition: '0% 100%' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'electric-flow': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' }
				},
				'particle-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px)',
						opacity: '0'
					},
					'50%': { 
						transform: 'translateY(-50px) translateX(25px)',
						opacity: '1'
					}
				},
				'cyber-scan': {
					'0%': { 
						backgroundPosition: '0% 0%',
						opacity: '0'
					},
					'50%': { 
						backgroundPosition: '100% 100%',
						opacity: '1'
					},
					'100%': { 
						backgroundPosition: '200% 200%',
						opacity: '0'
					}
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
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'typing': 'typing 2s ease-in-out infinite',
				'elastic-in': 'elastic-in 0.8s ease-out',
				'rubber-band': 'rubber-band 1s ease-out',
				'flip-in-x': 'flip-in-x 0.8s ease-out',
				'bounce-in': 'bounce-in 0.8s ease-out',
				// New Advanced Animations
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
				'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite',
				'holographic': 'holographic 3s ease-in-out infinite',
				'liquid-morph': 'liquid-morph 8s ease-in-out infinite',
				'plasma-wave': 'plasma-wave 4s ease-in-out infinite',
				'quantum-spin': 'quantum-spin 2s linear infinite',
				'dimensional-shift': 'dimensional-shift 6s ease-in-out infinite',
				'aurora-dance': 'aurora-dance 8s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 2s linear infinite',
				'electric-flow': 'electric-flow 2s linear infinite',
				'particle-float': 'particle-float 3s ease-in-out infinite',
				'cyber-scan': 'cyber-scan 2s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'holographic': 'linear-gradient(45deg, #ff0080, #00ffff, #ff0080, #00ffff)',
				'plasma': 'linear-gradient(45deg, rgba(255, 0, 128, 0.3), rgba(0, 255, 255, 0.3), rgba(128, 0, 255, 0.3), rgba(255, 128, 0, 0.3))',
				'aurora': 'linear-gradient(45deg, rgba(255, 0, 128, 0.1), rgba(0, 255, 255, 0.1), rgba(128, 0, 255, 0.1), rgba(255, 128, 0, 0.1))',
				'cyber-grid': 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)'
			},
			backdropBlur: {
				xs: '2px',
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px',
			},
			transformOrigin: {
				'center-3d': 'center center -50px',
			},
			backgroundSize: {
				'400': '400% 400%',
				'200': '200% 200%',
				'grid': '20px 20px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
