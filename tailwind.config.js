/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#3B82F6",
				secondary: "#60A5FA",
				accent: "#22D3EE",
				textPrimary: "#E5F0FF",
				bgDark: "#020617",
			},
			backdropBlur: {
				sm: '4px',
			  },
		},
	},
	plugins: [],
}
