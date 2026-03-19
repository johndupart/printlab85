/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                "primary": "#0db9f2",
                "background-dark": "#101e22",
                "brand-blue": "#1e70b6",
            },
            fontFamily: {
                display: ["Manrope", "sans-serif"],
            }
        },
    },
    plugins: [],
}