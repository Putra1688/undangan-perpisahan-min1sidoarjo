tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                theme: {
                    dark: '#1E293B',    
                    mint: '#86EFAC',    
                    blue: '#93C5FD',   
                    yellow: '#FDE047',    
                    pink: '#F9A8D4',
                    orange: '#FDBA74',
                    purple: '#C4B5FD',
                    bg: '#F8FAFC',
                    text: '#334155'
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        }
    }
}
