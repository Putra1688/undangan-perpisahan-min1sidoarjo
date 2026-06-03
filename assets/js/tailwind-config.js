tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', 'sans-serif'],
                display: ['Fredoka', 'sans-serif'],
            },
            colors: {
                pastel: {
                    blue: '#BAE6FD',     /* sky-200 */
                    blueDark: '#7DD3FC', /* sky-300 */
                    yellow: '#FEF08A',   /* yellow-200 */
                    green: '#A7F3D0',    /* emerald-200 */
                    pink: '#FBCFE8',     /* pink-200 */
                    orange: '#FED7AA',   /* orange-200 */
                    text: '#334155'      /* slate-700 */
                }
            },
            animation: {
                'bounce-slow': 'bounce 3s infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'wiggle': 'wiggle 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            }
        }
    }
}
