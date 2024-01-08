import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: '#FFCF33',
                info: '#2C74FF',
                secondary: '#ECECEC',
                success: '#19E85F',
                danger: '#FF1818',
                warning: '#FFA133',
            },
            backgroundColor: {
                primary: {
                    100: '#FFCF33',
                    200: '#FFC300',
                },
                info: {
                    100: '#2C74FF',
                    200: '#065AFF',
                },
                secondary: {
                    100: '#ECECEC',
                    200: '#D8D8D8',
                },
                success: {
                    100: '#19E85F',
                    200: '#2BD163   ',
                },
                danger: {
                    100: '#FF1818',
                    200: '#E11E1E',
                },
                warning: {
                    100: '#FFA133',
                    200: '#FF8A00',
                },
            },
        },
    },
    prefix: 'tw-',
    plugins: [],
};
export default config;
