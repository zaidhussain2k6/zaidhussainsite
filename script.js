window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FG03315YDQ');


tailwind.config = {
  theme: {
    screens: {
xs: '360px',
sm: '480px',
md: '800px',
lg: '1313px',
mxl: '1548px',
xl: '1740px',
xxl: '1920px',
},

colors: {
'primary-blue': '#0078FF',
'primary-bg': '#18181B',
'secondary-bg': '#27272A',
},

fontFamily: {
FontA: ['Clash Display , sans-serif'],
FontB : ['Satoshi', 'sans-serif'],
FontC : ['Plus Jakarta, sans-serif'],
},

BoxShadow: {
'2xl': 'rgba(24, 90, 219, 1)' ,
'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
'4xl': [
  '0 35px 35px rgba(0, 0, 0, 0.25)',
  '0 45px 65px rgba(0, 0, 0, 0.15)'
]
},

fontSize: {
  'xs': '0.75rem',      // 12px
  'sm': '0.875rem',     // 14px
  'base': '1rem',       // 16px
  'lg': '1.125rem',     // 18px
  'xl': '1.25rem',      // 20px
  '2xl': '1.5rem',      // 24px
  '3xl': '1.875rem',    // 30px
  '4xl': '2.25rem',     // 36px
  '5xl': '3rem',        // 48px
  '6xl': '3.75rem',     // 60px
  '7xl': '4.5rem',      // 72px
  '8xl': '5.5rem',      // 88px
  '9xl': '6rem',        // 96px
  '10xl': '8rem',       // 128px
},

rotate: {
'90': '-90deg',
}
  }
}
