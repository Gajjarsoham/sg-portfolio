// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx}", // <-- THIS LINE IS CRUCIAL
//     ],
//     theme: {
//         extend: {
//             fontFamily: {
//                 sans: ['Inter', 'sans-serif'],
//                 display: ['Space Grotesk', 'sans-serif'],
//                 mono: ['JetBrains Mono', 'monospace'],
//             },
//         },
//     },
//     plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Clash Display', 'sans-serif'], // Or 'General Sans'
            },
            colors: {
                zinc: {
                    950: '#0a0a0f', // Near-black background
                }
            }
        },
    },
    plugins: [],
}