/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--primary) / <alpha-value>)",
                secondary: "rgb(var(--secondary) / <alpha-value>)",
                accent: "rgb(var(--accent) / <alpha-value>)",
                content: "rgb(var(--content) / <alpha-value>)",
                background: "rgb(var(--background) / <alpha-value>)",
                edge: "rgb(var(--edge) / <alpha-value>)",
            },
        },
    },
    plugins: [],
});