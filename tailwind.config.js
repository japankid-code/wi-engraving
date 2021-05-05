module.exports = {
    mode: 'jit',
    purge: [ // tells the compiler where to check for used classes
	    './public/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    //
    variants: {
        display: ['responsive', 'group-hover'],
    }
}