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
                ink: '#121212',
                oak: '#C4A484',
                slate: '#F5F5F7',
                'oak-dark': '#A88860',
            },
            fontFamily: {
                heading: ['Archivo', 'sans-serif'],
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
