/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                nunito: 'nunito, sans-serif,serif',
                kalam: 'Kalam, cursive',
            },
            colors: {
                bg: '#F3F6FF',
                secondBg: '#FEFFFE',
                lighthover: '#F9FBFF',
                primary: '#7860CC',
                lighttext: '#B2B3BC',
                lightborder: '#e2e8f0',
                darktext: '#ebebeb',
                darkbg: 'rgb(2,0,36)',
                darkSecondBg: '#09202c',
                darkborder: '#163849',
                darkPrimary: '#00a6fb',
            },
        },
    },
    plugins: [],
}
