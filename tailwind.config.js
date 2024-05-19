/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:'stc-',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      margin: '16px', // Add a margin of 16px to the container
    },

    colors: {
      initial: 'initial',
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      white:{
        DEFAULT: 'white',
      },
      primary: {
        DEFAULT: '#4E008B',
        100: '#4f008c', // #4f008c
        200: '#4F0C8C', // #4F0C8C
        300: '#4F0C8C1A', // #4F0C8C1A
        400: '#A54EE1', // ##A54EE1
        500: '#B290CD', // #B290CD
      },
      grey: {
        100: '#909A9F', // #909A9F
        200: '#8E9AA0', // #8E9AA0
        300:'#E1DBEB', // #E1DBEB
        400:'#879EA4', // #879EA4
        500:'#EBEDEF', // #EBEDEF
        600:'#FAFAFA', // #FAFAFA
        700:'#707070', // #707070
        800:'#e8ebec', // #e8ebec
        900:'#7070701A', // #e8ebec
        1000:'#FBFBFB', // #FBFBFB
        1100:'#646464', // #646464
        1200:'#E3E3E2', // #E3E3E2
        1300:'#EEEEEE', // #EEEEEE
        1400:'#555555', // #555555
        1500:'#5D5D5D', // #5D5D5D
        1600:'#888888', // #888888
        1700:'#DDDFE2', // #DDDFE2
        1800:'#E4E4E4', // #E4E4E4
        1900: '#E8E8E81D', // #E8E8E81D
        2000: '#ada8b140', // #ada8b140
        2100: '#9E9E9E', // #9E9E9E
        2200: '#F3F3F388', // #F3F3F388
        2300: '#6C6B6B', // #6C6B6B
        2400: '#70707021', // #70707021
        2500: '#45008814', // #45008814
        2600: '#4F008C08', // #4F008C08
      },
      /** natural */
      natural: {
        50:'#F7F7F7', // #F7F7F7
        100: '#FFFF', // #FFFFFF
        200: '#f5f5f5', // #f5f5f5
        300: '#dde0e1', // #dde0e1
        400: '#F3F3F1', // #F3F3F1
        500: '#bbc8ce', // #bbc8ce
        600: '#f9f9f9', // #f9f9f9
        700: '#f8f8f8', // #f8f8f8
        800: '#fdfdfc', // #fdfdfc
        900: '#efefef', // #efefef
        1000: '#F3F3F3', // #efefef
        2000: '#fdfdfd', // #fdfdfd
      },
      /** accent */
      accent: {
        success: {
          100: '#E1FAF2', // #E1FAF2
          200: '#D6F1E9', // #D6F1E9
          500: '#157D5E', // #157D5E
        },
        info: {
          100: '#D4DFF3', // #D4DFF3
          200: '#BDE6F7', // #BDE6F7
          300: '#D7EEF7', // #D7EEF7
          500: '#1C7091', // #1C7091
        },
        error: {
          100: '#FFE0E3', // #FFE0E3
          200: '#cf2543', // #cf2543
          500: '#E52031', // #E52031
        },
        warning: {
          100: '#FFEEC6', // #FFEEC6
          200: '#FFF6E0 ', // #FFF6E0
          500: '#BD6621', // #BD6621
        },
        coral: {
          100: '#FF375E', // #FF375E
          200:'#FFEFF2', // #FFEFF2
          300:'#FF395F', // #FF395F
        },

      },
      /** extended */
      extended: {
        orange: {
          100: '#ff6a39', // ##ff6a39
          200: '#FFEEE6', // #FFEEE6
          300: '#5FB38A', // #5FB38A
          400: '#FFDECD', // #FFDECD
          500: '#F6C042', // #FFAC81
          600: '#FF984021', // #FF984021
          700: '#F6CE18', // #F6CE18
          800: '#FF6C003C', // #FF6C003C
        },
        pink: {
          100: '#FFE1E7', // #FFE1E7
          200: '#EB4B6221', // #EB4B6221
        },
        purple: {
          100: '#EEEDF7', // #EEEDF7
          200: '#DCDBEE', // #DCDBEE
          300: '#B9B6DE', // #B9B6DE
          400: '#9692CD', // #9692CD
          500: '#4F49AC', // #4F49AC
        },
        begonia: {
          100: '#FFF1F2', // #FFF1F2
          200: '#FFE3E5', // #FFE3E5
          300: '#FFC6CB', // #FFC6CB
          400: '#FEAAB1', // #FEAAB1
          500: '#FE717D', // #FE717D
          600: '#FFEAF8', // #FFEAF8
          700: '#C648A0', // #C648A0
          800: '#C649A0', // #C649A0
        },
        blue: {
          100: '#E9EFF9', // #E9EFF9
          200: '#D4DFF3', // #D4DFF3
          300: '#A8BEE6', // #A8BEE6
          400: '#7D9EDA', // #7D9EDA
          500: '#265DC1', // #265DC1
          600: '#03285F', // #03285F
          700: '#D1EAF7', // #D1EAF7
          800: '#06A4FC', // #06A4FC
          900: '#05A3FC', // #05A3FC
        },
        oasis: {
          100:'#00c48c', // #00c48c
          200:'#00C48C4D', //#00C48C4D
          300:'#00C48C21', //#00C48C21
          400:'#EFFFFB', //#EFFFFB
          500:'#E6FAF4', //#E6FAF4
          600:'#159E0B', //#159E0B
          700:'#00C48C29', //#00C48C29
          800:'#D3F4EB', //#D3F4EB
          900:'#DFFDE2', //#DFFDE2
          1000:'#00EA17', //#00EA17
          1100:'#74DD7B', //#74DD7B
          1200:'#07E916', //#07E916
          1300:'#00C48C26', //#00C48C26
        },
        black: {
          100: '#1D252D', // #1D252D
          200: '#8e9aa014', // #8e9aa014
          300: '#212121', // #212121
          400: '#070303', // #070303
          600: '#000000', // #000000
          700: '#111111', // #000000
          800: '#090908', // #090908
          900: '#8E9AA0', // #8E9AA0
        },
      },

    },
    spacing: {
      inherit: 'inherit',
      initial: 'initial',
      normal: 'normal',
      unset: 'unset',
      none: 'none',
      '95%': '95%',
      '90%': '90%',
      '85%': '85%',
      '80%': '80%',
      '75%': '75%',
      '70%': '70%',
      '60%': '60%',
      '55%': '55%',
      '50%': '50%',
      '45%': '45%',
      '40%': '40%',
      '35%': '35%',
      '30%': '30%',
      '25%': '25%',
      '20%': '20%',
      '15%': '15%',
      '10%': '10%',
      '5%': '5%',
      '100x':'9.25rem', //148px
      '90x':'12.125rem', //194px
      '80x': '8.5rem', // 136px
      '70x': '7.5rem', // 120px
      '60x': '6.5rem', // 104px
      '50x': '6rem', // 96px
      '40x': '5.5rem', // 88px
      '30x': '4.5rem', // 72px
      '20x': '4rem', // 64px
      '10x': '3.5rem', // 56px
      '9x': '3rem', // 48px
      '8x': '2.5rem', // 40px
      '7x': '2rem', // 32px
      '6x': '1.5rem', // 24px
      '5.5x': '1.375rem', // 22px
      '5x': '1.25rem', // 20px
      '4.5x': '1.125rem', // 18px
      '4x': '1rem', // 16px
      '3.5x': '0.875rem', // 14px
      '3x': '0.75rem', // 12px
      '2x': '0.5rem', // 8px
      '1x': '0.25rem', // 4px
      '0.5x': '0.125rem', // 2px
      '6px': '6px', // 1px
      '0x': '0', // 0px
    },
    gap: {
      inherit: 'inherit',
      initial: 'initial',
      normal: 'normal',
      unset: 'unset',
      none: 'none',
      xxxxl:'3rem',
      xxxxxl:'2rem',
      xxl: '1.75rem', // 28px
      xl: '1.5rem', // 24px
      lg: '1.25rem', // 20px
      md: '1rem', // 16px
      sm: '0.75rem', // 12px
      xs: '0.5rem', // 8px
      xxs: '0.25rem', // 4px
      px: '1px', // 4px
    },
    fontFamily: {
      STC_Forward: 'ّSTC_Forward',

    },
    fontWeight: {
      inherit: 'inherit',
      initial: 'initial',
      normal: 'normal',
      unset: 'unset',
      none: 'none',
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      xbold: 900,
    },
    fontSize: {
      inherit: 'inherit',
      initial: 'initial',
      normal: 'normal',
      unset: 'unset',
      none: 'none',
      base: 16,
      xs: 12,
      xxs: 14,
      mmmd: 18,
      mmd: 22,
      lg: 24,
      xl: 28,
      xxl: 32,
      xxxs: 6,
      xxxxs: 8,


      /**
       * ? Body
       */
      md: ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }], // 16px 24px medium
      'md-semi-bold': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 16px 24px medium
      'md-bold': ['1rem', { lineHeight: '1.5rem', fontWeight: '700' }], // 16px 24px medium
      sm: ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 14px 24px small
      'sm-semi-bold': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 14px 24px small
      'sm-bold': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '700' }], // 14px 24px small
      /**
       * ? Heading
       */
      'heading-1-en': ['3rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 48px 56px heading 1 EN
      'heading-2-en': ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }], // 40px 48px heading 2 EN
      'heading-3-en': ['1.75rem', { lineHeight: '2rem', fontWeight: '700' }], // 28px 32px heading 3 EN
      'heading-4-en': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '700' }], // 20px 28px heading 4 EN
      'heading-5-en': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '700' }], // 18px 24px heading 5 EN
      'heading-6-en': ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }], // 16px 20 px heading 6 EN
      'heading-1-ar': ['3rem', { lineHeight: '4rem', fontWeight: '700' }], // 48px 64px heading 1 AR
      'heading-2-ar': ['2.5rem', { lineHeight: '3.5rem', fontWeight: '700' }], // 40px 56px heading 2 AR
      'heading-3-ar': ['1.75rem', { lineHeight: '3rem', fontWeight: '700' }], // 28px 48px heading 3 AR
      'heading-5-ar': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '700' }], // 18px 24px heading 5 AR
      'heading-6-ar': ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }], // 16px 20 px heading 6 AR
      /**
       * ? Sub Heading
       */
      'sub-heading-1-en': [
        '1.75rem',
        { lineHeight: '2rem', fontWeight: 'normal' },
      ], // 28px 32px sub heading 1 EN
      'sub-heading-2-en': [
        '1.25rem',
        { lineHeight: '1.75rem', fontWeight: '500' },
      ], // 20px 24px sub heading 2 EN
      'sub-heading-3-en': [
        '1.125rem',
        { lineHeight: '1.5rem', fontWeight: '500' },
      ], // 18px 24px sub heading 3 EN
      'sub-heading-4-en': [
        '1rem',
        { lineHeight: '1.25rem', fontWeight: '500' },
      ], // 16px 20px sub heading 4  EN
      'sub-heading-1-ar': [
        '1.75rem',
        { lineHeight: '2.5rem', fontWeight: '500' },
      ], // 28px 40px sub heading 1 AR
      'sub-heading-2-ar': [
        '1.25rem',
        { lineHeight: '2rem', fontWeight: '500' },
      ], // 20px 32px sub heading 2 AR
      'sub-heading-3-ar': [
        '1.125rem',
        { lineHeight: '2rem', fontWeight: '500' },
      ], // 18px 32px sub heading 3 AR
      'sub-heading-4-ar': [
        '1rem',
        { lineHeight: '1.25rem', fontWeight: '500' },
      ], // 16px 24px sub heading 4 AR
      /**
       * ? Links
       */
      'link-lg': ['1.125rem', { lineHeight: '2rem', fontWeight: '600' }], // 18px 32px ling 600  large
      'link-md': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 16px 24px ling 600  medium
      'link-sm': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 14px 24px  600 ling small
      'link-xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '600' }], // 12px 16px 600 ling extra small
      /**
       * ? Buttons
       */
      'btn-lg': ['1.25rem', { lineHeight: '2rem', fontWeight: '700' }], // 20px 32px button large
      'btn-md': ['1rem', { lineHeight: '1.5rem', fontWeight: '700' }], // 16px 24px button default
      'btn-sm': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '700' }], // 14px 24px button small
      'btn-xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }], // 12px 16px button extra small
      /**
       * ? Values
       */
      '80x': '8.5rem', // 136px
      '70x': '7.5rem', // 120px
      '60x': '6.5rem', // 104px
      '50x': '6rem', // 96px
      '40x': '5.5rem', // 88px
      '30x': '4.5rem', // 72px
      '20x': '4rem', // 64px
      '10x': '3.5rem', // 56px
      '11x': '0.375rem', // 6px
      '9x': '3rem', // 48px
      '8x': '2.5rem', // 40px
      '7x': '2rem', // 32px
      '6x': '1.5rem', // 24px
      '5.5x': '1.375rem', // 22px
      '5x': '1.25rem', // 20px
      '4.5x': '1.125rem', // 18px
      '4x': '1rem', // 16px
      '3.5x': '0.875rem', // 14px
      '3x': '0.75rem', // 12px
      '2x': '0.5rem', // 8px
      '1x': '0.25rem', // 4px
      '0.5x': '0.125rem', // 2px
      '1px': '1px', // 1px
      '0x': '0', // 0px
    },
    screens: {
      // => @media (max-width: 576px) { ... } smartphones
      xs: { max: '576px' },
      // => @media (min-width: 576px) { ... } Small tablets and large smartphones
      sm: '576px',
      // => @media (min-width: 768px) { ... } Small tablets (portrait view)
      md: '768px',
      // => @media (min-width: 992px) { ... } Tablets and small desktops
      lg: '992px',
      // => @media (min-width: 1200px) { ... } Large tablets and desktops
      xl: '1200px',
      // => @media (min-width: 1400px) { ... } HD screen
      xxl: '1400px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '80x': '8.5rem', // 136px
      '70x': '7.5rem', // 120px
      '60x': '6.5rem', // 104px
      '50x': '6rem', // 96px
      '40x': '5.5rem', // 88px
      '30x': '4.5rem', // 72px
      '20x': '4rem', // 64px
      '10x': '3.5rem', // 56px
      '9x': '3rem', // 48px
      '8x': '2.5rem', // 40px
      '7x': '2rem', // 32px
      '6x': '1.5rem', // 24px
      '5.5x': '1.375rem', // 22px
      '5x': '1.25rem', // 20px
      '4.5x': '1.125rem', // 18px
      '4x': '1rem', // 16px
      '3.5x': '0.875rem', // 14px
      '3x': '0.75rem', // 12px
      '2x': '0.5rem', // 8px
      '1x': '0.375', // 6px
      '1x': '0.25rem', // 4px
      '0.5x': '0.125rem', // 2px
      '0x': '0', // 0px
    },

    borderRadius: {
      inherit: 'inherit',
      initial: 'initial',
      normal: 'normal',
      unset: 'unset',
      none: 'none',
      '50%': '50%',
      xxxl: '2rem', // 32px
      xxl: '1.75rem', // 28px
      xl: '1.5rem', // 24px
      lg: '1.25rem', // 20px
      md: '1rem', // 16px
      sm: '0.75rem', // 12px
      xs: '0.5rem', // 8px
      xxs: '0.25rem', // 4px
      xxs: '0.25rem', // 4px
      s: '0.375', // 6px
    },
    boxShadow: {
      inherit: 'inherit',
      initial: 'initial',
      normal: 'normal',
      unset: 'unset',
      none: 'none','3xl': '0px 32px 64px -12px rgba(38, 38, 38, 0.14)','2xl': '0px 24px 48px -12px rgba(38, 38, 38, 0.16)',
      xl: '0px -3px 8px -4px rgba(38, 38, 38, 0.03), 0px 20px 24px -4px rgba(38, 38, 38, 0.08)',
      lg: '0px -3px 6px -2px rgba(38, 38, 38, 0.03), 0px 12px 16px -4px rgba(38, 38, 38, 0.08)',
      md: '0px -2px 8px rgba(38, 38, 38, 0.04), 0px 4px 8px -2px rgba(38, 38, 38, 0.07)',
      sm: '0px 0px 2px rgba(38, 38, 38, 0.05), 0px 1px 3px rgba(38, 38, 38, 0.1)',
      xs: '0px 0px 2px rgba(38, 38, 38, 0.08)',
    },
    corePlugins: {
      container: true,
    },
    backgroundImage: {

    },
    maskImage: {

    },
    extend: {
      keyframes: {
        legacyPulse: {
          '0%, 60%, 100%': {
            opacity: 0.3,
            transform: 'scale(.03)',
          },
          '30%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
      animation: {
      },
    },
  },
  plugins: [
  ]

}
