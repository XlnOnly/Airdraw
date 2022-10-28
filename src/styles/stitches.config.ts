import { createStitches, defaultThemeMap } from '@stitches/react'

const { createTheme, styled } = createStitches({
  themeMap: {
    ...defaultThemeMap,
  },
  theme: {
    colors: {
      panel: '#fefefe',
      canvas: 'rgb(248, 249, 250)',
      text: '#33333',
    },
    space: {
      0: '2px',
      1: '3px',
      2: '4px',
    },
  },
})

export const dark = createTheme({
  colors: {
    panel: '#363D44',
    canvas: '#212529',
    text: '#f8f9fa',
  },
})

export { styled }
