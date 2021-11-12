module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily:{
                sans:['Lato']
            },
            colors:{
                'primary-button':"#695CD5",
                'primary-blue':"#232077",
                "font-blue":"#1B2F50",
                'base-gray':"#F2F1F7"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
