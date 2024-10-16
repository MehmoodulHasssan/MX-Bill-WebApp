/** @type {import('tailwindcss').Config} */
export default {
  content: ['/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'urbanist-black': ['Urbanist-Black', 'sans-serif'],
        'urbanist-black-italic': ['Urbanist-BlackItalic', 'sans-serif'],
        'urbanist-bold': ['Urbanist-Bold', 'sans-serif'],
        'urbanist-bold-italic': ['Urbanist-BoldItalic', 'sans-serif'],
        'urbanist-extra-bold': ['Urbanist-ExtraBold', 'sans-serif'],
        'urbanist-extra-bold-italic': [
          'Urbanist-ExtraBoldItalic',
          'sans-serif',
        ],
        'urbanist-extra-light': ['Urbanist-ExtraLight', 'sans-serif'],
        'urbanist-extra-light-italic': [
          'Urbanist-ExtraLightItalic',
          'sans-serif',
        ],
        'urbanist-italic': ['Urbanist-Italic', 'sans-serif'],
        'urbanist-light': ['Urbanist-Light', 'sans-serif'],
        'urbanist-light-italic': ['Urbanist-LightItalic', 'sans-serif'],
        'urbanist-medium': ['Urbanist-Medium', 'sans-serif'],
        'urbanist-medium-italic': ['Urbanist-MediumItalic', 'sans-serif'],
        'urbanist-regular': ['Urbanist-Regular', 'sans-serif'],
        'urbanist-semi-bold': ['Urbanist-SemiBold', 'sans-serif'],
        'urbanist-semi-bold-italic': ['Urbanist-SemiBoldItalic', 'sans-serif'],
        'urbanist-thin': ['Urbanist-Thin', 'sans-serif'],
        'urbanist-thin-italic': ['Urbanist-ThinItalic', 'sans-serif'],
      },
      colors: {
        primary: '#246BFD',
        secondary: '#FFD300',
        tertiary: '#6C4DDA',
        success: '#0ABE75',
        black: '#181A20',
        black2: '#1D272F',
        info: '#246BFD',
        warning: '#FACC15',
        error: '#F75555',
        disabled: '#D8D8D8',
        white: '#FFFFFF',
        secondaryWhite: '#F8F8F8',
        tertiaryWhite: '#F7F7F7',
        greeen: '#0ABE75',
        red: '#f65554',
        gray: '#9E9E9E',
        gray2: '#35383F',
        gray3: '#9E9E9E',
        dark1: '#000000',
        dark2: '#1F222A',
        dark3: '#35383F',
        greyscale900: '#212121',
        greyScale800: '#424242',
        grayscale700: '#616161',
        grayscale400: '#BDBDBD',
        greyscale300: '#E0E0E0',
        greyscale500: '#FAFAFA',
        greyscale600: '#757575',
        grayscale200: '#EEEEEE',
        grayscale100: '#F5F5F5',
        tansparentPrimary: 'rgba(36, 107, 253, 0.08)',
        transparentSecondary: 'rgba(108,77,218, .15)',
        transparentTertiary: 'rgba(51, 94, 247, .1)',
        transparentRed: 'rgba(255,62,61, .15)',
        transparentWhite: 'rgba(255,255,255, .2)',
        transparentWhite2: 'rgba(255,255,255, .5)',
        blackTie: '#474747',
        grayTie: '#BCBCBC',
        security: '#246BFD',
        card: '#FB9400',
        payment: '#6949FF',
        update: '#FF5A5F',
        account: '#1BAC4B',
        transparentSecurity: 'rgba(36, 107, 253, 0.08)',
        transparentCard: 'rgba(251, 148, 0, 0.08)',
        transparentPayment: 'rgba(105, 73, 255, 0.08)',
        transparentUpdate: 'rgba(255, 90, 95, 0.08)',
        transparentAccount: 'rgba(27, 172, 75, 0.08)',
        transparentPrimary: 'rgba(36, 107, 253, 0.08)',
      },
    },
  },
  plugins: [],
};
