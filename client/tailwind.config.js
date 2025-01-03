import flowbite from 'flowbite/plugin';
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include React components
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Include Flowbite React
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // Example custom color
      },
    },
  },
  plugins: [flowbite, tailwindScrollbar],
};
