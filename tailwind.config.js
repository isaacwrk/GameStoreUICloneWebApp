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
            },
            backgroundImage:{
                'forza':"url('~@/assets/img/forza4-about.jpg')",
                'horizon':"url('~@/assets/img/horizon-about.jpg')",
                'origins':"url('~@/assets/img/acorigin-about.jpg')",
                'dishonored':"url('~@/assets/img/dishonored2-about.jpg')",
                'reddead':"url('~@/assets/img/reddeadabout-poster.jpg')"
            },
            width:{
                '22.6':'22.60rem',
                '7.8':'7.8rem'
            },
            height:{
                '7.5':'7.5rem',
                '2.6':'2.68rem'
            },
            borderRadius:{
                '4xl':'2.18rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
