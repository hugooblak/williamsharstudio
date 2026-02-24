/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: '#FAF9F6',
                ink: '#1A1A1A',
                oak: '#E5D3B3',
                slate: '#F5F5F7',
                'oak-dark': '#D4B996',
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backdropBlur: {
                md: '12px',
            },
        },
    },
    plugins: [],
}
