module.exports = {
  content: ["../*.html"],
  theme: {
    extend: {
      colors: {
        brand: {50:'#f5f7fb',100:'#e9eef7',200:'#d2ddf0',300:'#a9bce3',400:'#7c97cf',500:'#5574b7',600:'#3f5a99',700:'#31477a',800:'#22335c',900:'#12244d',950:'#08122c'},
        gold: {50:'#fdf9ec',100:'#fbf0c9',200:'#f6e094',300:'#f0c95c',400:'#f0b429',500:'#d99a0b',600:'#b57c07',700:'#8f6006',800:'#6a4705',900:'#452f03'},
        cream: '#faf7f1',
      },
      fontFamily: {
        sans: ['Outfit','ui-sans-serif','system-ui','Segoe UI','Roboto','Arial','sans-serif'],
        serif: ['"Playfair Display"','Georgia','"Times New Roman"','serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -8px rgba(10,31,68,.12)',
        card: '0 18px 44px -14px rgba(10,31,68,.22)',
      },
    },
  },
  plugins: [],
}
